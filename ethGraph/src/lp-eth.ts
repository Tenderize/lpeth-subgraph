import {
  BatchUnlockBought as BatchUnlockBoughtEvent,
  BatchUnlockRedeemed as BatchUnlockRedeemedEvent,
  ClaimWithdrawRequest as ClaimWithdrawRequestEvent,
  Deposit as DepositEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RelayerRewardsClaimed as RelayerRewardsClaimedEvent,
  Swap as SwapEvent,
  UnlockBought as UnlockBoughtEvent,
  UnlockRedeemed as UnlockRedeemedEvent,
  Upgraded as UpgradedEvent,
  Withdraw as WithdrawEvent
} from "../generated/LpETH/LpETH"
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
} from "../generated/schema"

export function handleBatchUnlockBought(event: BatchUnlockBoughtEvent): void {
  let entity = new BatchUnlockBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.amount = event.params.amount
  entity.reward = event.params.reward
  entity.lpFees = event.params.lpFees
  entity.tokenIds = event.params.tokenIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBatchUnlockRedeemed(
  event: BatchUnlockRedeemedEvent
): void {
  let entity = new BatchUnlockRedeemed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.relayer = event.params.relayer
  entity.amount = event.params.amount
  entity.reward = event.params.reward
  entity.lpFees = event.params.lpFees
  entity.tokenIds = event.params.tokenIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimWithdrawRequest(
  event: ClaimWithdrawRequestEvent
): void {
  let entity = new ClaimWithdrawRequest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.amount = event.params.amount
  entity.lpSharesMinted = event.params.lpSharesMinted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRelayerRewardsClaimed(
  event: RelayerRewardsClaimedEvent
): void {
  let entity = new RelayerRewardsClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.relayer = event.params.relayer
  entity.rewards = event.params.rewards

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.asset = event.params.asset
  entity.amountIn = event.params.amountIn
  entity.fee = event.params.fee
  entity.unlockId = event.params.unlockId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnlockBought(event: UnlockBoughtEvent): void {
  let entity = new UnlockBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.reward = event.params.reward
  entity.lpFees = event.params.lpFees

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnlockRedeemed(event: UnlockRedeemedEvent): void {
  let entity = new UnlockRedeemed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.relayer = event.params.relayer
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.reward = event.params.reward
  entity.lpFees = event.params.lpFees

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.lpSharesBurnt = event.params.lpSharesBurnt
  entity.requestId = event.params.requestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
