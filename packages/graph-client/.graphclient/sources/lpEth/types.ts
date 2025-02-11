// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace LpEthTypes {
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

export type BatchUnlockBought = {
  id: Scalars['Bytes']['output'];
  caller: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  reward: Scalars['BigInt']['output'];
  lpFees: Scalars['BigInt']['output'];
  tokenIds: Array<Scalars['BigInt']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BatchUnlockBought_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
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
  lpFees?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchUnlockBought_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BatchUnlockBought_filter>>>;
};

export type BatchUnlockBought_orderBy =
  | 'id'
  | 'caller'
  | 'amount'
  | 'reward'
  | 'lpFees'
  | 'tokenIds'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type BatchUnlockRedeemed = {
  id: Scalars['Bytes']['output'];
  relayer: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  reward: Scalars['BigInt']['output'];
  lpFees: Scalars['BigInt']['output'];
  tokenIds: Array<Scalars['BigInt']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BatchUnlockRedeemed_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  relayer?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_not?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  relayer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
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
  lpFees?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchUnlockRedeemed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BatchUnlockRedeemed_filter>>>;
};

export type BatchUnlockRedeemed_orderBy =
  | 'id'
  | 'relayer'
  | 'amount'
  | 'reward'
  | 'lpFees'
  | 'tokenIds'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type ClaimWithdrawRequest = {
  id: Scalars['Bytes']['output'];
  requestId: Scalars['BigInt']['output'];
  to: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ClaimWithdrawRequest_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_not?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requestId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClaimWithdrawRequest_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClaimWithdrawRequest_filter>>>;
};

export type ClaimWithdrawRequest_orderBy =
  | 'id'
  | 'requestId'
  | 'to'
  | 'amount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Deposit = {
  id: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  lpSharesMinted: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Deposit_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpSharesMinted?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesMinted_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesMinted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesMinted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesMinted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesMinted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesMinted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpSharesMinted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
};

export type Deposit_orderBy =
  | 'id'
  | 'from'
  | 'amount'
  | 'lpSharesMinted'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

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
  | 'pool__numSwaps'
  | 'pool__lpToken'
  | 'shares'
  | 'netDeposits';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  batchUnlockBought?: Maybe<BatchUnlockBought>;
  batchUnlockBoughts: Array<BatchUnlockBought>;
  batchUnlockRedeemed?: Maybe<BatchUnlockRedeemed>;
  batchUnlockRedeemeds: Array<BatchUnlockRedeemed>;
  claimWithdrawRequest?: Maybe<ClaimWithdrawRequest>;
  claimWithdrawRequests: Array<ClaimWithdrawRequest>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  relayerRewardsClaimed?: Maybe<RelayerRewardsClaimed>;
  relayerRewardsClaimeds: Array<RelayerRewardsClaimed>;
  swapPool?: Maybe<SwapPool>;
  swapPools: Array<SwapPool>;
  swapPoolDay?: Maybe<SwapPoolDay>;
  swapPoolDays: Array<SwapPoolDay>;
  unlockBought?: Maybe<UnlockBought>;
  unlockBoughts: Array<UnlockBought>;
  unlockRedeemed?: Maybe<UnlockRedeemed>;
  unlockRedeemeds: Array<UnlockRedeemed>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  swapLPTokenTransfer?: Maybe<SwapLPTokenTransfer>;
  swapLPTokenTransfers: Array<SwapLPTokenTransfer>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerybatchUnlockBoughtArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybatchUnlockBoughtsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BatchUnlockBought_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BatchUnlockBought_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybatchUnlockRedeemedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybatchUnlockRedeemedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BatchUnlockRedeemed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BatchUnlockRedeemed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimWithdrawRequestArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimWithdrawRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClaimWithdrawRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimWithdrawRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrelayerRewardsClaimedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrelayerRewardsClaimedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RelayerRewardsClaimed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RelayerRewardsClaimed_filter>;
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


export type QueryunlockBoughtArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunlockBoughtsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UnlockBought_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnlockBought_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunlockRedeemedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunlockRedeemedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UnlockRedeemed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnlockRedeemed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapLPTokenTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapLPTokenTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapLPTokenTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapLPTokenTransfer_filter>;
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


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RelayerRewardsClaimed = {
  id: Scalars['Bytes']['output'];
  relayer: Scalars['Bytes']['output'];
  rewards: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RelayerRewardsClaimed_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  relayer?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_not?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  relayer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rewards?: InputMaybe<Scalars['BigInt']['input']>;
  rewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RelayerRewardsClaimed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RelayerRewardsClaimed_filter>>>;
};

export type RelayerRewardsClaimed_orderBy =
  | 'id'
  | 'relayer'
  | 'rewards'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Subscription = {
  batchUnlockBought?: Maybe<BatchUnlockBought>;
  batchUnlockBoughts: Array<BatchUnlockBought>;
  batchUnlockRedeemed?: Maybe<BatchUnlockRedeemed>;
  batchUnlockRedeemeds: Array<BatchUnlockRedeemed>;
  claimWithdrawRequest?: Maybe<ClaimWithdrawRequest>;
  claimWithdrawRequests: Array<ClaimWithdrawRequest>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  relayerRewardsClaimed?: Maybe<RelayerRewardsClaimed>;
  relayerRewardsClaimeds: Array<RelayerRewardsClaimed>;
  swapPool?: Maybe<SwapPool>;
  swapPools: Array<SwapPool>;
  swapPoolDay?: Maybe<SwapPoolDay>;
  swapPoolDays: Array<SwapPoolDay>;
  unlockBought?: Maybe<UnlockBought>;
  unlockBoughts: Array<UnlockBought>;
  unlockRedeemed?: Maybe<UnlockRedeemed>;
  unlockRedeemeds: Array<UnlockRedeemed>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  swapLPTokenTransfer?: Maybe<SwapLPTokenTransfer>;
  swapLPTokenTransfers: Array<SwapLPTokenTransfer>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionbatchUnlockBoughtArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbatchUnlockBoughtsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BatchUnlockBought_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BatchUnlockBought_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbatchUnlockRedeemedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbatchUnlockRedeemedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BatchUnlockRedeemed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BatchUnlockRedeemed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimWithdrawRequestArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimWithdrawRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClaimWithdrawRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimWithdrawRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrelayerRewardsClaimedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrelayerRewardsClaimedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RelayerRewardsClaimed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RelayerRewardsClaimed_filter>;
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


export type SubscriptionunlockBoughtArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunlockBoughtsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UnlockBought_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnlockBought_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunlockRedeemedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunlockRedeemedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UnlockRedeemed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnlockRedeemed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapLPTokenTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapLPTokenTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapLPTokenTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapLPTokenTransfer_filter>;
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


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Swap = {
  id: Scalars['ID']['output'];
  pool: SwapPool;
  asset: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  amountUSD: Scalars['BigDecimal']['output'];
  fee: Scalars['BigInt']['output'];
  feeUSD: Scalars['BigDecimal']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SwapLPTokenTransfer = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  blockNumber: Scalars['BigInt']['output'];
  from: Scalars['String']['output'];
  to: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  SwapPool: SwapPool;
};

export type SwapLPTokenTransfer_filter = {
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
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<SwapLPTokenTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapLPTokenTransfer_filter>>>;
};

export type SwapLPTokenTransfer_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'from'
  | 'to'
  | 'amount'
  | 'SwapPool'
  | 'SwapPool__id'
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
  | 'SwapPool__treasuryCutUSD'
  | 'SwapPool__numSwaps'
  | 'SwapPool__lpToken';

export type SwapPool = {
  id: Scalars['ID']['output'];
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
  numSwaps: Scalars['BigInt']['output'];
  lpToken: Scalars['Bytes']['output'];
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
  | 'pool__numSwaps'
  | 'pool__lpToken'
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
  numSwaps?: InputMaybe<Scalars['BigInt']['input']>;
  numSwaps_not?: InputMaybe<Scalars['BigInt']['input']>;
  numSwaps_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numSwaps_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numSwaps_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numSwaps_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numSwaps_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numSwaps_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpToken?: InputMaybe<Scalars['Bytes']['input']>;
  lpToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  lpToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lpToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lpToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lpToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lpToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lpToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lpToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lpToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  poolDays_?: InputMaybe<SwapPoolDay_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapPool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapPool_filter>>>;
};

export type SwapPool_orderBy =
  | 'id'
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
  | 'numSwaps'
  | 'lpToken'
  | 'poolDays';

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  asset?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  asset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fee?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
};

export type Swap_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
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
  | 'pool__numSwaps'
  | 'pool__lpToken'
  | 'asset'
  | 'from'
  | 'amount'
  | 'amountUSD'
  | 'fee'
  | 'feeUSD'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type UnlockBought = {
  id: Scalars['Bytes']['output'];
  caller: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  amount: Scalars['BigInt']['output'];
  reward: Scalars['BigInt']['output'];
  lpFees: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type UnlockBought_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  lpFees?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UnlockBought_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UnlockBought_filter>>>;
};

export type UnlockBought_orderBy =
  | 'id'
  | 'caller'
  | 'tokenId'
  | 'amount'
  | 'reward'
  | 'lpFees'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type UnlockRedeemed = {
  id: Scalars['Bytes']['output'];
  relayer: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  amount: Scalars['BigInt']['output'];
  reward: Scalars['BigInt']['output'];
  lpFees: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type UnlockRedeemed_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  relayer?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_not?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  relayer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  lpFees?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UnlockRedeemed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UnlockRedeemed_filter>>>;
};

export type UnlockRedeemed_orderBy =
  | 'id'
  | 'relayer'
  | 'tokenId'
  | 'amount'
  | 'reward'
  | 'lpFees'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type User = {
  id: Scalars['ID']['output'];
  liquidityPositions?: Maybe<Array<LiquidityPosition>>;
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
  liquidityPositions_?: InputMaybe<LiquidityPosition_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'liquidityPositions';

export type Withdraw = {
  id: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  lpSharesBurnt: Scalars['BigInt']['output'];
  requestId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Withdraw_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpSharesBurnt?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesBurnt_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesBurnt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesBurnt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesBurnt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesBurnt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpSharesBurnt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpSharesBurnt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requestId?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_not?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requestId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
};

export type Withdraw_orderBy =
  | 'id'
  | 'to'
  | 'amount'
  | 'lpSharesBurnt'
  | 'requestId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

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
  batchUnlockBought: InContextSdkMethod<Query['batchUnlockBought'], QuerybatchUnlockBoughtArgs, MeshContext>,
  /** null **/
  batchUnlockBoughts: InContextSdkMethod<Query['batchUnlockBoughts'], QuerybatchUnlockBoughtsArgs, MeshContext>,
  /** null **/
  batchUnlockRedeemed: InContextSdkMethod<Query['batchUnlockRedeemed'], QuerybatchUnlockRedeemedArgs, MeshContext>,
  /** null **/
  batchUnlockRedeemeds: InContextSdkMethod<Query['batchUnlockRedeemeds'], QuerybatchUnlockRedeemedsArgs, MeshContext>,
  /** null **/
  claimWithdrawRequest: InContextSdkMethod<Query['claimWithdrawRequest'], QueryclaimWithdrawRequestArgs, MeshContext>,
  /** null **/
  claimWithdrawRequests: InContextSdkMethod<Query['claimWithdrawRequests'], QueryclaimWithdrawRequestsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Query['swap'], QueryswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Query['swaps'], QueryswapsArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Query['deposit'], QuerydepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Query['deposits'], QuerydepositsArgs, MeshContext>,
  /** null **/
  relayerRewardsClaimed: InContextSdkMethod<Query['relayerRewardsClaimed'], QueryrelayerRewardsClaimedArgs, MeshContext>,
  /** null **/
  relayerRewardsClaimeds: InContextSdkMethod<Query['relayerRewardsClaimeds'], QueryrelayerRewardsClaimedsArgs, MeshContext>,
  /** null **/
  swapPool: InContextSdkMethod<Query['swapPool'], QueryswapPoolArgs, MeshContext>,
  /** null **/
  swapPools: InContextSdkMethod<Query['swapPools'], QueryswapPoolsArgs, MeshContext>,
  /** null **/
  swapPoolDay: InContextSdkMethod<Query['swapPoolDay'], QueryswapPoolDayArgs, MeshContext>,
  /** null **/
  swapPoolDays: InContextSdkMethod<Query['swapPoolDays'], QueryswapPoolDaysArgs, MeshContext>,
  /** null **/
  unlockBought: InContextSdkMethod<Query['unlockBought'], QueryunlockBoughtArgs, MeshContext>,
  /** null **/
  unlockBoughts: InContextSdkMethod<Query['unlockBoughts'], QueryunlockBoughtsArgs, MeshContext>,
  /** null **/
  unlockRedeemed: InContextSdkMethod<Query['unlockRedeemed'], QueryunlockRedeemedArgs, MeshContext>,
  /** null **/
  unlockRedeemeds: InContextSdkMethod<Query['unlockRedeemeds'], QueryunlockRedeemedsArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Query['withdraw'], QuerywithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Query['withdraws'], QuerywithdrawsArgs, MeshContext>,
  /** null **/
  swapLPTokenTransfer: InContextSdkMethod<Query['swapLPTokenTransfer'], QueryswapLPTokenTransferArgs, MeshContext>,
  /** null **/
  swapLPTokenTransfers: InContextSdkMethod<Query['swapLPTokenTransfers'], QueryswapLPTokenTransfersArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  liquidityPosition: InContextSdkMethod<Query['liquidityPosition'], QueryliquidityPositionArgs, MeshContext>,
  /** null **/
  liquidityPositions: InContextSdkMethod<Query['liquidityPositions'], QueryliquidityPositionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  batchUnlockBought: InContextSdkMethod<Subscription['batchUnlockBought'], SubscriptionbatchUnlockBoughtArgs, MeshContext>,
  /** null **/
  batchUnlockBoughts: InContextSdkMethod<Subscription['batchUnlockBoughts'], SubscriptionbatchUnlockBoughtsArgs, MeshContext>,
  /** null **/
  batchUnlockRedeemed: InContextSdkMethod<Subscription['batchUnlockRedeemed'], SubscriptionbatchUnlockRedeemedArgs, MeshContext>,
  /** null **/
  batchUnlockRedeemeds: InContextSdkMethod<Subscription['batchUnlockRedeemeds'], SubscriptionbatchUnlockRedeemedsArgs, MeshContext>,
  /** null **/
  claimWithdrawRequest: InContextSdkMethod<Subscription['claimWithdrawRequest'], SubscriptionclaimWithdrawRequestArgs, MeshContext>,
  /** null **/
  claimWithdrawRequests: InContextSdkMethod<Subscription['claimWithdrawRequests'], SubscriptionclaimWithdrawRequestsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Subscription['swap'], SubscriptionswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Subscription['swaps'], SubscriptionswapsArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Subscription['deposit'], SubscriptiondepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Subscription['deposits'], SubscriptiondepositsArgs, MeshContext>,
  /** null **/
  relayerRewardsClaimed: InContextSdkMethod<Subscription['relayerRewardsClaimed'], SubscriptionrelayerRewardsClaimedArgs, MeshContext>,
  /** null **/
  relayerRewardsClaimeds: InContextSdkMethod<Subscription['relayerRewardsClaimeds'], SubscriptionrelayerRewardsClaimedsArgs, MeshContext>,
  /** null **/
  swapPool: InContextSdkMethod<Subscription['swapPool'], SubscriptionswapPoolArgs, MeshContext>,
  /** null **/
  swapPools: InContextSdkMethod<Subscription['swapPools'], SubscriptionswapPoolsArgs, MeshContext>,
  /** null **/
  swapPoolDay: InContextSdkMethod<Subscription['swapPoolDay'], SubscriptionswapPoolDayArgs, MeshContext>,
  /** null **/
  swapPoolDays: InContextSdkMethod<Subscription['swapPoolDays'], SubscriptionswapPoolDaysArgs, MeshContext>,
  /** null **/
  unlockBought: InContextSdkMethod<Subscription['unlockBought'], SubscriptionunlockBoughtArgs, MeshContext>,
  /** null **/
  unlockBoughts: InContextSdkMethod<Subscription['unlockBoughts'], SubscriptionunlockBoughtsArgs, MeshContext>,
  /** null **/
  unlockRedeemed: InContextSdkMethod<Subscription['unlockRedeemed'], SubscriptionunlockRedeemedArgs, MeshContext>,
  /** null **/
  unlockRedeemeds: InContextSdkMethod<Subscription['unlockRedeemeds'], SubscriptionunlockRedeemedsArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Subscription['withdraw'], SubscriptionwithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Subscription['withdraws'], SubscriptionwithdrawsArgs, MeshContext>,
  /** null **/
  swapLPTokenTransfer: InContextSdkMethod<Subscription['swapLPTokenTransfer'], SubscriptionswapLPTokenTransferArgs, MeshContext>,
  /** null **/
  swapLPTokenTransfers: InContextSdkMethod<Subscription['swapLPTokenTransfers'], SubscriptionswapLPTokenTransfersArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  liquidityPosition: InContextSdkMethod<Subscription['liquidityPosition'], SubscriptionliquidityPositionArgs, MeshContext>,
  /** null **/
  liquidityPositions: InContextSdkMethod<Subscription['liquidityPositions'], SubscriptionliquidityPositionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["lpEth"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
