// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace TenderizeTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type Asset = {
  id: Scalars['ID']['output'];
  tvl: Scalars['BigDecimal']['output'];
  tenderizerCount: Scalars['Int']['output'];
  assetDays: Array<AssetDay>;
};


export type AssetassetDaysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AssetDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AssetDay_filter>;
};

export type AssetDay = {
  id: Scalars['ID']['output'];
  date: Scalars['Int']['output'];
  asset: Asset;
  tvl: Scalars['BigDecimal']['output'];
  rewards: Scalars['BigDecimal']['output'];
};

export type AssetDay_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_filter>;
  tvl?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  rewards?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  rewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AssetDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AssetDay_filter>>>;
};

export type AssetDay_orderBy =
  | 'id'
  | 'date'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tvl'
  | 'rewards';

export type Asset_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tvl?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tenderizerCount?: InputMaybe<Scalars['Int']['input']>;
  tenderizerCount_not?: InputMaybe<Scalars['Int']['input']>;
  tenderizerCount_gt?: InputMaybe<Scalars['Int']['input']>;
  tenderizerCount_lt?: InputMaybe<Scalars['Int']['input']>;
  tenderizerCount_gte?: InputMaybe<Scalars['Int']['input']>;
  tenderizerCount_lte?: InputMaybe<Scalars['Int']['input']>;
  tenderizerCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tenderizerCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  assetDays_?: InputMaybe<AssetDay_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Asset_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Asset_filter>>>;
};

export type Asset_orderBy =
  | 'id'
  | 'tvl'
  | 'tenderizerCount'
  | 'assetDays';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type DepositEvent = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  assetsIn: Scalars['BigDecimal']['output'];
  tTokenOut: Scalars['BigDecimal']['output'];
  shares: Scalars['BigDecimal']['output'];
  user: User;
  asset: Asset;
  tenderizer: Tenderizer;
};

export type DepositEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  assetsIn?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsIn_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsIn_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsIn_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsIn_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsIn_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsIn_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assetsIn_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tTokenOut?: InputMaybe<Scalars['BigDecimal']['input']>;
  tTokenOut_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tTokenOut_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tTokenOut_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tTokenOut_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tTokenOut_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tTokenOut_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tTokenOut_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DepositEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DepositEvent_filter>>>;
};

export type DepositEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'assetsIn'
  | 'tTokenOut'
  | 'shares'
  | 'user'
  | 'user__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay';

export type LiquidityPosition = {
  id: Scalars['ID']['output'];
  user: User;
  pool: SwapPool;
  shares: Scalars['BigInt']['output'];
  netDeposits: Scalars['BigInt']['output'];
};

export type LiquidityPosition_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<SwapPool_filter>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netDeposits?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_not?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netDeposits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netDeposits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPosition_filter>>>;
};

export type LiquidityPosition_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__asset'
  | 'pool__lpToken'
  | 'pool__totalSupply'
  | 'pool__liabilities'
  | 'pool__unlocking'
  | 'pool__volume'
  | 'pool__volumeUSD'
  | 'pool__fees'
  | 'pool__feesUSD'
  | 'pool__lpRewards'
  | 'pool__lpRewardsUSD'
  | 'pool__treasuryCut'
  | 'pool__treasuryCutUSD'
  | 'shares'
  | 'netDeposits';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  tenderizer?: Maybe<Tenderizer>;
  tenderizers: Array<Tenderizer>;
  user?: Maybe<User>;
  users: Array<User>;
  stake?: Maybe<Stake>;
  stakes: Array<Stake>;
  unlock?: Maybe<Unlock>;
  unlocks: Array<Unlock>;
  assetDay?: Maybe<AssetDay>;
  assetDays: Array<AssetDay>;
  tenderizerDay?: Maybe<TenderizerDay>;
  tenderizerDays: Array<TenderizerDay>;
  depositEvent?: Maybe<DepositEvent>;
  depositEvents: Array<DepositEvent>;
  unlockEvent?: Maybe<UnlockEvent>;
  unlockEvents: Array<UnlockEvent>;
  withdrawEvent?: Maybe<WithdrawEvent>;
  withdrawEvents: Array<WithdrawEvent>;
  rebaseEvent?: Maybe<RebaseEvent>;
  rebaseEvents: Array<RebaseEvent>;
  tokenTransferEvent?: Maybe<TokenTransferEvent>;
  tokenTransferEvents: Array<TokenTransferEvent>;
  swapPool?: Maybe<SwapPool>;
  swapPools: Array<SwapPool>;
  swapPoolDay?: Maybe<SwapPoolDay>;
  swapPoolDays: Array<SwapPoolDay>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  swapEvent?: Maybe<SwapEvent>;
  swapEvents: Array<SwapEvent>;
  swapDepositEvent?: Maybe<SwapDepositEvent>;
  swapDepositEvents: Array<SwapDepositEvent>;
  swapWithdrawEvent?: Maybe<SwapWithdrawEvent>;
  swapWithdrawEvents: Array<SwapWithdrawEvent>;
  swapUnlockBuyEvent?: Maybe<SwapUnlockBuyEvent>;
  swapUnlockBuyEvents: Array<SwapUnlockBuyEvent>;
  swapUnlockRedeemedEvent?: Maybe<SwapUnlockRedeemedEvent>;
  swapUnlockRedeemedEvents: Array<SwapUnlockRedeemedEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryassetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryassetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Asset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Asset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytenderizerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytenderizersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tenderizer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tenderizer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stake_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunlockArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunlocksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unlock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Unlock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryassetDayArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryassetDaysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AssetDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AssetDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytenderizerDayArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytenderizerDaysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TenderizerDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TenderizerDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DepositEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunlockEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunlockEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UnlockEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnlockEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WithdrawEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebaseEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebaseEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebaseEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebaseEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenTransferEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenTransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenTransferEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapPoolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapPoolDayArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapPoolDaysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapPoolDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapPoolDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapDepositEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapDepositEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapDepositEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapDepositEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapWithdrawEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapWithdrawEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapWithdrawEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapWithdrawEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapUnlockBuyEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapUnlockBuyEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapUnlockBuyEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapUnlockBuyEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapUnlockRedeemedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapUnlockRedeemedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapUnlockRedeemedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapUnlockRedeemedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RebaseEvent = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  oldStake: Scalars['BigDecimal']['output'];
  newStake: Scalars['BigDecimal']['output'];
  asset: Asset;
  tenderizer: Tenderizer;
};

export type RebaseEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  oldStake?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldStake_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldStake_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldStake_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldStake_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldStake_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldStake_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  oldStake_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  newStake?: InputMaybe<Scalars['BigDecimal']['input']>;
  newStake_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  newStake_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  newStake_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  newStake_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  newStake_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  newStake_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  newStake_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RebaseEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RebaseEvent_filter>>>;
};

export type RebaseEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'oldStake'
  | 'newStake'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay';

export type Stake = {
  id: Scalars['ID']['output'];
  user: User;
  asset: Asset;
  tenderizer: Tenderizer;
  shares: Scalars['BigDecimal']['output'];
  netDeposits: Scalars['BigDecimal']['output'];
};

export type Stake_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  shares?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  netDeposits?: InputMaybe<Scalars['BigDecimal']['input']>;
  netDeposits_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  netDeposits_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  netDeposits_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  netDeposits_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  netDeposits_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  netDeposits_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  netDeposits_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Stake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Stake_filter>>>;
};

export type Stake_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay'
  | 'shares'
  | 'netDeposits';

export type Subscription = {
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  tenderizer?: Maybe<Tenderizer>;
  tenderizers: Array<Tenderizer>;
  user?: Maybe<User>;
  users: Array<User>;
  stake?: Maybe<Stake>;
  stakes: Array<Stake>;
  unlock?: Maybe<Unlock>;
  unlocks: Array<Unlock>;
  assetDay?: Maybe<AssetDay>;
  assetDays: Array<AssetDay>;
  tenderizerDay?: Maybe<TenderizerDay>;
  tenderizerDays: Array<TenderizerDay>;
  depositEvent?: Maybe<DepositEvent>;
  depositEvents: Array<DepositEvent>;
  unlockEvent?: Maybe<UnlockEvent>;
  unlockEvents: Array<UnlockEvent>;
  withdrawEvent?: Maybe<WithdrawEvent>;
  withdrawEvents: Array<WithdrawEvent>;
  rebaseEvent?: Maybe<RebaseEvent>;
  rebaseEvents: Array<RebaseEvent>;
  tokenTransferEvent?: Maybe<TokenTransferEvent>;
  tokenTransferEvents: Array<TokenTransferEvent>;
  swapPool?: Maybe<SwapPool>;
  swapPools: Array<SwapPool>;
  swapPoolDay?: Maybe<SwapPoolDay>;
  swapPoolDays: Array<SwapPoolDay>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  swapEvent?: Maybe<SwapEvent>;
  swapEvents: Array<SwapEvent>;
  swapDepositEvent?: Maybe<SwapDepositEvent>;
  swapDepositEvents: Array<SwapDepositEvent>;
  swapWithdrawEvent?: Maybe<SwapWithdrawEvent>;
  swapWithdrawEvents: Array<SwapWithdrawEvent>;
  swapUnlockBuyEvent?: Maybe<SwapUnlockBuyEvent>;
  swapUnlockBuyEvents: Array<SwapUnlockBuyEvent>;
  swapUnlockRedeemedEvent?: Maybe<SwapUnlockRedeemedEvent>;
  swapUnlockRedeemedEvents: Array<SwapUnlockRedeemedEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionassetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionassetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Asset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Asset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontenderizerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontenderizersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tenderizer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tenderizer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stake_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunlockArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunlocksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unlock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Unlock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionassetDayArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionassetDaysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AssetDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AssetDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontenderizerDayArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontenderizerDaysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TenderizerDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TenderizerDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DepositEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunlockEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunlockEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UnlockEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnlockEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WithdrawEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebaseEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebaseEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebaseEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebaseEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenTransferEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenTransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenTransferEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapPoolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapPoolDayArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapPoolDaysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapPoolDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapPoolDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapDepositEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapDepositEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapDepositEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapDepositEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapWithdrawEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapWithdrawEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapWithdrawEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapWithdrawEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapUnlockBuyEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapUnlockBuyEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapUnlockBuyEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapUnlockBuyEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapUnlockRedeemedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapUnlockRedeemedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapUnlockRedeemedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapUnlockRedeemedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type SwapDepositEvent = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  account: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  sharesMinted: Scalars['BigInt']['output'];
  SwapPool: SwapPool;
};

export type SwapDepositEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharesMinted?: InputMaybe<Scalars['BigInt']['input']>;
  sharesMinted_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharesMinted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesMinted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesMinted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesMinted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesMinted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharesMinted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  SwapPool?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not?: InputMaybe<Scalars['String']['input']>;
  SwapPool_gt?: InputMaybe<Scalars['String']['input']>;
  SwapPool_lt?: InputMaybe<Scalars['String']['input']>;
  SwapPool_gte?: InputMaybe<Scalars['String']['input']>;
  SwapPool_lte?: InputMaybe<Scalars['String']['input']>;
  SwapPool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  SwapPool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  SwapPool_contains?: InputMaybe<Scalars['String']['input']>;
  SwapPool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_contains?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_starts_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_ends_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_?: InputMaybe<SwapPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapDepositEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapDepositEvent_filter>>>;
};

export type SwapDepositEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'account'
  | 'amount'
  | 'sharesMinted'
  | 'SwapPool'
  | 'SwapPool__id'
  | 'SwapPool__createdAtTimestamp'
  | 'SwapPool__asset'
  | 'SwapPool__lpToken'
  | 'SwapPool__totalSupply'
  | 'SwapPool__liabilities'
  | 'SwapPool__unlocking'
  | 'SwapPool__volume'
  | 'SwapPool__volumeUSD'
  | 'SwapPool__fees'
  | 'SwapPool__feesUSD'
  | 'SwapPool__lpRewards'
  | 'SwapPool__lpRewardsUSD'
  | 'SwapPool__treasuryCut'
  | 'SwapPool__treasuryCutUSD';

export type SwapEvent = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  account: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  fee: Scalars['BigInt']['output'];
  SwapPool: SwapPool;
};

export type SwapEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  SwapPool?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not?: InputMaybe<Scalars['String']['input']>;
  SwapPool_gt?: InputMaybe<Scalars['String']['input']>;
  SwapPool_lt?: InputMaybe<Scalars['String']['input']>;
  SwapPool_gte?: InputMaybe<Scalars['String']['input']>;
  SwapPool_lte?: InputMaybe<Scalars['String']['input']>;
  SwapPool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  SwapPool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  SwapPool_contains?: InputMaybe<Scalars['String']['input']>;
  SwapPool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_contains?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_starts_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_ends_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_?: InputMaybe<SwapPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapEvent_filter>>>;
};

export type SwapEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'account'
  | 'amount'
  | 'fee'
  | 'SwapPool'
  | 'SwapPool__id'
  | 'SwapPool__createdAtTimestamp'
  | 'SwapPool__asset'
  | 'SwapPool__lpToken'
  | 'SwapPool__totalSupply'
  | 'SwapPool__liabilities'
  | 'SwapPool__unlocking'
  | 'SwapPool__volume'
  | 'SwapPool__volumeUSD'
  | 'SwapPool__fees'
  | 'SwapPool__feesUSD'
  | 'SwapPool__lpRewards'
  | 'SwapPool__lpRewardsUSD'
  | 'SwapPool__treasuryCut'
  | 'SwapPool__treasuryCutUSD';

export type SwapPool = {
  id: Scalars['ID']['output'];
  createdAtTimestamp: Scalars['Int']['output'];
  asset: Scalars['String']['output'];
  lpToken: Scalars['String']['output'];
  totalSupply: Scalars['BigInt']['output'];
  liabilities: Scalars['BigInt']['output'];
  unlocking: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
  fees: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  lpRewards: Scalars['BigInt']['output'];
  lpRewardsUSD: Scalars['BigDecimal']['output'];
  treasuryCut: Scalars['BigInt']['output'];
  treasuryCutUSD: Scalars['BigDecimal']['output'];
  poolDays: Array<SwapPoolDay>;
};


export type SwapPoolpoolDaysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapPoolDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapPoolDay_filter>;
};

export type SwapPoolDay = {
  id: Scalars['ID']['output'];
  date: Scalars['Int']['output'];
  pool: SwapPool;
  totalSupply: Scalars['BigInt']['output'];
  liabilities: Scalars['BigInt']['output'];
  unlocking: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
  fees: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  lpRewards: Scalars['BigInt']['output'];
  lpRewardsUSD: Scalars['BigDecimal']['output'];
  treasuryCut: Scalars['BigInt']['output'];
  treasuryCutUSD: Scalars['BigDecimal']['output'];
};

export type SwapPoolDay_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<SwapPool_filter>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liabilities?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_not?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liabilities_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlocking?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_not?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlocking_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpRewards?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpRewardsUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpRewardsUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  treasuryCut?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_not?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  treasuryCut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  treasuryCutUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  treasuryCutUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapPoolDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapPoolDay_filter>>>;
};

export type SwapPoolDay_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__asset'
  | 'pool__lpToken'
  | 'pool__totalSupply'
  | 'pool__liabilities'
  | 'pool__unlocking'
  | 'pool__volume'
  | 'pool__volumeUSD'
  | 'pool__fees'
  | 'pool__feesUSD'
  | 'pool__lpRewards'
  | 'pool__lpRewardsUSD'
  | 'pool__treasuryCut'
  | 'pool__treasuryCutUSD'
  | 'totalSupply'
  | 'liabilities'
  | 'unlocking'
  | 'volume'
  | 'volumeUSD'
  | 'fees'
  | 'feesUSD'
  | 'lpRewards'
  | 'lpRewardsUSD'
  | 'treasuryCut'
  | 'treasuryCutUSD';

export type SwapPool_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['Int']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpToken?: InputMaybe<Scalars['String']['input']>;
  lpToken_not?: InputMaybe<Scalars['String']['input']>;
  lpToken_gt?: InputMaybe<Scalars['String']['input']>;
  lpToken_lt?: InputMaybe<Scalars['String']['input']>;
  lpToken_gte?: InputMaybe<Scalars['String']['input']>;
  lpToken_lte?: InputMaybe<Scalars['String']['input']>;
  lpToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpToken_contains?: InputMaybe<Scalars['String']['input']>;
  lpToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  lpToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liabilities?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_not?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liabilities_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liabilities_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlocking?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_not?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unlocking_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlocking_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpRewards?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpRewardsUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpRewardsUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpRewardsUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  treasuryCut?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_not?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  treasuryCut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  treasuryCut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  treasuryCutUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryCutUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  treasuryCutUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolDays_?: InputMaybe<SwapPoolDay_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapPool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapPool_filter>>>;
};

export type SwapPool_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'asset'
  | 'lpToken'
  | 'totalSupply'
  | 'liabilities'
  | 'unlocking'
  | 'volume'
  | 'volumeUSD'
  | 'fees'
  | 'feesUSD'
  | 'lpRewards'
  | 'lpRewardsUSD'
  | 'treasuryCut'
  | 'treasuryCutUSD'
  | 'poolDays';

export type SwapUnlockBuyEvent = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  account: Scalars['String']['output'];
  unlock: Unlock;
  asset: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  reward: Scalars['BigInt']['output'];
  lpFee: Scalars['BigInt']['output'];
  SwapPool: SwapPool;
};

export type SwapUnlockBuyEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock?: InputMaybe<Scalars['String']['input']>;
  unlock_not?: InputMaybe<Scalars['String']['input']>;
  unlock_gt?: InputMaybe<Scalars['String']['input']>;
  unlock_lt?: InputMaybe<Scalars['String']['input']>;
  unlock_gte?: InputMaybe<Scalars['String']['input']>;
  unlock_lte?: InputMaybe<Scalars['String']['input']>;
  unlock_in?: InputMaybe<Array<Scalars['String']['input']>>;
  unlock_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  unlock_contains?: InputMaybe<Scalars['String']['input']>;
  unlock_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_contains?: InputMaybe<Scalars['String']['input']>;
  unlock_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_starts_with?: InputMaybe<Scalars['String']['input']>;
  unlock_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  unlock_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_ends_with?: InputMaybe<Scalars['String']['input']>;
  unlock_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  unlock_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_?: InputMaybe<Unlock_filter>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reward?: InputMaybe<Scalars['BigInt']['input']>;
  reward_not?: InputMaybe<Scalars['BigInt']['input']>;
  reward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpFee?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  SwapPool?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not?: InputMaybe<Scalars['String']['input']>;
  SwapPool_gt?: InputMaybe<Scalars['String']['input']>;
  SwapPool_lt?: InputMaybe<Scalars['String']['input']>;
  SwapPool_gte?: InputMaybe<Scalars['String']['input']>;
  SwapPool_lte?: InputMaybe<Scalars['String']['input']>;
  SwapPool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  SwapPool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  SwapPool_contains?: InputMaybe<Scalars['String']['input']>;
  SwapPool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_contains?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_starts_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_ends_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_?: InputMaybe<SwapPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapUnlockBuyEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapUnlockBuyEvent_filter>>>;
};

export type SwapUnlockBuyEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'account'
  | 'unlock'
  | 'unlock__id'
  | 'unlock__amount'
  | 'unlock__timestamp'
  | 'unlock__maturity'
  | 'unlock__redeemed'
  | 'asset'
  | 'amount'
  | 'reward'
  | 'lpFee'
  | 'SwapPool'
  | 'SwapPool__id'
  | 'SwapPool__createdAtTimestamp'
  | 'SwapPool__asset'
  | 'SwapPool__lpToken'
  | 'SwapPool__totalSupply'
  | 'SwapPool__liabilities'
  | 'SwapPool__unlocking'
  | 'SwapPool__volume'
  | 'SwapPool__volumeUSD'
  | 'SwapPool__fees'
  | 'SwapPool__feesUSD'
  | 'SwapPool__lpRewards'
  | 'SwapPool__lpRewardsUSD'
  | 'SwapPool__treasuryCut'
  | 'SwapPool__treasuryCutUSD';

export type SwapUnlockRedeemedEvent = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  account: Scalars['String']['output'];
  unlock: Unlock;
  asset: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  reward: Scalars['BigInt']['output'];
  lpFee: Scalars['BigInt']['output'];
  SwapPool: SwapPool;
};

export type SwapUnlockRedeemedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock?: InputMaybe<Scalars['String']['input']>;
  unlock_not?: InputMaybe<Scalars['String']['input']>;
  unlock_gt?: InputMaybe<Scalars['String']['input']>;
  unlock_lt?: InputMaybe<Scalars['String']['input']>;
  unlock_gte?: InputMaybe<Scalars['String']['input']>;
  unlock_lte?: InputMaybe<Scalars['String']['input']>;
  unlock_in?: InputMaybe<Array<Scalars['String']['input']>>;
  unlock_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  unlock_contains?: InputMaybe<Scalars['String']['input']>;
  unlock_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_contains?: InputMaybe<Scalars['String']['input']>;
  unlock_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_starts_with?: InputMaybe<Scalars['String']['input']>;
  unlock_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  unlock_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_ends_with?: InputMaybe<Scalars['String']['input']>;
  unlock_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  unlock_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_?: InputMaybe<Unlock_filter>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reward?: InputMaybe<Scalars['BigInt']['input']>;
  reward_not?: InputMaybe<Scalars['BigInt']['input']>;
  reward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpFee?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  SwapPool?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not?: InputMaybe<Scalars['String']['input']>;
  SwapPool_gt?: InputMaybe<Scalars['String']['input']>;
  SwapPool_lt?: InputMaybe<Scalars['String']['input']>;
  SwapPool_gte?: InputMaybe<Scalars['String']['input']>;
  SwapPool_lte?: InputMaybe<Scalars['String']['input']>;
  SwapPool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  SwapPool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  SwapPool_contains?: InputMaybe<Scalars['String']['input']>;
  SwapPool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_contains?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_starts_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_ends_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_?: InputMaybe<SwapPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapUnlockRedeemedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapUnlockRedeemedEvent_filter>>>;
};

export type SwapUnlockRedeemedEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'account'
  | 'unlock'
  | 'unlock__id'
  | 'unlock__amount'
  | 'unlock__timestamp'
  | 'unlock__maturity'
  | 'unlock__redeemed'
  | 'asset'
  | 'amount'
  | 'reward'
  | 'lpFee'
  | 'SwapPool'
  | 'SwapPool__id'
  | 'SwapPool__createdAtTimestamp'
  | 'SwapPool__asset'
  | 'SwapPool__lpToken'
  | 'SwapPool__totalSupply'
  | 'SwapPool__liabilities'
  | 'SwapPool__unlocking'
  | 'SwapPool__volume'
  | 'SwapPool__volumeUSD'
  | 'SwapPool__fees'
  | 'SwapPool__feesUSD'
  | 'SwapPool__lpRewards'
  | 'SwapPool__lpRewardsUSD'
  | 'SwapPool__treasuryCut'
  | 'SwapPool__treasuryCutUSD';

export type SwapWithdrawEvent = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  account: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  sharesBurned: Scalars['BigInt']['output'];
  SwapPool: SwapPool;
};

export type SwapWithdrawEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharesBurned?: InputMaybe<Scalars['BigInt']['input']>;
  sharesBurned_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharesBurned_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesBurned_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesBurned_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesBurned_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesBurned_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharesBurned_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  SwapPool?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not?: InputMaybe<Scalars['String']['input']>;
  SwapPool_gt?: InputMaybe<Scalars['String']['input']>;
  SwapPool_lt?: InputMaybe<Scalars['String']['input']>;
  SwapPool_gte?: InputMaybe<Scalars['String']['input']>;
  SwapPool_lte?: InputMaybe<Scalars['String']['input']>;
  SwapPool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  SwapPool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  SwapPool_contains?: InputMaybe<Scalars['String']['input']>;
  SwapPool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_contains?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_starts_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_ends_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  SwapPool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  SwapPool_?: InputMaybe<SwapPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapWithdrawEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapWithdrawEvent_filter>>>;
};

export type SwapWithdrawEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'account'
  | 'amount'
  | 'sharesBurned'
  | 'SwapPool'
  | 'SwapPool__id'
  | 'SwapPool__createdAtTimestamp'
  | 'SwapPool__asset'
  | 'SwapPool__lpToken'
  | 'SwapPool__totalSupply'
  | 'SwapPool__liabilities'
  | 'SwapPool__unlocking'
  | 'SwapPool__volume'
  | 'SwapPool__volumeUSD'
  | 'SwapPool__fees'
  | 'SwapPool__feesUSD'
  | 'SwapPool__lpRewards'
  | 'SwapPool__lpRewardsUSD'
  | 'SwapPool__treasuryCut'
  | 'SwapPool__treasuryCutUSD';

export type Tenderizer = {
  id: Scalars['ID']['output'];
  symbol: Scalars['String']['output'];
  name: Scalars['String']['output'];
  validator: Scalars['String']['output'];
  asset: Asset;
  createdAt: Scalars['Int']['output'];
  tvl: Scalars['BigDecimal']['output'];
  shares: Scalars['BigDecimal']['output'];
  apr: Scalars['BigDecimal']['output'];
  apy: Scalars['BigDecimal']['output'];
  stakes: Array<Stake>;
  tenderizerDays: Array<TenderizerDay>;
  lastUpdateDay: Scalars['BigInt']['output'];
  depositEvents: Array<DepositEvent>;
  unlockEvents: Array<UnlockEvent>;
  withdrawEvents: Array<WithdrawEvent>;
  rebaseEvents: Array<RebaseEvent>;
  tokenTransferEvents: Array<TokenTransferEvent>;
};


export type TenderizerstakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stake_filter>;
};


export type TenderizertenderizerDaysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TenderizerDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TenderizerDay_filter>;
};


export type TenderizerdepositEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DepositEvent_filter>;
};


export type TenderizerunlockEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UnlockEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnlockEvent_filter>;
};


export type TenderizerwithdrawEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WithdrawEvent_filter>;
};


export type TenderizerrebaseEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebaseEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebaseEvent_filter>;
};


export type TenderizertokenTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenTransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenTransferEvent_filter>;
};

export type TenderizerDay = {
  id: Scalars['ID']['output'];
  date: Scalars['Int']['output'];
  tenderizer: Tenderizer;
  shares: Scalars['BigDecimal']['output'];
  tvl: Scalars['BigDecimal']['output'];
  startStake: Scalars['BigDecimal']['output'];
  rewards: Scalars['BigDecimal']['output'];
  apr: Scalars['BigDecimal']['output'];
  apy: Scalars['BigDecimal']['output'];
};

export type TenderizerDay_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tenderizer?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  shares?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvl?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  startStake?: InputMaybe<Scalars['BigDecimal']['input']>;
  startStake_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  startStake_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  startStake_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  startStake_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  startStake_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  startStake_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  startStake_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  rewards?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  rewards_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  rewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  apr?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  apy?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  apy_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TenderizerDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TenderizerDay_filter>>>;
};

export type TenderizerDay_orderBy =
  | 'id'
  | 'date'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay'
  | 'shares'
  | 'tvl'
  | 'startStake'
  | 'rewards'
  | 'apr'
  | 'apy';

export type Tenderizer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validator?: InputMaybe<Scalars['String']['input']>;
  validator_not?: InputMaybe<Scalars['String']['input']>;
  validator_gt?: InputMaybe<Scalars['String']['input']>;
  validator_lt?: InputMaybe<Scalars['String']['input']>;
  validator_gte?: InputMaybe<Scalars['String']['input']>;
  validator_lte?: InputMaybe<Scalars['String']['input']>;
  validator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validator_contains?: InputMaybe<Scalars['String']['input']>;
  validator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_not_contains?: InputMaybe<Scalars['String']['input']>;
  validator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_starts_with?: InputMaybe<Scalars['String']['input']>;
  validator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_ends_with?: InputMaybe<Scalars['String']['input']>;
  validator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_filter>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tvl?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  apr?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  apy?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  apy_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  apy_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stakes_?: InputMaybe<Stake_filter>;
  tenderizerDays_?: InputMaybe<TenderizerDay_filter>;
  lastUpdateDay?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateDay_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateDay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateDay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateDay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateDay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateDay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateDay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositEvents_?: InputMaybe<DepositEvent_filter>;
  unlockEvents_?: InputMaybe<UnlockEvent_filter>;
  withdrawEvents_?: InputMaybe<WithdrawEvent_filter>;
  rebaseEvents_?: InputMaybe<RebaseEvent_filter>;
  tokenTransferEvents_?: InputMaybe<TokenTransferEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Tenderizer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Tenderizer_filter>>>;
};

export type Tenderizer_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'validator'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'createdAt'
  | 'tvl'
  | 'shares'
  | 'apr'
  | 'apy'
  | 'stakes'
  | 'tenderizerDays'
  | 'lastUpdateDay'
  | 'depositEvents'
  | 'unlockEvents'
  | 'withdrawEvents'
  | 'rebaseEvents'
  | 'tokenTransferEvents';

export type TokenTransferEvent = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  amount: Scalars['BigDecimal']['output'];
  shares: Scalars['BigDecimal']['output'];
  from: User;
  to: User;
  asset: Asset;
  tenderizer: Tenderizer;
};

export type TokenTransferEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<User_filter>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenTransferEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenTransferEvent_filter>>>;
};

export type TokenTransferEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'amount'
  | 'shares'
  | 'from'
  | 'from__id'
  | 'to'
  | 'to__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay';

export type Unlock = {
  id: Scalars['ID']['output'];
  user: User;
  asset: Asset;
  tenderizer: Tenderizer;
  amount: Scalars['BigDecimal']['output'];
  timestamp: Scalars['Int']['output'];
  maturity: Scalars['Int']['output'];
  redeemed: Scalars['Boolean']['output'];
};

export type UnlockEvent = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  amount: Scalars['BigDecimal']['output'];
  shares: Scalars['BigDecimal']['output'];
  unlock: Unlock;
  user: User;
  asset: Asset;
  tenderizer: Tenderizer;
};

export type UnlockEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  unlock?: InputMaybe<Scalars['String']['input']>;
  unlock_not?: InputMaybe<Scalars['String']['input']>;
  unlock_gt?: InputMaybe<Scalars['String']['input']>;
  unlock_lt?: InputMaybe<Scalars['String']['input']>;
  unlock_gte?: InputMaybe<Scalars['String']['input']>;
  unlock_lte?: InputMaybe<Scalars['String']['input']>;
  unlock_in?: InputMaybe<Array<Scalars['String']['input']>>;
  unlock_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  unlock_contains?: InputMaybe<Scalars['String']['input']>;
  unlock_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_contains?: InputMaybe<Scalars['String']['input']>;
  unlock_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_starts_with?: InputMaybe<Scalars['String']['input']>;
  unlock_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  unlock_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_ends_with?: InputMaybe<Scalars['String']['input']>;
  unlock_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  unlock_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_?: InputMaybe<Unlock_filter>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UnlockEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UnlockEvent_filter>>>;
};

export type UnlockEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'amount'
  | 'shares'
  | 'unlock'
  | 'unlock__id'
  | 'unlock__amount'
  | 'unlock__timestamp'
  | 'unlock__maturity'
  | 'unlock__redeemed'
  | 'user'
  | 'user__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay';

export type Unlock_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maturity?: InputMaybe<Scalars['Int']['input']>;
  maturity_not?: InputMaybe<Scalars['Int']['input']>;
  maturity_gt?: InputMaybe<Scalars['Int']['input']>;
  maturity_lt?: InputMaybe<Scalars['Int']['input']>;
  maturity_gte?: InputMaybe<Scalars['Int']['input']>;
  maturity_lte?: InputMaybe<Scalars['Int']['input']>;
  maturity_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maturity_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  redeemed?: InputMaybe<Scalars['Boolean']['input']>;
  redeemed_not?: InputMaybe<Scalars['Boolean']['input']>;
  redeemed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  redeemed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Unlock_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Unlock_filter>>>;
};

export type Unlock_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay'
  | 'amount'
  | 'timestamp'
  | 'maturity'
  | 'redeemed';

export type User = {
  id: Scalars['ID']['output'];
  stakes?: Maybe<Array<Stake>>;
  unlocks?: Maybe<Array<Unlock>>;
  liquidityPositions?: Maybe<Array<LiquidityPosition>>;
};


export type UserstakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stake_filter>;
};


export type UserunlocksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unlock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Unlock_filter>;
};


export type UserliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  stakes_?: InputMaybe<Stake_filter>;
  unlocks_?: InputMaybe<Unlock_filter>;
  liquidityPositions_?: InputMaybe<LiquidityPosition_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'stakes'
  | 'unlocks'
  | 'liquidityPositions';

export type WithdrawEvent = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  assetsOut: Scalars['BigDecimal']['output'];
  unlock: Unlock;
  user: User;
  asset: Asset;
  tenderizer: Tenderizer;
};

export type WithdrawEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  assetsOut?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsOut_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsOut_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsOut_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsOut_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsOut_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  assetsOut_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  assetsOut_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  unlock?: InputMaybe<Scalars['String']['input']>;
  unlock_not?: InputMaybe<Scalars['String']['input']>;
  unlock_gt?: InputMaybe<Scalars['String']['input']>;
  unlock_lt?: InputMaybe<Scalars['String']['input']>;
  unlock_gte?: InputMaybe<Scalars['String']['input']>;
  unlock_lte?: InputMaybe<Scalars['String']['input']>;
  unlock_in?: InputMaybe<Array<Scalars['String']['input']>>;
  unlock_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  unlock_contains?: InputMaybe<Scalars['String']['input']>;
  unlock_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_contains?: InputMaybe<Scalars['String']['input']>;
  unlock_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_starts_with?: InputMaybe<Scalars['String']['input']>;
  unlock_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  unlock_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_ends_with?: InputMaybe<Scalars['String']['input']>;
  unlock_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  unlock_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unlock_?: InputMaybe<Unlock_filter>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lt?: InputMaybe<Scalars['String']['input']>;
  tenderizer_gte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_lte?: InputMaybe<Scalars['String']['input']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WithdrawEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<WithdrawEvent_filter>>>;
};

export type WithdrawEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'assetsOut'
  | 'unlock'
  | 'unlock__id'
  | 'unlock__amount'
  | 'unlock__timestamp'
  | 'unlock__maturity'
  | 'unlock__redeemed'
  | 'user'
  | 'user__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  asset: InContextSdkMethod<Query['asset'], QueryassetArgs, MeshContext>,
  /** null **/
  assets: InContextSdkMethod<Query['assets'], QueryassetsArgs, MeshContext>,
  /** null **/
  tenderizer: InContextSdkMethod<Query['tenderizer'], QuerytenderizerArgs, MeshContext>,
  /** null **/
  tenderizers: InContextSdkMethod<Query['tenderizers'], QuerytenderizersArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  stake: InContextSdkMethod<Query['stake'], QuerystakeArgs, MeshContext>,
  /** null **/
  stakes: InContextSdkMethod<Query['stakes'], QuerystakesArgs, MeshContext>,
  /** null **/
  unlock: InContextSdkMethod<Query['unlock'], QueryunlockArgs, MeshContext>,
  /** null **/
  unlocks: InContextSdkMethod<Query['unlocks'], QueryunlocksArgs, MeshContext>,
  /** null **/
  assetDay: InContextSdkMethod<Query['assetDay'], QueryassetDayArgs, MeshContext>,
  /** null **/
  assetDays: InContextSdkMethod<Query['assetDays'], QueryassetDaysArgs, MeshContext>,
  /** null **/
  tenderizerDay: InContextSdkMethod<Query['tenderizerDay'], QuerytenderizerDayArgs, MeshContext>,
  /** null **/
  tenderizerDays: InContextSdkMethod<Query['tenderizerDays'], QuerytenderizerDaysArgs, MeshContext>,
  /** null **/
  depositEvent: InContextSdkMethod<Query['depositEvent'], QuerydepositEventArgs, MeshContext>,
  /** null **/
  depositEvents: InContextSdkMethod<Query['depositEvents'], QuerydepositEventsArgs, MeshContext>,
  /** null **/
  unlockEvent: InContextSdkMethod<Query['unlockEvent'], QueryunlockEventArgs, MeshContext>,
  /** null **/
  unlockEvents: InContextSdkMethod<Query['unlockEvents'], QueryunlockEventsArgs, MeshContext>,
  /** null **/
  withdrawEvent: InContextSdkMethod<Query['withdrawEvent'], QuerywithdrawEventArgs, MeshContext>,
  /** null **/
  withdrawEvents: InContextSdkMethod<Query['withdrawEvents'], QuerywithdrawEventsArgs, MeshContext>,
  /** null **/
  rebaseEvent: InContextSdkMethod<Query['rebaseEvent'], QueryrebaseEventArgs, MeshContext>,
  /** null **/
  rebaseEvents: InContextSdkMethod<Query['rebaseEvents'], QueryrebaseEventsArgs, MeshContext>,
  /** null **/
  tokenTransferEvent: InContextSdkMethod<Query['tokenTransferEvent'], QuerytokenTransferEventArgs, MeshContext>,
  /** null **/
  tokenTransferEvents: InContextSdkMethod<Query['tokenTransferEvents'], QuerytokenTransferEventsArgs, MeshContext>,
  /** null **/
  swapPool: InContextSdkMethod<Query['swapPool'], QueryswapPoolArgs, MeshContext>,
  /** null **/
  swapPools: InContextSdkMethod<Query['swapPools'], QueryswapPoolsArgs, MeshContext>,
  /** null **/
  swapPoolDay: InContextSdkMethod<Query['swapPoolDay'], QueryswapPoolDayArgs, MeshContext>,
  /** null **/
  swapPoolDays: InContextSdkMethod<Query['swapPoolDays'], QueryswapPoolDaysArgs, MeshContext>,
  /** null **/
  liquidityPosition: InContextSdkMethod<Query['liquidityPosition'], QueryliquidityPositionArgs, MeshContext>,
  /** null **/
  liquidityPositions: InContextSdkMethod<Query['liquidityPositions'], QueryliquidityPositionsArgs, MeshContext>,
  /** null **/
  swapEvent: InContextSdkMethod<Query['swapEvent'], QueryswapEventArgs, MeshContext>,
  /** null **/
  swapEvents: InContextSdkMethod<Query['swapEvents'], QueryswapEventsArgs, MeshContext>,
  /** null **/
  swapDepositEvent: InContextSdkMethod<Query['swapDepositEvent'], QueryswapDepositEventArgs, MeshContext>,
  /** null **/
  swapDepositEvents: InContextSdkMethod<Query['swapDepositEvents'], QueryswapDepositEventsArgs, MeshContext>,
  /** null **/
  swapWithdrawEvent: InContextSdkMethod<Query['swapWithdrawEvent'], QueryswapWithdrawEventArgs, MeshContext>,
  /** null **/
  swapWithdrawEvents: InContextSdkMethod<Query['swapWithdrawEvents'], QueryswapWithdrawEventsArgs, MeshContext>,
  /** null **/
  swapUnlockBuyEvent: InContextSdkMethod<Query['swapUnlockBuyEvent'], QueryswapUnlockBuyEventArgs, MeshContext>,
  /** null **/
  swapUnlockBuyEvents: InContextSdkMethod<Query['swapUnlockBuyEvents'], QueryswapUnlockBuyEventsArgs, MeshContext>,
  /** null **/
  swapUnlockRedeemedEvent: InContextSdkMethod<Query['swapUnlockRedeemedEvent'], QueryswapUnlockRedeemedEventArgs, MeshContext>,
  /** null **/
  swapUnlockRedeemedEvents: InContextSdkMethod<Query['swapUnlockRedeemedEvents'], QueryswapUnlockRedeemedEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  asset: InContextSdkMethod<Subscription['asset'], SubscriptionassetArgs, MeshContext>,
  /** null **/
  assets: InContextSdkMethod<Subscription['assets'], SubscriptionassetsArgs, MeshContext>,
  /** null **/
  tenderizer: InContextSdkMethod<Subscription['tenderizer'], SubscriptiontenderizerArgs, MeshContext>,
  /** null **/
  tenderizers: InContextSdkMethod<Subscription['tenderizers'], SubscriptiontenderizersArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  stake: InContextSdkMethod<Subscription['stake'], SubscriptionstakeArgs, MeshContext>,
  /** null **/
  stakes: InContextSdkMethod<Subscription['stakes'], SubscriptionstakesArgs, MeshContext>,
  /** null **/
  unlock: InContextSdkMethod<Subscription['unlock'], SubscriptionunlockArgs, MeshContext>,
  /** null **/
  unlocks: InContextSdkMethod<Subscription['unlocks'], SubscriptionunlocksArgs, MeshContext>,
  /** null **/
  assetDay: InContextSdkMethod<Subscription['assetDay'], SubscriptionassetDayArgs, MeshContext>,
  /** null **/
  assetDays: InContextSdkMethod<Subscription['assetDays'], SubscriptionassetDaysArgs, MeshContext>,
  /** null **/
  tenderizerDay: InContextSdkMethod<Subscription['tenderizerDay'], SubscriptiontenderizerDayArgs, MeshContext>,
  /** null **/
  tenderizerDays: InContextSdkMethod<Subscription['tenderizerDays'], SubscriptiontenderizerDaysArgs, MeshContext>,
  /** null **/
  depositEvent: InContextSdkMethod<Subscription['depositEvent'], SubscriptiondepositEventArgs, MeshContext>,
  /** null **/
  depositEvents: InContextSdkMethod<Subscription['depositEvents'], SubscriptiondepositEventsArgs, MeshContext>,
  /** null **/
  unlockEvent: InContextSdkMethod<Subscription['unlockEvent'], SubscriptionunlockEventArgs, MeshContext>,
  /** null **/
  unlockEvents: InContextSdkMethod<Subscription['unlockEvents'], SubscriptionunlockEventsArgs, MeshContext>,
  /** null **/
  withdrawEvent: InContextSdkMethod<Subscription['withdrawEvent'], SubscriptionwithdrawEventArgs, MeshContext>,
  /** null **/
  withdrawEvents: InContextSdkMethod<Subscription['withdrawEvents'], SubscriptionwithdrawEventsArgs, MeshContext>,
  /** null **/
  rebaseEvent: InContextSdkMethod<Subscription['rebaseEvent'], SubscriptionrebaseEventArgs, MeshContext>,
  /** null **/
  rebaseEvents: InContextSdkMethod<Subscription['rebaseEvents'], SubscriptionrebaseEventsArgs, MeshContext>,
  /** null **/
  tokenTransferEvent: InContextSdkMethod<Subscription['tokenTransferEvent'], SubscriptiontokenTransferEventArgs, MeshContext>,
  /** null **/
  tokenTransferEvents: InContextSdkMethod<Subscription['tokenTransferEvents'], SubscriptiontokenTransferEventsArgs, MeshContext>,
  /** null **/
  swapPool: InContextSdkMethod<Subscription['swapPool'], SubscriptionswapPoolArgs, MeshContext>,
  /** null **/
  swapPools: InContextSdkMethod<Subscription['swapPools'], SubscriptionswapPoolsArgs, MeshContext>,
  /** null **/
  swapPoolDay: InContextSdkMethod<Subscription['swapPoolDay'], SubscriptionswapPoolDayArgs, MeshContext>,
  /** null **/
  swapPoolDays: InContextSdkMethod<Subscription['swapPoolDays'], SubscriptionswapPoolDaysArgs, MeshContext>,
  /** null **/
  liquidityPosition: InContextSdkMethod<Subscription['liquidityPosition'], SubscriptionliquidityPositionArgs, MeshContext>,
  /** null **/
  liquidityPositions: InContextSdkMethod<Subscription['liquidityPositions'], SubscriptionliquidityPositionsArgs, MeshContext>,
  /** null **/
  swapEvent: InContextSdkMethod<Subscription['swapEvent'], SubscriptionswapEventArgs, MeshContext>,
  /** null **/
  swapEvents: InContextSdkMethod<Subscription['swapEvents'], SubscriptionswapEventsArgs, MeshContext>,
  /** null **/
  swapDepositEvent: InContextSdkMethod<Subscription['swapDepositEvent'], SubscriptionswapDepositEventArgs, MeshContext>,
  /** null **/
  swapDepositEvents: InContextSdkMethod<Subscription['swapDepositEvents'], SubscriptionswapDepositEventsArgs, MeshContext>,
  /** null **/
  swapWithdrawEvent: InContextSdkMethod<Subscription['swapWithdrawEvent'], SubscriptionswapWithdrawEventArgs, MeshContext>,
  /** null **/
  swapWithdrawEvents: InContextSdkMethod<Subscription['swapWithdrawEvents'], SubscriptionswapWithdrawEventsArgs, MeshContext>,
  /** null **/
  swapUnlockBuyEvent: InContextSdkMethod<Subscription['swapUnlockBuyEvent'], SubscriptionswapUnlockBuyEventArgs, MeshContext>,
  /** null **/
  swapUnlockBuyEvents: InContextSdkMethod<Subscription['swapUnlockBuyEvents'], SubscriptionswapUnlockBuyEventsArgs, MeshContext>,
  /** null **/
  swapUnlockRedeemedEvent: InContextSdkMethod<Subscription['swapUnlockRedeemedEvent'], SubscriptionswapUnlockRedeemedEventArgs, MeshContext>,
  /** null **/
  swapUnlockRedeemedEvents: InContextSdkMethod<Subscription['swapUnlockRedeemedEvents'], SubscriptionswapUnlockRedeemedEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["Tenderize"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
