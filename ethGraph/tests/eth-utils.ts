import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BatchUnlockBought,
  BatchUnlockRedeemed,
  ClaimWithdrawRequest,
  Deposit,
  Initialized,
  OwnershipTransferred,
  RelayerRewardsClaimed,
  Swap,
  UnlockBought,
  UnlockRedeemed,
  Upgraded,
  Withdraw
} from "../generated/eth/eth"

export function createBatchUnlockBoughtEvent(
  caller: Address,
  amount: BigInt,
  reward: BigInt,
  lpFees: BigInt,
  tokenIds: Array<BigInt>
): BatchUnlockBought {
  let batchUnlockBoughtEvent = changetype<BatchUnlockBought>(newMockEvent())

  batchUnlockBoughtEvent.parameters = new Array()

  batchUnlockBoughtEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  batchUnlockBoughtEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  batchUnlockBoughtEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  batchUnlockBoughtEvent.parameters.push(
    new ethereum.EventParam("lpFees", ethereum.Value.fromUnsignedBigInt(lpFees))
  )
  batchUnlockBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(tokenIds)
    )
  )

  return batchUnlockBoughtEvent
}

export function createBatchUnlockRedeemedEvent(
  relayer: Address,
  amount: BigInt,
  reward: BigInt,
  lpFees: BigInt,
  tokenIds: Array<BigInt>
): BatchUnlockRedeemed {
  let batchUnlockRedeemedEvent = changetype<BatchUnlockRedeemed>(newMockEvent())

  batchUnlockRedeemedEvent.parameters = new Array()

  batchUnlockRedeemedEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )
  batchUnlockRedeemedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  batchUnlockRedeemedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  batchUnlockRedeemedEvent.parameters.push(
    new ethereum.EventParam("lpFees", ethereum.Value.fromUnsignedBigInt(lpFees))
  )
  batchUnlockRedeemedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(tokenIds)
    )
  )

  return batchUnlockRedeemedEvent
}

export function createClaimWithdrawRequestEvent(
  requestId: BigInt,
  to: Address,
  amount: BigInt
): ClaimWithdrawRequest {
  let claimWithdrawRequestEvent = changetype<ClaimWithdrawRequest>(
    newMockEvent()
  )

  claimWithdrawRequestEvent.parameters = new Array()

  claimWithdrawRequestEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  claimWithdrawRequestEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  claimWithdrawRequestEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimWithdrawRequestEvent
}

export function createDepositEvent(
  from: Address,
  amount: BigInt,
  lpSharesMinted: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "lpSharesMinted",
      ethereum.Value.fromUnsignedBigInt(lpSharesMinted)
    )
  )

  return depositEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRelayerRewardsClaimedEvent(
  relayer: Address,
  rewards: BigInt
): RelayerRewardsClaimed {
  let relayerRewardsClaimedEvent = changetype<RelayerRewardsClaimed>(
    newMockEvent()
  )

  relayerRewardsClaimedEvent.parameters = new Array()

  relayerRewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )
  relayerRewardsClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "rewards",
      ethereum.Value.fromUnsignedBigInt(rewards)
    )
  )

  return relayerRewardsClaimedEvent
}

export function createSwapEvent(
  caller: Address,
  asset: Address,
  amountIn: BigInt,
  fee: BigInt,
  unlockId: BigInt
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "unlockId",
      ethereum.Value.fromUnsignedBigInt(unlockId)
    )
  )

  return swapEvent
}

export function createUnlockBoughtEvent(
  caller: Address,
  tokenId: BigInt,
  amount: BigInt,
  reward: BigInt,
  lpFees: BigInt
): UnlockBought {
  let unlockBoughtEvent = changetype<UnlockBought>(newMockEvent())

  unlockBoughtEvent.parameters = new Array()

  unlockBoughtEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  unlockBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  unlockBoughtEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  unlockBoughtEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  unlockBoughtEvent.parameters.push(
    new ethereum.EventParam("lpFees", ethereum.Value.fromUnsignedBigInt(lpFees))
  )

  return unlockBoughtEvent
}

export function createUnlockRedeemedEvent(
  relayer: Address,
  tokenId: BigInt,
  amount: BigInt,
  reward: BigInt,
  lpFees: BigInt
): UnlockRedeemed {
  let unlockRedeemedEvent = changetype<UnlockRedeemed>(newMockEvent())

  unlockRedeemedEvent.parameters = new Array()

  unlockRedeemedEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )
  unlockRedeemedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  unlockRedeemedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  unlockRedeemedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  unlockRedeemedEvent.parameters.push(
    new ethereum.EventParam("lpFees", ethereum.Value.fromUnsignedBigInt(lpFees))
  )

  return unlockRedeemedEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}

export function createWithdrawEvent(
  to: Address,
  amount: BigInt,
  lpSharesBurnt: BigInt,
  requestId: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "lpSharesBurnt",
      ethereum.Value.fromUnsignedBigInt(lpSharesBurnt)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )

  return withdrawEvent
}
