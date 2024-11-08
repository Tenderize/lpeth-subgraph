// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { TenderizeTypes } from './sources/Tenderize/types';
import * as importedModule$0 from "./sources/Tenderize/introspectionSchema";
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
  Asset: ResolverTypeWrapper<Asset>;
  AssetDay: ResolverTypeWrapper<AssetDay>;
  AssetDay_filter: AssetDay_filter;
  AssetDay_orderBy: AssetDay_orderBy;
  Asset_filter: Asset_filter;
  Asset_orderBy: Asset_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  DepositEvent: ResolverTypeWrapper<DepositEvent>;
  DepositEvent_filter: DepositEvent_filter;
  DepositEvent_orderBy: DepositEvent_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  LiquidityPosition: ResolverTypeWrapper<LiquidityPosition>;
  LiquidityPosition_filter: LiquidityPosition_filter;
  LiquidityPosition_orderBy: LiquidityPosition_orderBy;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  RebaseEvent: ResolverTypeWrapper<RebaseEvent>;
  RebaseEvent_filter: RebaseEvent_filter;
  RebaseEvent_orderBy: RebaseEvent_orderBy;
  Stake: ResolverTypeWrapper<Stake>;
  Stake_filter: Stake_filter;
  Stake_orderBy: Stake_orderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  SwapDepositEvent: ResolverTypeWrapper<SwapDepositEvent>;
  SwapDepositEvent_filter: SwapDepositEvent_filter;
  SwapDepositEvent_orderBy: SwapDepositEvent_orderBy;
  SwapEvent: ResolverTypeWrapper<SwapEvent>;
  SwapEvent_filter: SwapEvent_filter;
  SwapEvent_orderBy: SwapEvent_orderBy;
  SwapPool: ResolverTypeWrapper<SwapPool>;
  SwapPoolDay: ResolverTypeWrapper<SwapPoolDay>;
  SwapPoolDay_filter: SwapPoolDay_filter;
  SwapPoolDay_orderBy: SwapPoolDay_orderBy;
  SwapPool_filter: SwapPool_filter;
  SwapPool_orderBy: SwapPool_orderBy;
  SwapUnlockBuyEvent: ResolverTypeWrapper<SwapUnlockBuyEvent>;
  SwapUnlockBuyEvent_filter: SwapUnlockBuyEvent_filter;
  SwapUnlockBuyEvent_orderBy: SwapUnlockBuyEvent_orderBy;
  SwapUnlockRedeemedEvent: ResolverTypeWrapper<SwapUnlockRedeemedEvent>;
  SwapUnlockRedeemedEvent_filter: SwapUnlockRedeemedEvent_filter;
  SwapUnlockRedeemedEvent_orderBy: SwapUnlockRedeemedEvent_orderBy;
  SwapWithdrawEvent: ResolverTypeWrapper<SwapWithdrawEvent>;
  SwapWithdrawEvent_filter: SwapWithdrawEvent_filter;
  SwapWithdrawEvent_orderBy: SwapWithdrawEvent_orderBy;
  Tenderizer: ResolverTypeWrapper<Tenderizer>;
  TenderizerDay: ResolverTypeWrapper<TenderizerDay>;
  TenderizerDay_filter: TenderizerDay_filter;
  TenderizerDay_orderBy: TenderizerDay_orderBy;
  Tenderizer_filter: Tenderizer_filter;
  Tenderizer_orderBy: Tenderizer_orderBy;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  TokenTransferEvent: ResolverTypeWrapper<TokenTransferEvent>;
  TokenTransferEvent_filter: TokenTransferEvent_filter;
  TokenTransferEvent_orderBy: TokenTransferEvent_orderBy;
  Unlock: ResolverTypeWrapper<Unlock>;
  UnlockEvent: ResolverTypeWrapper<UnlockEvent>;
  UnlockEvent_filter: UnlockEvent_filter;
  UnlockEvent_orderBy: UnlockEvent_orderBy;
  Unlock_filter: Unlock_filter;
  Unlock_orderBy: Unlock_orderBy;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  WithdrawEvent: ResolverTypeWrapper<WithdrawEvent>;
  WithdrawEvent_filter: WithdrawEvent_filter;
  WithdrawEvent_orderBy: WithdrawEvent_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Asset: Asset;
  AssetDay: AssetDay;
  AssetDay_filter: AssetDay_filter;
  Asset_filter: Asset_filter;
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  DepositEvent: DepositEvent;
  DepositEvent_filter: DepositEvent_filter;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  LiquidityPosition: LiquidityPosition;
  LiquidityPosition_filter: LiquidityPosition_filter;
  Query: {};
  RebaseEvent: RebaseEvent;
  RebaseEvent_filter: RebaseEvent_filter;
  Stake: Stake;
  Stake_filter: Stake_filter;
  String: Scalars['String']['output'];
  Subscription: {};
  SwapDepositEvent: SwapDepositEvent;
  SwapDepositEvent_filter: SwapDepositEvent_filter;
  SwapEvent: SwapEvent;
  SwapEvent_filter: SwapEvent_filter;
  SwapPool: SwapPool;
  SwapPoolDay: SwapPoolDay;
  SwapPoolDay_filter: SwapPoolDay_filter;
  SwapPool_filter: SwapPool_filter;
  SwapUnlockBuyEvent: SwapUnlockBuyEvent;
  SwapUnlockBuyEvent_filter: SwapUnlockBuyEvent_filter;
  SwapUnlockRedeemedEvent: SwapUnlockRedeemedEvent;
  SwapUnlockRedeemedEvent_filter: SwapUnlockRedeemedEvent_filter;
  SwapWithdrawEvent: SwapWithdrawEvent;
  SwapWithdrawEvent_filter: SwapWithdrawEvent_filter;
  Tenderizer: Tenderizer;
  TenderizerDay: TenderizerDay;
  TenderizerDay_filter: TenderizerDay_filter;
  Tenderizer_filter: Tenderizer_filter;
  Timestamp: Scalars['Timestamp']['output'];
  TokenTransferEvent: TokenTransferEvent;
  TokenTransferEvent_filter: TokenTransferEvent_filter;
  Unlock: Unlock;
  UnlockEvent: UnlockEvent;
  UnlockEvent_filter: UnlockEvent_filter;
  Unlock_filter: Unlock_filter;
  User: User;
  User_filter: User_filter;
  WithdrawEvent: WithdrawEvent;
  WithdrawEvent_filter: WithdrawEvent_filter;
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

export type AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tenderizerCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetDays?: Resolver<Array<ResolversTypes['AssetDay']>, ParentType, ContextType, RequireFields<AssetassetDaysArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssetDayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AssetDay'] = ResolversParentTypes['AssetDay']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  rewards?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
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

export type DepositEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DepositEvent'] = ResolversParentTypes['DepositEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetsIn?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tTokenOut?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
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
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryassetArgs, 'id' | 'subgraphError'>>;
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryassetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tenderizer?: Resolver<Maybe<ResolversTypes['Tenderizer']>, ParentType, ContextType, RequireFields<QuerytenderizerArgs, 'id' | 'subgraphError'>>;
  tenderizers?: Resolver<Array<ResolversTypes['Tenderizer']>, ParentType, ContextType, RequireFields<QuerytenderizersArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stake?: Resolver<Maybe<ResolversTypes['Stake']>, ParentType, ContextType, RequireFields<QuerystakeArgs, 'id' | 'subgraphError'>>;
  stakes?: Resolver<Array<ResolversTypes['Stake']>, ParentType, ContextType, RequireFields<QuerystakesArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlock?: Resolver<Maybe<ResolversTypes['Unlock']>, ParentType, ContextType, RequireFields<QueryunlockArgs, 'id' | 'subgraphError'>>;
  unlocks?: Resolver<Array<ResolversTypes['Unlock']>, ParentType, ContextType, RequireFields<QueryunlocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  assetDay?: Resolver<Maybe<ResolversTypes['AssetDay']>, ParentType, ContextType, RequireFields<QueryassetDayArgs, 'id' | 'subgraphError'>>;
  assetDays?: Resolver<Array<ResolversTypes['AssetDay']>, ParentType, ContextType, RequireFields<QueryassetDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  tenderizerDay?: Resolver<Maybe<ResolversTypes['TenderizerDay']>, ParentType, ContextType, RequireFields<QuerytenderizerDayArgs, 'id' | 'subgraphError'>>;
  tenderizerDays?: Resolver<Array<ResolversTypes['TenderizerDay']>, ParentType, ContextType, RequireFields<QuerytenderizerDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  depositEvent?: Resolver<Maybe<ResolversTypes['DepositEvent']>, ParentType, ContextType, RequireFields<QuerydepositEventArgs, 'id' | 'subgraphError'>>;
  depositEvents?: Resolver<Array<ResolversTypes['DepositEvent']>, ParentType, ContextType, RequireFields<QuerydepositEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlockEvent?: Resolver<Maybe<ResolversTypes['UnlockEvent']>, ParentType, ContextType, RequireFields<QueryunlockEventArgs, 'id' | 'subgraphError'>>;
  unlockEvents?: Resolver<Array<ResolversTypes['UnlockEvent']>, ParentType, ContextType, RequireFields<QueryunlockEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdrawEvent?: Resolver<Maybe<ResolversTypes['WithdrawEvent']>, ParentType, ContextType, RequireFields<QuerywithdrawEventArgs, 'id' | 'subgraphError'>>;
  withdrawEvents?: Resolver<Array<ResolversTypes['WithdrawEvent']>, ParentType, ContextType, RequireFields<QuerywithdrawEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rebaseEvent?: Resolver<Maybe<ResolversTypes['RebaseEvent']>, ParentType, ContextType, RequireFields<QueryrebaseEventArgs, 'id' | 'subgraphError'>>;
  rebaseEvents?: Resolver<Array<ResolversTypes['RebaseEvent']>, ParentType, ContextType, RequireFields<QueryrebaseEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenTransferEvent?: Resolver<Maybe<ResolversTypes['TokenTransferEvent']>, ParentType, ContextType, RequireFields<QuerytokenTransferEventArgs, 'id' | 'subgraphError'>>;
  tokenTransferEvents?: Resolver<Array<ResolversTypes['TokenTransferEvent']>, ParentType, ContextType, RequireFields<QuerytokenTransferEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapPool?: Resolver<Maybe<ResolversTypes['SwapPool']>, ParentType, ContextType, RequireFields<QueryswapPoolArgs, 'id' | 'subgraphError'>>;
  swapPools?: Resolver<Array<ResolversTypes['SwapPool']>, ParentType, ContextType, RequireFields<QueryswapPoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapPoolDay?: Resolver<Maybe<ResolversTypes['SwapPoolDay']>, ParentType, ContextType, RequireFields<QueryswapPoolDayArgs, 'id' | 'subgraphError'>>;
  swapPoolDays?: Resolver<Array<ResolversTypes['SwapPoolDay']>, ParentType, ContextType, RequireFields<QueryswapPoolDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: Resolver<Maybe<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: Resolver<Array<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapEvent?: Resolver<Maybe<ResolversTypes['SwapEvent']>, ParentType, ContextType, RequireFields<QueryswapEventArgs, 'id' | 'subgraphError'>>;
  swapEvents?: Resolver<Array<ResolversTypes['SwapEvent']>, ParentType, ContextType, RequireFields<QueryswapEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapDepositEvent?: Resolver<Maybe<ResolversTypes['SwapDepositEvent']>, ParentType, ContextType, RequireFields<QueryswapDepositEventArgs, 'id' | 'subgraphError'>>;
  swapDepositEvents?: Resolver<Array<ResolversTypes['SwapDepositEvent']>, ParentType, ContextType, RequireFields<QueryswapDepositEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapWithdrawEvent?: Resolver<Maybe<ResolversTypes['SwapWithdrawEvent']>, ParentType, ContextType, RequireFields<QueryswapWithdrawEventArgs, 'id' | 'subgraphError'>>;
  swapWithdrawEvents?: Resolver<Array<ResolversTypes['SwapWithdrawEvent']>, ParentType, ContextType, RequireFields<QueryswapWithdrawEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapUnlockBuyEvent?: Resolver<Maybe<ResolversTypes['SwapUnlockBuyEvent']>, ParentType, ContextType, RequireFields<QueryswapUnlockBuyEventArgs, 'id' | 'subgraphError'>>;
  swapUnlockBuyEvents?: Resolver<Array<ResolversTypes['SwapUnlockBuyEvent']>, ParentType, ContextType, RequireFields<QueryswapUnlockBuyEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapUnlockRedeemedEvent?: Resolver<Maybe<ResolversTypes['SwapUnlockRedeemedEvent']>, ParentType, ContextType, RequireFields<QueryswapUnlockRedeemedEventArgs, 'id' | 'subgraphError'>>;
  swapUnlockRedeemedEvents?: Resolver<Array<ResolversTypes['SwapUnlockRedeemedEvent']>, ParentType, ContextType, RequireFields<QueryswapUnlockRedeemedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RebaseEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RebaseEvent'] = ResolversParentTypes['RebaseEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  oldStake?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  newStake?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StakeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Stake'] = ResolversParentTypes['Stake']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  netDeposits?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  asset?: SubscriptionResolver<Maybe<ResolversTypes['Asset']>, "asset", ParentType, ContextType, RequireFields<SubscriptionassetArgs, 'id' | 'subgraphError'>>;
  assets?: SubscriptionResolver<Array<ResolversTypes['Asset']>, "assets", ParentType, ContextType, RequireFields<SubscriptionassetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tenderizer?: SubscriptionResolver<Maybe<ResolversTypes['Tenderizer']>, "tenderizer", ParentType, ContextType, RequireFields<SubscriptiontenderizerArgs, 'id' | 'subgraphError'>>;
  tenderizers?: SubscriptionResolver<Array<ResolversTypes['Tenderizer']>, "tenderizers", ParentType, ContextType, RequireFields<SubscriptiontenderizersArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stake?: SubscriptionResolver<Maybe<ResolversTypes['Stake']>, "stake", ParentType, ContextType, RequireFields<SubscriptionstakeArgs, 'id' | 'subgraphError'>>;
  stakes?: SubscriptionResolver<Array<ResolversTypes['Stake']>, "stakes", ParentType, ContextType, RequireFields<SubscriptionstakesArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlock?: SubscriptionResolver<Maybe<ResolversTypes['Unlock']>, "unlock", ParentType, ContextType, RequireFields<SubscriptionunlockArgs, 'id' | 'subgraphError'>>;
  unlocks?: SubscriptionResolver<Array<ResolversTypes['Unlock']>, "unlocks", ParentType, ContextType, RequireFields<SubscriptionunlocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  assetDay?: SubscriptionResolver<Maybe<ResolversTypes['AssetDay']>, "assetDay", ParentType, ContextType, RequireFields<SubscriptionassetDayArgs, 'id' | 'subgraphError'>>;
  assetDays?: SubscriptionResolver<Array<ResolversTypes['AssetDay']>, "assetDays", ParentType, ContextType, RequireFields<SubscriptionassetDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  tenderizerDay?: SubscriptionResolver<Maybe<ResolversTypes['TenderizerDay']>, "tenderizerDay", ParentType, ContextType, RequireFields<SubscriptiontenderizerDayArgs, 'id' | 'subgraphError'>>;
  tenderizerDays?: SubscriptionResolver<Array<ResolversTypes['TenderizerDay']>, "tenderizerDays", ParentType, ContextType, RequireFields<SubscriptiontenderizerDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  depositEvent?: SubscriptionResolver<Maybe<ResolversTypes['DepositEvent']>, "depositEvent", ParentType, ContextType, RequireFields<SubscriptiondepositEventArgs, 'id' | 'subgraphError'>>;
  depositEvents?: SubscriptionResolver<Array<ResolversTypes['DepositEvent']>, "depositEvents", ParentType, ContextType, RequireFields<SubscriptiondepositEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlockEvent?: SubscriptionResolver<Maybe<ResolversTypes['UnlockEvent']>, "unlockEvent", ParentType, ContextType, RequireFields<SubscriptionunlockEventArgs, 'id' | 'subgraphError'>>;
  unlockEvents?: SubscriptionResolver<Array<ResolversTypes['UnlockEvent']>, "unlockEvents", ParentType, ContextType, RequireFields<SubscriptionunlockEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdrawEvent?: SubscriptionResolver<Maybe<ResolversTypes['WithdrawEvent']>, "withdrawEvent", ParentType, ContextType, RequireFields<SubscriptionwithdrawEventArgs, 'id' | 'subgraphError'>>;
  withdrawEvents?: SubscriptionResolver<Array<ResolversTypes['WithdrawEvent']>, "withdrawEvents", ParentType, ContextType, RequireFields<SubscriptionwithdrawEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rebaseEvent?: SubscriptionResolver<Maybe<ResolversTypes['RebaseEvent']>, "rebaseEvent", ParentType, ContextType, RequireFields<SubscriptionrebaseEventArgs, 'id' | 'subgraphError'>>;
  rebaseEvents?: SubscriptionResolver<Array<ResolversTypes['RebaseEvent']>, "rebaseEvents", ParentType, ContextType, RequireFields<SubscriptionrebaseEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenTransferEvent?: SubscriptionResolver<Maybe<ResolversTypes['TokenTransferEvent']>, "tokenTransferEvent", ParentType, ContextType, RequireFields<SubscriptiontokenTransferEventArgs, 'id' | 'subgraphError'>>;
  tokenTransferEvents?: SubscriptionResolver<Array<ResolversTypes['TokenTransferEvent']>, "tokenTransferEvents", ParentType, ContextType, RequireFields<SubscriptiontokenTransferEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapPool?: SubscriptionResolver<Maybe<ResolversTypes['SwapPool']>, "swapPool", ParentType, ContextType, RequireFields<SubscriptionswapPoolArgs, 'id' | 'subgraphError'>>;
  swapPools?: SubscriptionResolver<Array<ResolversTypes['SwapPool']>, "swapPools", ParentType, ContextType, RequireFields<SubscriptionswapPoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapPoolDay?: SubscriptionResolver<Maybe<ResolversTypes['SwapPoolDay']>, "swapPoolDay", ParentType, ContextType, RequireFields<SubscriptionswapPoolDayArgs, 'id' | 'subgraphError'>>;
  swapPoolDays?: SubscriptionResolver<Array<ResolversTypes['SwapPoolDay']>, "swapPoolDays", ParentType, ContextType, RequireFields<SubscriptionswapPoolDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPosition']>, "liquidityPosition", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: SubscriptionResolver<Array<ResolversTypes['LiquidityPosition']>, "liquidityPositions", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapEvent?: SubscriptionResolver<Maybe<ResolversTypes['SwapEvent']>, "swapEvent", ParentType, ContextType, RequireFields<SubscriptionswapEventArgs, 'id' | 'subgraphError'>>;
  swapEvents?: SubscriptionResolver<Array<ResolversTypes['SwapEvent']>, "swapEvents", ParentType, ContextType, RequireFields<SubscriptionswapEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapDepositEvent?: SubscriptionResolver<Maybe<ResolversTypes['SwapDepositEvent']>, "swapDepositEvent", ParentType, ContextType, RequireFields<SubscriptionswapDepositEventArgs, 'id' | 'subgraphError'>>;
  swapDepositEvents?: SubscriptionResolver<Array<ResolversTypes['SwapDepositEvent']>, "swapDepositEvents", ParentType, ContextType, RequireFields<SubscriptionswapDepositEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapWithdrawEvent?: SubscriptionResolver<Maybe<ResolversTypes['SwapWithdrawEvent']>, "swapWithdrawEvent", ParentType, ContextType, RequireFields<SubscriptionswapWithdrawEventArgs, 'id' | 'subgraphError'>>;
  swapWithdrawEvents?: SubscriptionResolver<Array<ResolversTypes['SwapWithdrawEvent']>, "swapWithdrawEvents", ParentType, ContextType, RequireFields<SubscriptionswapWithdrawEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapUnlockBuyEvent?: SubscriptionResolver<Maybe<ResolversTypes['SwapUnlockBuyEvent']>, "swapUnlockBuyEvent", ParentType, ContextType, RequireFields<SubscriptionswapUnlockBuyEventArgs, 'id' | 'subgraphError'>>;
  swapUnlockBuyEvents?: SubscriptionResolver<Array<ResolversTypes['SwapUnlockBuyEvent']>, "swapUnlockBuyEvents", ParentType, ContextType, RequireFields<SubscriptionswapUnlockBuyEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapUnlockRedeemedEvent?: SubscriptionResolver<Maybe<ResolversTypes['SwapUnlockRedeemedEvent']>, "swapUnlockRedeemedEvent", ParentType, ContextType, RequireFields<SubscriptionswapUnlockRedeemedEventArgs, 'id' | 'subgraphError'>>;
  swapUnlockRedeemedEvents?: SubscriptionResolver<Array<ResolversTypes['SwapUnlockRedeemedEvent']>, "swapUnlockRedeemedEvents", ParentType, ContextType, RequireFields<SubscriptionswapUnlockRedeemedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type SwapDepositEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapDepositEvent'] = ResolversParentTypes['SwapDepositEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sharesMinted?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  SwapPool?: Resolver<ResolversTypes['SwapPool'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapEvent'] = ResolversParentTypes['SwapEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  SwapPool?: Resolver<ResolversTypes['SwapPool'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapPoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapPool'] = ResolversParentTypes['SwapPool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lpToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type SwapUnlockBuyEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapUnlockBuyEvent'] = ResolversParentTypes['SwapUnlockBuyEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unlock?: Resolver<ResolversTypes['Unlock'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reward?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lpFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  SwapPool?: Resolver<ResolversTypes['SwapPool'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapUnlockRedeemedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapUnlockRedeemedEvent'] = ResolversParentTypes['SwapUnlockRedeemedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unlock?: Resolver<ResolversTypes['Unlock'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reward?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lpFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  SwapPool?: Resolver<ResolversTypes['SwapPool'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapWithdrawEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapWithdrawEvent'] = ResolversParentTypes['SwapWithdrawEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sharesBurned?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  SwapPool?: Resolver<ResolversTypes['SwapPool'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TenderizerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tenderizer'] = ResolversParentTypes['Tenderizer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  apr?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  apy?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  stakes?: Resolver<Array<ResolversTypes['Stake']>, ParentType, ContextType, RequireFields<TenderizerstakesArgs, 'skip' | 'first'>>;
  tenderizerDays?: Resolver<Array<ResolversTypes['TenderizerDay']>, ParentType, ContextType, RequireFields<TenderizertenderizerDaysArgs, 'skip' | 'first'>>;
  lastUpdateDay?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositEvents?: Resolver<Array<ResolversTypes['DepositEvent']>, ParentType, ContextType, RequireFields<TenderizerdepositEventsArgs, 'skip' | 'first'>>;
  unlockEvents?: Resolver<Array<ResolversTypes['UnlockEvent']>, ParentType, ContextType, RequireFields<TenderizerunlockEventsArgs, 'skip' | 'first'>>;
  withdrawEvents?: Resolver<Array<ResolversTypes['WithdrawEvent']>, ParentType, ContextType, RequireFields<TenderizerwithdrawEventsArgs, 'skip' | 'first'>>;
  rebaseEvents?: Resolver<Array<ResolversTypes['RebaseEvent']>, ParentType, ContextType, RequireFields<TenderizerrebaseEventsArgs, 'skip' | 'first'>>;
  tokenTransferEvents?: Resolver<Array<ResolversTypes['TokenTransferEvent']>, ParentType, ContextType, RequireFields<TenderizertokenTransferEventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TenderizerDayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TenderizerDay'] = ResolversParentTypes['TenderizerDay']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  startStake?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  rewards?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  apr?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  apy?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TokenTransferEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenTransferEvent'] = ResolversParentTypes['TokenTransferEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnlockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Unlock'] = ResolversParentTypes['Unlock']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maturity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  redeemed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnlockEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UnlockEvent'] = ResolversParentTypes['UnlockEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  unlock?: Resolver<ResolversTypes['Unlock'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stakes?: Resolver<Maybe<Array<ResolversTypes['Stake']>>, ParentType, ContextType, RequireFields<UserstakesArgs, 'skip' | 'first'>>;
  unlocks?: Resolver<Maybe<Array<ResolversTypes['Unlock']>>, ParentType, ContextType, RequireFields<UserunlocksArgs, 'skip' | 'first'>>;
  liquidityPositions?: Resolver<Maybe<Array<ResolversTypes['LiquidityPosition']>>, ParentType, ContextType, RequireFields<UserliquidityPositionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WithdrawEvent'] = ResolversParentTypes['WithdrawEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetsOut?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  unlock?: Resolver<ResolversTypes['Unlock'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
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
  Asset?: AssetResolvers<ContextType>;
  AssetDay?: AssetDayResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  DepositEvent?: DepositEventResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  LiquidityPosition?: LiquidityPositionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RebaseEvent?: RebaseEventResolvers<ContextType>;
  Stake?: StakeResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SwapDepositEvent?: SwapDepositEventResolvers<ContextType>;
  SwapEvent?: SwapEventResolvers<ContextType>;
  SwapPool?: SwapPoolResolvers<ContextType>;
  SwapPoolDay?: SwapPoolDayResolvers<ContextType>;
  SwapUnlockBuyEvent?: SwapUnlockBuyEventResolvers<ContextType>;
  SwapUnlockRedeemedEvent?: SwapUnlockRedeemedEventResolvers<ContextType>;
  SwapWithdrawEvent?: SwapWithdrawEventResolvers<ContextType>;
  Tenderizer?: TenderizerResolvers<ContextType>;
  TenderizerDay?: TenderizerDayResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  TokenTransferEvent?: TokenTransferEventResolvers<ContextType>;
  Unlock?: UnlockResolvers<ContextType>;
  UnlockEvent?: UnlockEventResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  WithdrawEvent?: WithdrawEventResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = TenderizeTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/Tenderize/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
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

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const tenderizeTransforms = [];
const additionalTypeDefs = [] as any[];
const tenderizeHandler = new GraphqlHandler({
              name: "Tenderize",
              config: {"endpoint":"https://api.studio.thegraph.com/query/45970/tenderize-v2-mainnet/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Tenderize"),
              logger: logger.child("Tenderize"),
              importFn,
            });
sources[0] = {
          name: 'Tenderize',
          handler: tenderizeHandler,
          transforms: tenderizeTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })
const documentHashMap = {
        "1a1e9898f4afb52af0310b4e0fdb43f8e48099da08155279eefe51e38d17ad7c": GetPoolsDocument,
"1a1e9898f4afb52af0310b4e0fdb43f8e48099da08155279eefe51e38d17ad7c": GetPoolDocument
      }
additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
          return documentHashMap[key];
        },
        ...{}
      }))

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetPoolsDocument,
        get rawSDL() {
          return printWithCache(GetPoolsDocument);
        },
        location: 'GetPoolsDocument.graphql',
        sha256Hash: '1a1e9898f4afb52af0310b4e0fdb43f8e48099da08155279eefe51e38d17ad7c'
      },{
        document: GetPoolDocument,
        get rawSDL() {
          return printWithCache(GetPoolDocument);
        },
        location: 'GetPoolDocument.graphql',
        sha256Hash: '1a1e9898f4afb52af0310b4e0fdb43f8e48099da08155279eefe51e38d17ad7c'
      }
    ];
    },
    fetchFn,
  };
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
    Pick<SwapPool, 'id' | 'asset' | 'lpToken' | 'liabilities' | 'totalSupply' | 'unlocking' | 'volume' | 'volumeUSD' | 'fees' | 'feesUSD' | 'lpRewards' | 'lpRewardsUSD'>
    & { poolDays: Array<Pick<SwapPoolDay, 'date' | 'id' | 'liabilities' | 'totalSupply' | 'unlocking' | 'volume' | 'volumeUSD' | 'fees' | 'feesUSD' | 'lpRewards' | 'lpRewardsUSD'>> }
  )> };

export type getPoolQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  dateFilter?: InputMaybe<Scalars['Int']['input']>;
}>;


export type getPoolQuery = { swapPool?: Maybe<(
    Pick<SwapPool, 'id' | 'asset' | 'lpToken' | 'liabilities' | 'totalSupply' | 'unlocking' | 'volume' | 'volumeUSD' | 'fees' | 'feesUSD' | 'lpRewards' | 'lpRewardsUSD'>
    & { poolDays: Array<Pick<SwapPoolDay, 'date' | 'id' | 'liabilities' | 'totalSupply' | 'unlocking' | 'volume' | 'volumeUSD' | 'fees' | 'feesUSD' | 'lpRewards' | 'lpRewardsUSD'>> }
  )> };


export const getPoolsDocument = gql`
    query getPools($dateFilter: Int = 0, $first: Int = 1000, $skip: Int = 0) {
  swapPools {
    id
    asset
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
    asset
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