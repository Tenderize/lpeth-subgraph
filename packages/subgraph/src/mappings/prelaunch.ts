import { BigDecimal, BigInt } from "@graphprotocol/graph-ts"
import {DepositETHCall, DepositWETHCall, WithdrawCall, ClaimVeTokensCall, ChangeLockupCall} from "../../generated/PreLaunch/PreLaunch"
import {Deposit, Withdraw, PreLaunchPosition, PreLaunch} from "../../generated/schema"
import { BI_ZERO, TEN_18 } from "./helpers"

const LPETH_ADDRESS = "0xF3a75E087A92770b4150fFF14c6d36FB07796252".toLowerCase()

const DEADLINE = 1728746087
const MIN_LOCKUP = TEN_18
const MAX_LOCKUP = BigInt.fromI32(52).times(TEN_18)
const EPOCH_LENGTH = 604800
const MIN_MULTIPLIER = BigInt.fromString("100000000000000000")
const MAX_MULTIPLIER = BigInt.fromString("5000000000000000000")
const SLOPE = BigInt.fromString("2500000000000000000")

// const calculateWeightedDeposit = (amount: BigInt, epochs: BigInt):BigInt => {
//     if (epochs.lt(MIN_LOCKUP)) {
//         return BI_ZERO
//     }
//     return amount.times(MIN_MULTIPLIER.plus(MAX_MULTIPLIER.minus(MIN_MULTIPLIER)).times(
//         epochs.minus(MIN_LOCKUP).div(MAX_LOCKUP.minus(MIN_LOCKUP)).pow(SLOPE)
//     ))
// }

const calculateWeightedDeposit = (amount: BigInt, epochs: BigInt): BigInt => {
    let x = parseFloat(amount.toBigDecimal().div(TEN_18.toBigDecimal()).toString())
    let e = parseInt(epochs.toString(), 10)

    let w = (x * (1 + (5 - 1)) * (e - 1) / (52 - 1)) ** 2.5

    return BigInt.fromString(BigDecimal.fromString(w.toString()).times(TEN_18.toBigDecimal()).toString())
}

export function handleDepositETH(call: DepositETHCall):void {
    let amount = call.transaction.value

    let preLaunch = PreLaunch.load(call.to.toHexString())
    if (preLaunch == null) {
        preLaunch = new PreLaunch(call.to.toHexString())
    }

    let position = PreLaunchPosition.load(call.from.toHexString())
    if (position == null) {
        position = new PreLaunchPosition(call.from.toHexString())
        position.claimed = false
        position.amount = amount
        position.duration = call.inputs.duration
        position.account = call.from
    } else {
        position.amount = position.amount.plus(amount)
        position.duration = call.inputs.duration

        // subtract the current weighted amount from the total
        // we will add it back after we calculate the new weighted amount
        // in case the duration changed
        preLaunch.amount = preLaunch.amount.minus(position.weightedAmount)
    }

    let weighted = calculateWeightedDeposit(position.amount, position.duration)
    position.weightedAmount = weighted
    position.save()

    preLaunch.amount = preLaunch.amount.plus(amount)
    preLaunch.weightedAmount = preLaunch.weightedAmount.plus(weighted)
    preLaunch.save()

    let deposit = new Deposit(
        call.transaction.hash.concatI32(0)
    )
    deposit.from = call.from
    deposit.amount = amount
    deposit.lpSharesMinted = amount
    deposit.blockTimestamp = call.block.timestamp
    deposit.blockNumber = call.block.number
    deposit.transactionHash = call.transaction.hash
    deposit.save()
}

export function handleDepositWETH(call: DepositWETHCall):void {
    let amount = call.inputs.amount

    let preLaunch = PreLaunch.load(call.to.toHexString())
    if (preLaunch == null) {
        preLaunch = new PreLaunch(call.to.toHexString())
    }

    let position = PreLaunchPosition.load(call.from.toHexString())
    if (position == null) {
        position = new PreLaunchPosition(call.from.toHexString())
        position.claimed = false
        position.amount = amount
        position.duration = call.inputs.duration
        position.account = call.from
    } else {
        position.amount = position.amount.plus(amount)
        position.duration = call.inputs.duration

        // subtract the current weighted amount from the total
        // we will add it back after we calculate the new weighted amount
        // in case the duration changed
        preLaunch.amount = preLaunch.amount.minus(position.weightedAmount)
    }

    let weighted = calculateWeightedDeposit(position.amount, position.duration)
    position.weightedAmount = weighted
    position.save()

    preLaunch.amount = preLaunch.amount.plus(amount)
    preLaunch.weightedAmount = preLaunch.weightedAmount.plus(weighted)
    preLaunch.save()

    let deposit = new Deposit(
        call.transaction.hash.concatI32(0)
    )
    deposit.from = call.from
    deposit.amount = amount
    deposit.lpSharesMinted = amount
    deposit.blockTimestamp = call.block.timestamp
    deposit.blockNumber = call.block.number
    deposit.transactionHash = call.transaction.hash
    deposit.save()
}

export function handleWithdraw(call: WithdrawCall):void {
    let amount = call.inputs.amount

    let preLaunch = PreLaunch.load(call.to.toHexString())
    if (preLaunch == null) {
        preLaunch = new PreLaunch(call.to.toHexString())
    }

    let position = PreLaunchPosition.load(call.from.toHexString())
    if (position != null) {
        position.amount = position.amount.minus(amount)

        let weighted = calculateWeightedDeposit(amount, position.duration)
        position.weightedAmount = position.weightedAmount.minus(weighted)
        position.save()

        preLaunch.amount = preLaunch.amount.minus(amount)
        preLaunch.weightedAmount = preLaunch.weightedAmount.minus(weighted)
        preLaunch.save()
    }

    let withdraw = new Withdraw(call.transaction.hash.concatI32(0))
    withdraw.amount = call.inputs.amount
    withdraw.lpSharesBurnt = call.inputs.amount
    withdraw.to = call.from
    withdraw.blockTimestamp = call.block.timestamp
    withdraw.blockNumber = call.block.number
    withdraw.transactionHash = call.transaction.hash

    withdraw.save()
}

export function handleClaim (call: ClaimVeTokensCall):void {
    // convert prelaunch into LiquidityPosition
    let position = PreLaunchPosition.load(call.from.toHexString())
    if (position == null) {
        return
    }
    position.claimed = true
    position.save()

  // liquidity position and user is created by the LP token transfer event from the pre-launch contract to this one
}

export function handleChangeLockup (call: ChangeLockupCall):void {
    let preLaunch = PreLaunch.load(call.to.toHexString())
    if (preLaunch == null) {
        preLaunch = new PreLaunch(call.to.toHexString())
    }
    let position = PreLaunchPosition.load(call.from.toHexString())
    if (position != null) {
        let oldWeighted = calculateWeightedDeposit(position.amount, position.duration)
        // subtract the current weighted amount from the total
        // we will add it back after we calculate the new weighted amount
        preLaunch.weightedAmount = preLaunch.weightedAmount.minus(oldWeighted)

        let weighted = calculateWeightedDeposit(position.amount, call.inputs.duration)
        position.weightedAmount = weighted
        position.duration = call.inputs.duration
        position.save()

        preLaunch.weightedAmount = preLaunch.weightedAmount.plus(weighted)
        preLaunch.save()
    }
}