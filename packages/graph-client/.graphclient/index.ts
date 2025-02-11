// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { LpEthTypes } from './sources/lpEth/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Aggregation_interval: Aggregation_interval;
  BatchUnlockBought: ResolverTypeWrapper<BatchUnlockBought>;
  BatchUnlockBought_filter: BatchUnlockBought_filter;
  BatchUnlockBought_orderBy: BatchUnlockBought_orderBy;
  BatchUnlockRedeemed: ResolverTypeWrapper<BatchUnlockRedeemed>;
  BatchUnlockRedeemed_filter: BatchUnlockRedeemed_filter;
  BatchUnlockRedeemed_orderBy: BatchUnlockRedeemed_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  ClaimWithdrawRequest: ResolverTypeWrapper<ClaimWithdrawRequest>;
  ClaimWithdrawRequest_filter: ClaimWithdrawRequest_filter;
  ClaimWithdrawRequest_orderBy: ClaimWithdrawRequest_orderBy;
  Deposit: ResolverTypeWrapper<Deposit>;
  Deposit_filter: Deposit_filter;
  Deposit_orderBy: Deposit_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  LiquidityPosition: ResolverTypeWrapper<LiquidityPosition>;
  LiquidityPosition_filter: LiquidityPosition_filter;
  LiquidityPosition_orderBy: LiquidityPosition_orderBy;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  RelayerRewardsClaimed: ResolverTypeWrapper<RelayerRewardsClaimed>;
  RelayerRewardsClaimed_filter: RelayerRewardsClaimed_filter;
  RelayerRewardsClaimed_orderBy: RelayerRewardsClaimed_orderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Swap: ResolverTypeWrapper<Swap>;
  SwapLPTokenTransfer: ResolverTypeWrapper<SwapLPTokenTransfer>;
  SwapLPTokenTransfer_filter: SwapLPTokenTransfer_filter;
  SwapLPTokenTransfer_orderBy: SwapLPTokenTransfer_orderBy;
  SwapPool: ResolverTypeWrapper<SwapPool>;
  SwapPoolDay: ResolverTypeWrapper<SwapPoolDay>;
  SwapPoolDay_filter: SwapPoolDay_filter;
  SwapPoolDay_orderBy: SwapPoolDay_orderBy;
  SwapPool_filter: SwapPool_filter;
  SwapPool_orderBy: SwapPool_orderBy;
  Swap_filter: Swap_filter;
  Swap_orderBy: Swap_orderBy;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  UnlockBought: ResolverTypeWrapper<UnlockBought>;
  UnlockBought_filter: UnlockBought_filter;
  UnlockBought_orderBy: UnlockBought_orderBy;
  UnlockRedeemed: ResolverTypeWrapper<UnlockRedeemed>;
  UnlockRedeemed_filter: UnlockRedeemed_filter;
  UnlockRedeemed_orderBy: UnlockRedeemed_orderBy;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  Withdraw: ResolverTypeWrapper<Withdraw>;
  Withdraw_filter: Withdraw_filter;
  Withdraw_orderBy: Withdraw_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BatchUnlockBought: BatchUnlockBought;
  BatchUnlockBought_filter: BatchUnlockBought_filter;
  BatchUnlockRedeemed: BatchUnlockRedeemed;
  BatchUnlockRedeemed_filter: BatchUnlockRedeemed_filter;
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  ClaimWithdrawRequest: ClaimWithdrawRequest;
  ClaimWithdrawRequest_filter: ClaimWithdrawRequest_filter;
  Deposit: Deposit;
  Deposit_filter: Deposit_filter;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  LiquidityPosition: LiquidityPosition;
  LiquidityPosition_filter: LiquidityPosition_filter;
  Query: {};
  RelayerRewardsClaimed: RelayerRewardsClaimed;
  RelayerRewardsClaimed_filter: RelayerRewardsClaimed_filter;
  String: Scalars['String']['output'];
  Subscription: {};
  Swap: Swap;
  SwapLPTokenTransfer: SwapLPTokenTransfer;
  SwapLPTokenTransfer_filter: SwapLPTokenTransfer_filter;
  SwapPool: SwapPool;
  SwapPoolDay: SwapPoolDay;
  SwapPoolDay_filter: SwapPoolDay_filter;
  SwapPool_filter: SwapPool_filter;
  Swap_filter: Swap_filter;
  Timestamp: Scalars['Timestamp']['output'];
  UnlockBought: UnlockBought;
  UnlockBought_filter: UnlockBought_filter;
  UnlockRedeemed: UnlockRedeemed;
  UnlockRedeemed_filter: UnlockRedeemed_filter;
  User: User;
  User_filter: User_filter;
  Withdraw: Withdraw;
  Withdraw_filter: Withdraw_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BatchUnlockBoughtResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BatchUnlockBought'] = ResolversParentTypes['BatchUnlockBought']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reward?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lpFees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenIds?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BatchUnlockRedeemedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BatchUnlockRedeemed'] = ResolversParentTypes['BatchUnlockRedeemed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  relayer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reward?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lpFees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenIds?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type ClaimWithdrawRequestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ClaimWithdrawRequest'] = ResolversParentTypes['ClaimWithdrawRequest']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  requestId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DepositResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lpSharesMinted?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type LiquidityPositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPosition'] = ResolversParentTypes['LiquidityPosition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['SwapPool'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  netDeposits?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  batchUnlockBought?: Resolver<Maybe<ResolversTypes['BatchUnlockBought']>, ParentType, ContextType, RequireFields<QuerybatchUnlockBoughtArgs, 'id' | 'subgraphError'>>;
  batchUnlockBoughts?: Resolver<Array<ResolversTypes['BatchUnlockBought']>, ParentType, ContextType, RequireFields<QuerybatchUnlockBoughtsArgs, 'skip' | 'first' | 'subgraphError'>>;
  batchUnlockRedeemed?: Resolver<Maybe<ResolversTypes['BatchUnlockRedeemed']>, ParentType, ContextType, RequireFields<QuerybatchUnlockRedeemedArgs, 'id' | 'subgraphError'>>;
  batchUnlockRedeemeds?: Resolver<Array<ResolversTypes['BatchUnlockRedeemed']>, ParentType, ContextType, RequireFields<QuerybatchUnlockRedeemedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimWithdrawRequest?: Resolver<Maybe<ResolversTypes['ClaimWithdrawRequest']>, ParentType, ContextType, RequireFields<QueryclaimWithdrawRequestArgs, 'id' | 'subgraphError'>>;
  claimWithdrawRequests?: Resolver<Array<ResolversTypes['ClaimWithdrawRequest']>, ParentType, ContextType, RequireFields<QueryclaimWithdrawRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapArgs, 'id' | 'subgraphError'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposit?: Resolver<Maybe<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositArgs, 'id' | 'subgraphError'>>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  relayerRewardsClaimed?: Resolver<Maybe<ResolversTypes['RelayerRewardsClaimed']>, ParentType, ContextType, RequireFields<QueryrelayerRewardsClaimedArgs, 'id' | 'subgraphError'>>;
  relayerRewardsClaimeds?: Resolver<Array<ResolversTypes['RelayerRewardsClaimed']>, ParentType, ContextType, RequireFields<QueryrelayerRewardsClaimedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapPool?: Resolver<Maybe<ResolversTypes['SwapPool']>, ParentType, ContextType, RequireFields<QueryswapPoolArgs, 'id' | 'subgraphError'>>;
  swapPools?: Resolver<Array<ResolversTypes['SwapPool']>, ParentType, ContextType, RequireFields<QueryswapPoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapPoolDay?: Resolver<Maybe<ResolversTypes['SwapPoolDay']>, ParentType, ContextType, RequireFields<QueryswapPoolDayArgs, 'id' | 'subgraphError'>>;
  swapPoolDays?: Resolver<Array<ResolversTypes['SwapPoolDay']>, ParentType, ContextType, RequireFields<QueryswapPoolDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlockBought?: Resolver<Maybe<ResolversTypes['UnlockBought']>, ParentType, ContextType, RequireFields<QueryunlockBoughtArgs, 'id' | 'subgraphError'>>;
  unlockBoughts?: Resolver<Array<ResolversTypes['UnlockBought']>, ParentType, ContextType, RequireFields<QueryunlockBoughtsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlockRedeemed?: Resolver<Maybe<ResolversTypes['UnlockRedeemed']>, ParentType, ContextType, RequireFields<QueryunlockRedeemedArgs, 'id' | 'subgraphError'>>;
  unlockRedeemeds?: Resolver<Array<ResolversTypes['UnlockRedeemed']>, ParentType, ContextType, RequireFields<QueryunlockRedeemedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdraw?: Resolver<Maybe<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawArgs, 'id' | 'subgraphError'>>;
  withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapLPTokenTransfer?: Resolver<Maybe<ResolversTypes['SwapLPTokenTransfer']>, ParentType, ContextType, RequireFields<QueryswapLPTokenTransferArgs, 'id' | 'subgraphError'>>;
  swapLPTokenTransfers?: Resolver<Array<ResolversTypes['SwapLPTokenTransfer']>, ParentType, ContextType, RequireFields<QueryswapLPTokenTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: Resolver<Maybe<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: Resolver<Array<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RelayerRewardsClaimedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RelayerRewardsClaimed'] = ResolversParentTypes['RelayerRewardsClaimed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  relayer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  rewards?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  batchUnlockBought?: SubscriptionResolver<Maybe<ResolversTypes['BatchUnlockBought']>, "batchUnlockBought", ParentType, ContextType, RequireFields<SubscriptionbatchUnlockBoughtArgs, 'id' | 'subgraphError'>>;
  batchUnlockBoughts?: SubscriptionResolver<Array<ResolversTypes['BatchUnlockBought']>, "batchUnlockBoughts", ParentType, ContextType, RequireFields<SubscriptionbatchUnlockBoughtsArgs, 'skip' | 'first' | 'subgraphError'>>;
  batchUnlockRedeemed?: SubscriptionResolver<Maybe<ResolversTypes['BatchUnlockRedeemed']>, "batchUnlockRedeemed", ParentType, ContextType, RequireFields<SubscriptionbatchUnlockRedeemedArgs, 'id' | 'subgraphError'>>;
  batchUnlockRedeemeds?: SubscriptionResolver<Array<ResolversTypes['BatchUnlockRedeemed']>, "batchUnlockRedeemeds", ParentType, ContextType, RequireFields<SubscriptionbatchUnlockRedeemedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimWithdrawRequest?: SubscriptionResolver<Maybe<ResolversTypes['ClaimWithdrawRequest']>, "claimWithdrawRequest", ParentType, ContextType, RequireFields<SubscriptionclaimWithdrawRequestArgs, 'id' | 'subgraphError'>>;
  claimWithdrawRequests?: SubscriptionResolver<Array<ResolversTypes['ClaimWithdrawRequest']>, "claimWithdrawRequests", ParentType, ContextType, RequireFields<SubscriptionclaimWithdrawRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>>;
  swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposit?: SubscriptionResolver<Maybe<ResolversTypes['Deposit']>, "deposit", ParentType, ContextType, RequireFields<SubscriptiondepositArgs, 'id' | 'subgraphError'>>;
  deposits?: SubscriptionResolver<Array<ResolversTypes['Deposit']>, "deposits", ParentType, ContextType, RequireFields<SubscriptiondepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  relayerRewardsClaimed?: SubscriptionResolver<Maybe<ResolversTypes['RelayerRewardsClaimed']>, "relayerRewardsClaimed", ParentType, ContextType, RequireFields<SubscriptionrelayerRewardsClaimedArgs, 'id' | 'subgraphError'>>;
  relayerRewardsClaimeds?: SubscriptionResolver<Array<ResolversTypes['RelayerRewardsClaimed']>, "relayerRewardsClaimeds", ParentType, ContextType, RequireFields<SubscriptionrelayerRewardsClaimedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapPool?: SubscriptionResolver<Maybe<ResolversTypes['SwapPool']>, "swapPool", ParentType, ContextType, RequireFields<SubscriptionswapPoolArgs, 'id' | 'subgraphError'>>;
  swapPools?: SubscriptionResolver<Array<ResolversTypes['SwapPool']>, "swapPools", ParentType, ContextType, RequireFields<SubscriptionswapPoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapPoolDay?: SubscriptionResolver<Maybe<ResolversTypes['SwapPoolDay']>, "swapPoolDay", ParentType, ContextType, RequireFields<SubscriptionswapPoolDayArgs, 'id' | 'subgraphError'>>;
  swapPoolDays?: SubscriptionResolver<Array<ResolversTypes['SwapPoolDay']>, "swapPoolDays", ParentType, ContextType, RequireFields<SubscriptionswapPoolDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlockBought?: SubscriptionResolver<Maybe<ResolversTypes['UnlockBought']>, "unlockBought", ParentType, ContextType, RequireFields<SubscriptionunlockBoughtArgs, 'id' | 'subgraphError'>>;
  unlockBoughts?: SubscriptionResolver<Array<ResolversTypes['UnlockBought']>, "unlockBoughts", ParentType, ContextType, RequireFields<SubscriptionunlockBoughtsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlockRedeemed?: SubscriptionResolver<Maybe<ResolversTypes['UnlockRedeemed']>, "unlockRedeemed", ParentType, ContextType, RequireFields<SubscriptionunlockRedeemedArgs, 'id' | 'subgraphError'>>;
  unlockRedeemeds?: SubscriptionResolver<Array<ResolversTypes['UnlockRedeemed']>, "unlockRedeemeds", ParentType, ContextType, RequireFields<SubscriptionunlockRedeemedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdraw?: SubscriptionResolver<Maybe<ResolversTypes['Withdraw']>, "withdraw", ParentType, ContextType, RequireFields<SubscriptionwithdrawArgs, 'id' | 'subgraphError'>>;
  withdraws?: SubscriptionResolver<Array<ResolversTypes['Withdraw']>, "withdraws", ParentType, ContextType, RequireFields<SubscriptionwithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapLPTokenTransfer?: SubscriptionResolver<Maybe<ResolversTypes['SwapLPTokenTransfer']>, "swapLPTokenTransfer", ParentType, ContextType, RequireFields<SubscriptionswapLPTokenTransferArgs, 'id' | 'subgraphError'>>;
  swapLPTokenTransfers?: SubscriptionResolver<Array<ResolversTypes['SwapLPTokenTransfer']>, "swapLPTokenTransfers", ParentType, ContextType, RequireFields<SubscriptionswapLPTokenTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPosition']>, "liquidityPosition", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: SubscriptionResolver<Array<ResolversTypes['LiquidityPosition']>, "liquidityPositions", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['SwapPool'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapLPTokenTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapLPTokenTransfer'] = ResolversParentTypes['SwapLPTokenTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  SwapPool?: Resolver<ResolversTypes['SwapPool'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapPoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapPool'] = ResolversParentTypes['SwapPool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liabilities?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  unlocking?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lpRewards?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lpRewardsUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  treasuryCut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  treasuryCutUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  numSwaps?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lpToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  poolDays?: Resolver<Array<ResolversTypes['SwapPoolDay']>, ParentType, ContextType, RequireFields<SwapPoolpoolDaysArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapPoolDayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapPoolDay'] = ResolversParentTypes['SwapPoolDay']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['SwapPool'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liabilities?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  unlocking?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lpRewards?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lpRewardsUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  treasuryCut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  treasuryCutUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type UnlockBoughtResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UnlockBought'] = ResolversParentTypes['UnlockBought']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reward?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lpFees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnlockRedeemedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UnlockRedeemed'] = ResolversParentTypes['UnlockRedeemed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  relayer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reward?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lpFees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidityPositions?: Resolver<Maybe<Array<ResolversTypes['LiquidityPosition']>>, ParentType, ContextType, RequireFields<UserliquidityPositionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Withdraw'] = ResolversParentTypes['Withdraw']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lpSharesBurnt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  requestId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BatchUnlockBought?: BatchUnlockBoughtResolvers<ContextType>;
  BatchUnlockRedeemed?: BatchUnlockRedeemedResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  ClaimWithdrawRequest?: ClaimWithdrawRequestResolvers<ContextType>;
  Deposit?: DepositResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  LiquidityPosition?: LiquidityPositionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RelayerRewardsClaimed?: RelayerRewardsClaimedResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  SwapLPTokenTransfer?: SwapLPTokenTransferResolvers<ContextType>;
  SwapPool?: SwapPoolResolvers<ContextType>;
  SwapPoolDay?: SwapPoolDayResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  UnlockBought?: UnlockBoughtResolvers<ContextType>;
  UnlockRedeemed?: UnlockRedeemedResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Withdraw?: WithdrawResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = LpEthTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "graphclient build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".graphclient",
    configName: "graphclient",
    additionalPackagePrefixes: ["@graphprotocol/client-"],
    initialLoggerPrefix: "GraphClient",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type getPoolsQueryVariables = Exact<{
  dateFilter?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type getPoolsQuery = { swapPools: Array<(
    Pick<SwapPool, 'id' | 'lpToken' | 'liabilities' | 'totalSupply' | 'unlocking' | 'volume' | 'volumeUSD' | 'fees' | 'feesUSD' | 'lpRewards' | 'lpRewardsUSD'>
    & { poolDays: Array<Pick<SwapPoolDay, 'date' | 'id' | 'liabilities' | 'totalSupply' | 'unlocking' | 'volume' | 'volumeUSD' | 'fees' | 'feesUSD' | 'lpRewards' | 'lpRewardsUSD'>> }
  )> };

export type getPoolQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  dateFilter?: InputMaybe<Scalars['Int']['input']>;
}>;


export type getPoolQuery = { swapPool?: Maybe<(
    Pick<SwapPool, 'id' | 'lpToken' | 'liabilities' | 'totalSupply' | 'unlocking' | 'volume' | 'volumeUSD' | 'fees' | 'feesUSD' | 'lpRewards' | 'lpRewardsUSD'>
    & { poolDays: Array<Pick<SwapPoolDay, 'date' | 'id' | 'liabilities' | 'totalSupply' | 'unlocking' | 'volume' | 'volumeUSD' | 'fees' | 'feesUSD' | 'lpRewards' | 'lpRewardsUSD'>> }
  )> };


export const getPoolsDocument = gql`
    query getPools($dateFilter: Int = 0, $first: Int = 1000, $skip: Int = 0) {
  swapPools {
    id
    lpToken
    liabilities
    totalSupply
    unlocking
    volume
    volumeUSD
    fees
    feesUSD
    lpRewards
    lpRewardsUSD
    poolDays(where: {date_gte: $dateFilter}, orderBy: date, orderDirection: desc) {
      date
      id
      liabilities
      totalSupply
      unlocking
      volume
      volumeUSD
      fees
      feesUSD
      lpRewards
      lpRewardsUSD
    }
  }
}
    ` as unknown as DocumentNode<getPoolsQuery, getPoolsQueryVariables>;
export const getPoolDocument = gql`
    query getPool($id: ID!, $dateFilter: Int = 0) {
  swapPool(id: $id) {
    id
    lpToken
    liabilities
    totalSupply
    unlocking
    volume
    volumeUSD
    fees
    feesUSD
    lpRewards
    lpRewardsUSD
    poolDays(where: {date_gte: $dateFilter}, orderBy: date, orderDirection: desc) {
      date
      id
      liabilities
      totalSupply
      unlocking
      volume
      volumeUSD
      fees
      feesUSD
      lpRewards
      lpRewardsUSD
    }
  }
}
    ` as unknown as DocumentNode<getPoolQuery, getPoolQueryVariables>;



export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    getPools(variables?: getPoolsQueryVariables, options?: C): Promise<getPoolsQuery> {
      return requester<getPoolsQuery, getPoolsQueryVariables>(getPoolsDocument, variables, options) as Promise<getPoolsQuery>;
    },
    getPool(variables: getPoolQueryVariables, options?: C): Promise<getPoolQuery> {
      return requester<getPoolQuery, getPoolQueryVariables>(getPoolDocument, variables, options) as Promise<getPoolQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;