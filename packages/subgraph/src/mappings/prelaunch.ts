import { Address } from '@graphprotocol/graph-ts'
import {
  DepositETHCall,
  DepositWETHCall,
  WithdrawCall,
  ClaimVeTokensCall,
  ChangeLockupCall,
} from '../../generated/PreLaunch/PreLaunch'
import { PreLaunchPosition, PreLaunch } from '../../generated/schema'
import { BI_ZERO } from './helpers'
import { PreLaunch as PreLaunchContract } from '../../generated/PreLaunch/PreLaunch'

const LPETH_ADDRESS = '0xF3a75E087A92770b4150fFF14c6d36FB07796252'.toLowerCase()
const PRELAUNCH_ADDRESS = '0xcC73341a078761AB869D90030D6632F9ea139f2b'.toLowerCase()

export function handleDepositETH(call: DepositETHCall): void {
  let amount = call.transaction.value

  let preLaunch = PreLaunch.load(call.to.toHexString())
  if (preLaunch == null) {
    preLaunch = new PreLaunch(call.to.toHexString())
    preLaunch.amount = BI_ZERO
    preLaunch.weightedAmount = BI_ZERO
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
    preLaunch.weightedAmount = preLaunch.weightedAmount.minus(position.weightedAmount)
  }

  let PreLaunchCaller = PreLaunchContract.bind(Address.fromString(PRELAUNCH_ADDRESS))
  let called = PreLaunchCaller.try_calculateWeightedDeposit(position.amount, position.duration)
  if (!called.reverted) {
    let weighted = BI_ZERO
    if (called.value.gt(position.amount)) {
      weighted = called.value
    } else {
      weighted = position.amount
    }
    position.weightedAmount = weighted
    preLaunch.weightedAmount = preLaunch.weightedAmount.plus(weighted)
  }
  position.save()

  preLaunch.amount = preLaunch.amount.plus(amount)
  preLaunch.save()
}

export function handleDepositWETH(call: DepositWETHCall): void {
  let amount = call.inputs.amount

  let preLaunch = PreLaunch.load(call.to.toHexString())
  if (preLaunch == null) {
    preLaunch = new PreLaunch(call.to.toHexString())
    preLaunch.amount = BI_ZERO
    preLaunch.weightedAmount = BI_ZERO
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
    preLaunch.weightedAmount = preLaunch.weightedAmount.minus(position.weightedAmount)
  }

  let PreLaunchCaller = PreLaunchContract.bind(Address.fromString(PRELAUNCH_ADDRESS))
  let called = PreLaunchCaller.try_calculateWeightedDeposit(position.amount, position.duration)
  if (!called.reverted) {
    let weighted = BI_ZERO
    if (called.value.gt(position.amount)) {
      weighted = called.value
    } else {
      weighted = position.amount
    }
    position.weightedAmount = weighted
    preLaunch.weightedAmount = preLaunch.weightedAmount.plus(weighted)
  }
  position.save()

  preLaunch.amount = preLaunch.amount.plus(amount)
  preLaunch.save()
}

export function handleWithdraw(call: WithdrawCall): void {
  let amount = call.inputs.amount

  let preLaunch = PreLaunch.load(call.to.toHexString())
  if (preLaunch == null) {
    preLaunch = new PreLaunch(call.to.toHexString())
  }

  let position = PreLaunchPosition.load(call.from.toHexString())
  if (position != null) {
    position.amount = position.amount.minus(amount)

    let PreLaunchCaller = PreLaunchContract.bind(Address.fromString(PRELAUNCH_ADDRESS))
    let called = PreLaunchCaller.try_calculateWeightedDeposit(amount, position.duration)
    if (!called.reverted) {
      let weighted = BI_ZERO
      if (called.value.gt(position.amount)) {
        weighted = called.value
      } else {
        weighted = amount
      }
      position.weightedAmount = position.weightedAmount.minus(weighted)
      preLaunch.weightedAmount = preLaunch.weightedAmount.minus(weighted)
    }
    position.save()

    preLaunch.amount = preLaunch.amount.minus(amount)
    preLaunch.save()
  }
}

export function handleClaim(call: ClaimVeTokensCall): void {
  // convert prelaunch into LiquidityPosition
  let position = PreLaunchPosition.load(call.from.toHexString())
  if (position == null) {
    return
  }
  position.claimed = true
  position.claimedAt = call.block.timestamp
  position.save()

  // liquidity position and user is created by the LP token transfer event from the pre-launch contract to this one
}

export function handleChangeLockup(call: ChangeLockupCall): void {
  let preLaunch = PreLaunch.load(call.to.toHexString())
  if (preLaunch == null) {
    preLaunch = new PreLaunch(call.to.toHexString())
  }
  let position = PreLaunchPosition.load(call.from.toHexString())
  if (position != null) {
    let PreLaunchCaller = PreLaunchContract.bind(Address.fromString(PRELAUNCH_ADDRESS))
    let oldCalled = PreLaunchCaller.try_calculateWeightedDeposit(position.amount, position.duration)
    if (!oldCalled.reverted) {
      let weighted = BI_ZERO
      if (oldCalled.value.gt(position.amount)) {
        weighted = oldCalled.value
      } else {
        weighted = position.amount
      } 
      preLaunch.weightedAmount = preLaunch.weightedAmount.minus(weighted)

    }
    // subtract the current weighted amount from the total
    // we will add it back after we calculate the new weighted amount

    let called = PreLaunchCaller.try_calculateWeightedDeposit(position.amount, call.inputs.duration)
    if (!called.reverted) {
      let weighted = BI_ZERO
      if (called.value.gt(position.amount)) {
        weighted = called.value
      } else {
        weighted = position.amount
      }
      preLaunch.weightedAmount = preLaunch.weightedAmount.plus(weighted)
      position.weightedAmount = weighted
      position.duration = call.inputs.duration
    }
    position.save() 
    preLaunch.save()
  }
}
