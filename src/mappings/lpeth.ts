import { BigInt } from "@graphprotocol/graph-ts";
import {
  BatchUnlockBought as BatchUnlockBoughtEvent,
  BatchUnlockRedeemed as BatchUnlockRedeemedEvent,
  ClaimWithdrawRequest as ClaimWithdrawRequestEvent,
  Deposit as DepositEvent,
  Initialized as InitializedEvent,
  LpETH,
  RelayerRewardsClaimed as RelayerRewardsClaimedEvent,
  Swap as SwapEvent,
  UnlockBought as UnlockBoughtEvent,
  UnlockRedeemed as UnlockRedeemedEvent,
  Withdraw as WithdrawEvent,
} from "../../generated/LpETH/LpETH";
import {SwapLPTokenTransfer} from '../../generated/schema'
import {
  BatchUnlockBought,
  BatchUnlockRedeemed,
  ClaimWithdrawRequest,
  Deposit,
  LiquidityPosition,
  RelayerRewardsClaimed,
  Swap,
  SwapPool,
  SwapPoolDay,
  UnlockBought,
  UnlockRedeemed,
  User,
  Withdraw,
} from "../../generated/schema";
import {
  initiatePoolDay,
  BD_ZERO,
  BI_ZERO,
  calculateDayID,
  convertToDecimal,
  ETHUSD,
  TEN_18,
} from "./helpers";
import {SwapPoolToken} from '../../generated/templates'
import {Transfer as LpETHTransferEmitted} from '../../generated/templates/SwapPoolToken/ERC20'
export function handleInitialize(event: InitializedEvent): void {
  let pool = new SwapPool(event.address.toHex());
  let lpTokenAddr = LpETH.bind(event.address).lpToken()

  pool.totalSupply = BI_ZERO;
  pool.liabilities = BI_ZERO;
  pool.volume = BI_ZERO;
  pool.volumeUSD = BD_ZERO;
  pool.lpRewards = BI_ZERO;
  pool.lpRewardsUSD = BD_ZERO;
  pool.fees = BI_ZERO;
  pool.feesUSD = BD_ZERO;
  pool.treasuryCut = BI_ZERO;
  pool.treasuryCutUSD = BD_ZERO;
  pool.unlocking = BI_ZERO;
  pool.id = event.address.toHex();
  pool.numSwaps = BI_ZERO;
  pool.lpToken = lpTokenAddr;
  pool.save();
  SwapPoolToken.create(lpTokenAddr)
}

export function handleBatchUnlockBought(event: BatchUnlockBoughtEvent): void {
  let entity = new BatchUnlockBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.caller = event.params.caller;
  entity.amount = event.params.amount;
  entity.reward = event.params.reward;
  entity.lpFees = event.params.lpFees;
  entity.tokenIds = event.params.tokenIds;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
  let pool = SwapPool.load(event.address.toHex());
  if (!pool) return;

  const usdPrice = ETHUSD();

  const lpRewardsInUSD = usdPrice.times(convertToDecimal(event.params.lpFees));
  const treasuryCut = event.params.amount
    .minus(event.params.lpFees)
    .minus(event.params.reward);
  const treasuryCutInUSD = usdPrice.times(convertToDecimal(treasuryCut));

  pool.unlocking = pool.unlocking.minus(event.params.amount);
  pool.lpRewards = pool.lpRewards.plus(event.params.lpFees);
  pool.lpRewardsUSD = pool.lpRewardsUSD.plus(lpRewardsInUSD);
  pool.treasuryCut = pool.treasuryCut.plus(treasuryCut);
  pool.treasuryCutUSD = pool.treasuryCutUSD.plus(treasuryCutInUSD);
  pool.liabilities = pool.liabilities.plus(event.params.lpFees);
  pool.save();

  let dayID = calculateDayID(event.block.timestamp);
  let poolDay = SwapPoolDay.load(pool.id.concat("-").concat(dayID.toString()));
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);
  poolDay.lpRewards = poolDay.lpRewards.plus(event.params.lpFees);
  poolDay.lpRewardsUSD = poolDay.lpRewardsUSD.plus(lpRewardsInUSD);
  poolDay.treasuryCut = poolDay.treasuryCut.plus(treasuryCut);
  poolDay.treasuryCutUSD = poolDay.treasuryCutUSD.plus(treasuryCutInUSD);
  poolDay.liabilities = poolDay.liabilities.plus(event.params.lpFees);
  poolDay.save();
}

export function handleBatchUnlockRedeemed(
  event: BatchUnlockRedeemedEvent
): void {
  let entity = new BatchUnlockRedeemed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.relayer = event.params.relayer;
  entity.amount = event.params.amount;
  entity.reward = event.params.reward;
  entity.lpFees = event.params.lpFees;
  entity.tokenIds = event.params.tokenIds;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
  let pool = SwapPool.load(event.address.toHex());
  if (!pool) return;

  const usdPrice = ETHUSD();
  const lpRewardsInUSD = usdPrice.times(convertToDecimal(event.params.lpFees));

  const treasuryCut = event.params.amount
    .minus(event.params.lpFees)
    .minus(event.params.reward);
  const treasuryCutInUSD = usdPrice.times(convertToDecimal(treasuryCut));

  pool.unlocking = pool.unlocking.minus(event.params.amount);
  pool.lpRewards = pool.lpRewards.plus(event.params.lpFees);
  pool.lpRewardsUSD = pool.lpRewardsUSD.plus(lpRewardsInUSD);
  pool.treasuryCut = pool.treasuryCut.plus(treasuryCut);
  pool.treasuryCutUSD = pool.treasuryCutUSD.plus(treasuryCutInUSD);
  pool.liabilities = pool.liabilities.plus(event.params.lpFees);
  pool.save();

  let dayID = calculateDayID(event.block.timestamp);
  let poolDay = SwapPoolDay.load(pool.id.concat("-").concat(dayID.toString()));
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);
  poolDay.lpRewards = poolDay.lpRewards.plus(event.params.lpFees);
  poolDay.lpRewardsUSD = poolDay.lpRewardsUSD.plus(lpRewardsInUSD);
  poolDay.treasuryCut = poolDay.treasuryCut.plus(treasuryCut);
  poolDay.treasuryCutUSD = poolDay.treasuryCutUSD.plus(treasuryCutInUSD);
  poolDay.liabilities = poolDay.liabilities.plus(event.params.lpFees);
  poolDay.save();
}

export function handleClaimWithdrawRequest(
  event: ClaimWithdrawRequestEvent
): void {
  let entity = new ClaimWithdrawRequest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.requestId = event.params.requestId;
  entity.to = event.params.to;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSwap(event: SwapEvent): void {
  let pool = SwapPool.load(event.address.toHex());
  if (pool == null) return;

  const usdPrice = ETHUSD();
  const amountInUSD = usdPrice.times(convertToDecimal(event.params.amountIn));
  const feeInUSD = usdPrice.times(convertToDecimal(event.params.fee));
  let numSwaps = pool.numSwaps.plus(BigInt.fromI32(1));
  let swapId = event.params.caller.toHex().concat("-").concat(numSwaps.toString());
  let swap = new Swap(swapId);
  swap.pool = pool.id;
  swap.amount = event.params.amountIn;
  swap.amountUSD = amountInUSD;
  swap.fee = event.params.fee;
  swap.feeUSD = feeInUSD;
  swap.asset = event.params.asset;
  swap.from = event.params.caller;
  swap.blockNumber = event.block.number;
  swap.blockTimestamp = event.block.timestamp;
  swap.transactionHash = event.transaction.hash;
  swap.save()

  pool.unlocking = pool.unlocking.plus(event.params.amountIn);
  pool.volume = pool.volume.plus(event.params.amountIn);
  pool.volumeUSD = pool.volumeUSD.plus(amountInUSD);
  pool.fees = pool.fees.plus(event.params.fee);
  pool.feesUSD = pool.feesUSD.plus(feeInUSD);
  pool.numSwaps = numSwaps;
  pool.save();

  let dayID = calculateDayID(event.block.timestamp);
  let poolDay = SwapPoolDay.load(pool.id.concat("-").concat(dayID.toString()));
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);
  poolDay.volume = poolDay.volume.plus(event.params.amountIn);
  poolDay.volumeUSD = poolDay.volumeUSD.plus(amountInUSD);
  poolDay.fees = poolDay.fees.plus(event.params.fee);
  poolDay.feesUSD = poolDay.feesUSD.plus(feeInUSD);
  poolDay.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.to = event.params.to;
  entity.amount = event.params.amount;
  entity.lpSharesBurnt = event.params.lpSharesBurnt;
  entity.requestId = event.params.requestId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let pool = SwapPool.load(event.address.toHex());
  if (pool == null) return;

  let user = event.params.to.toHex();
  let lp = LiquidityPosition.load(user.concat("-").concat(pool.id));
  if (lp != null) {
    let bal = lp.shares
      .times(pool.liabilities.div(pool.totalSupply));
    let amount = event.params.amount;
    if (bal.minus(lp.netDeposits).lt(amount)) {
      // if rewards less than amount, set net deposits
      // to balance minus what wasnt subtracted from the rewards
      lp.netDeposits = bal.minus(amount);
    } else {
      // withdrawn rewards, do nothing
    }
    lp.shares = lp.shares.minus(event.params.lpSharesBurnt);
    lp.save();
  }
  pool.totalSupply = pool.totalSupply.minus(event.params.lpSharesBurnt);
  pool.liabilities = pool.liabilities.minus(event.params.amount);

  let dayID = calculateDayID(event.block.timestamp);
  let poolDay = SwapPoolDay.load(pool.id.concat("-").concat(dayID.toString()));
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);

  poolDay.save();
  pool.save();
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.amount = event.params.amount;
  entity.lpSharesMinted = event.params.lpSharesMinted;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let pool = SwapPool.load(event.address.toHex());
  if (pool == null) return;

  pool.totalSupply = pool.totalSupply.plus(event.params.lpSharesMinted);
  pool.liabilities = pool.liabilities.plus(event.params.amount);

  let dayID = calculateDayID(event.block.timestamp);
  let poolDay = SwapPoolDay.load(pool.id.concat("-").concat(dayID.toString()));
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);

  let from = event.params.from.toHex();
  let user = User.load(from);
  if (user == null) {
    user = new User(from);
    user.save();
  }

  let lp = LiquidityPosition.load(from.concat("-").concat(pool.id));
  if (lp == null) {
    lp = new LiquidityPosition(from.concat("-").concat(pool.id));
    lp.user = from;
    lp.pool = pool.id;
    lp.shares = BI_ZERO;
    lp.netDeposits = BI_ZERO;
  }
  lp.shares = lp.shares.plus(event.params.lpSharesMinted);
  lp.netDeposits = lp.netDeposits.plus(event.params.amount);
  lp.save();
  poolDay.save();
  pool.save();
}

export function handleRelayerRewardsClaimed(
  event: RelayerRewardsClaimedEvent
): void {
  let entity = new RelayerRewardsClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.relayer = event.params.relayer;
  entity.rewards = event.params.rewards;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUnlockBought(event: UnlockBoughtEvent): void {
  let entity = new UnlockBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.caller = event.params.caller;
  entity.tokenId = event.params.tokenId;
  entity.amount = event.params.amount;
  entity.reward = event.params.reward;
  entity.lpFees = event.params.lpFees;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
  let pool = SwapPool.load(event.address.toHex());
  if (!pool) return;

  const usdPrice = ETHUSD();

  const lpRewardsInUSD = usdPrice.times(convertToDecimal(event.params.lpFees));
  const treasuryCut = event.params.amount
    .minus(event.params.lpFees)
    .minus(event.params.reward);
  const treasuryCutInUSD = usdPrice.times(convertToDecimal(treasuryCut));

  pool.unlocking = pool.unlocking.minus(event.params.amount);
  pool.lpRewards = pool.lpRewards.plus(event.params.lpFees);
  pool.lpRewardsUSD = pool.lpRewardsUSD.plus(lpRewardsInUSD);
  pool.treasuryCut = pool.treasuryCut.plus(treasuryCut);
  pool.treasuryCutUSD = pool.treasuryCutUSD.plus(treasuryCutInUSD);
  pool.liabilities = pool.liabilities.plus(event.params.lpFees);
  pool.save();

  let dayID = calculateDayID(event.block.timestamp);
  let poolDay = SwapPoolDay.load(pool.id.concat("-").concat(dayID.toString()));
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);
  poolDay.lpRewards = poolDay.lpRewards.plus(event.params.lpFees);
  poolDay.lpRewardsUSD = poolDay.lpRewardsUSD.plus(lpRewardsInUSD);
  poolDay.treasuryCut = poolDay.treasuryCut.plus(treasuryCut);
  poolDay.treasuryCutUSD = poolDay.treasuryCutUSD.plus(treasuryCutInUSD);
  poolDay.liabilities = poolDay.liabilities.plus(event.params.lpFees);
  poolDay.save();
}

export function handleUnlockRedeemed(event: UnlockRedeemedEvent): void {
  let entity = new UnlockRedeemed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.relayer = event.params.relayer;
  entity.tokenId = event.params.tokenId;
  entity.amount = event.params.amount;
  entity.reward = event.params.reward;
  entity.lpFees = event.params.lpFees;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
  let pool = SwapPool.load(event.address.toHex());
  if (!pool) return;

  const usdPrice = ETHUSD();
  const lpRewardsInUSD = usdPrice.times(convertToDecimal(event.params.lpFees));

  const treasuryCut = event.params.amount
    .minus(event.params.lpFees)
    .minus(event.params.reward);
  const treasuryCutInUSD = usdPrice.times(convertToDecimal(treasuryCut));

  pool.unlocking = pool.unlocking.minus(event.params.amount);
  pool.lpRewards = pool.lpRewards.plus(event.params.lpFees);
  pool.lpRewardsUSD = pool.lpRewardsUSD.plus(lpRewardsInUSD);
  pool.treasuryCut = pool.treasuryCut.plus(treasuryCut);
  pool.treasuryCutUSD = pool.treasuryCutUSD.plus(treasuryCutInUSD);
  pool.liabilities = pool.liabilities.plus(event.params.lpFees);
  pool.save();

  let dayID = calculateDayID(event.block.timestamp);
  let poolDay = SwapPoolDay.load(pool.id.concat("-").concat(dayID.toString()));
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);
  poolDay.lpRewards = poolDay.lpRewards.plus(event.params.lpFees);
  poolDay.lpRewardsUSD = poolDay.lpRewardsUSD.plus(lpRewardsInUSD);
  poolDay.treasuryCut = poolDay.treasuryCut.plus(treasuryCut);
  poolDay.treasuryCutUSD = poolDay.treasuryCutUSD.plus(treasuryCutInUSD);
  poolDay.liabilities = poolDay.liabilities.plus(event.params.lpFees);
  poolDay.save();
}

export function handleLpETHTransfer(event: LpETHTransferEmitted): void {
  let pool = SwapPool.load(event.address.toHex())
  if (pool == null) return;

  let from = event.params.from.toHex();
  let to = event.params.to.toHex();
  let toUser = User.load(to)
  if (toUser == null) {
      toUser = new User(to)
      toUser.save()
  }

  let lp = LiquidityPosition.load(from.concat('-').concat(pool.id))
  if (lp != null) {
    let totalSupply = pool.totalSupply
    let bal = lp.shares.times(pool.liabilities.times(TEN_18).div(totalSupply)).div(TEN_18)
    let amount = event.params.value
    if (bal.minus(lp.netDeposits).lt(amount)) {
        // if rewards less than amount, set net deposits
        // to balance minus what wasnt subtracted from the rewards
        lp.netDeposits = bal.minus(amount)
    }
    lp.save()
  };



  let lpTo = LiquidityPosition.load(to.concat('-').concat(pool.id))
  if (lpTo == null) {
      lpTo = new LiquidityPosition(to.concat('-').concat(pool.id))
      lpTo.user = to
      lpTo.pool = pool.id
      lpTo.shares = BI_ZERO
      lpTo.netDeposits = BI_ZERO
  }
  let shares = event.params.value.times(pool.totalSupply).div(pool.liabilities)
  lpTo.shares = lpTo.shares.plus(shares)
  lpTo.netDeposits = lpTo.netDeposits.plus(event.params.value)
  lpTo.save()

  let transfer = new SwapLPTokenTransfer(event.transaction.hash.toHex().concat('-').concat(event.logIndex.toString()))
  transfer.timestamp = event.block.timestamp.toI32()
  transfer.blockNumber = event.block.number
  transfer.from = from
  transfer.to = to
  transfer.amount = event.params.value
  transfer.SwapPool = pool.id
  transfer.save()
}