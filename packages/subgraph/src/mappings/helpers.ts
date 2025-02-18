import { Address, BigDecimal, BigInt, Bytes, ethereum } from '@graphprotocol/graph-ts'
import { UniswapQuoter } from '../../generated/LpETH/UniswapQuoter'
import { SwapPool, SwapPoolDay } from '../../generated/schema'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BD_ZERO = BigDecimal.fromString('0')
export const BI_ZERO = BigInt.fromI32(0)
export const BI_ONE = BigInt.fromI32(1)
export const BD_ONE = BigDecimal.fromString('1')
export const BI_18 = BigInt.fromI32(18)
export const TEN_18 = BigInt.fromU32(10).pow(18)
export const TEN_6 = BigInt.fromU32(10).pow(6)
export const TEN_24 = TEN_18.times(TEN_6) // 18 decimals for normal tokens and 6 decimals for USDC

export const QUOTER = Address.fromString('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6')
export const WETH9_ARBITRUM = Address.fromString('0x82aF49447D8a07e3bd95BD0d56f35241523fBab1')
export const USDC_ARBITRUM = Address.fromString('0xaf88d065e77c8cC2239327C5EDb3A432268e5831')
export const USDC_MAINNET = Address.fromString('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')
export const WETH_MAINNET = Address.fromString('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
const REBASE_TOPIC = '0x11c6bf55864ff83827df712625d7a80e5583eef0264921025e7cd22003a21511'

export const ETHUSD = (): BigDecimal => {
  const quoter = UniswapQuoter.bind(QUOTER)

  // Call Uniswap's quoteExactInputSingle to get the ETH/USDC price
  const ethUsd = quoter.try_quoteExactInputSingle(
    WETH_MAINNET, // ETH address (WETH)
    USDC_MAINNET, // USDC address
    3000, // Pool fee (adjust according to the pool you're using)
    TEN_18, // Amount of ETH (scaled by 10^18 since ETH has 18 decimals)
    BI_ZERO // Zero for sqrtPriceLimitX96 (no limit)
  )

  // If the call reverted, return zero
  if (ethUsd.reverted) return BD_ZERO

  // Convert the result to a decimal and adjust for USDC decimals (6 decimals)
  return ethUsd.value.toBigDecimal().div(TEN_6.toBigDecimal())
}

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = BigDecimal.fromString('1')
  for (let i = BI_ZERO; i.lt(decimals as BigInt); i = i.plus(BI_ONE)) {
    bd = bd.times(BigDecimal.fromString('10'))
  }
  return bd
}

export function convertToDecimal(eth: BigInt): BigDecimal {
  return eth.toBigDecimal().div(exponentToBigDecimal(BI_18))
}

export const calculateDayID = (timestamp: BigInt): BigInt => {
  return timestamp.div(BigInt.fromI32(86400)).times(BigInt.fromI32(86400))
}

// Define the return type
class DecodedTokenId {
  tenderizer: string
  id: BigInt

  constructor(tenderizer: string, id: BigInt) {
    this.tenderizer = tenderizer
    this.id = id
  }
}

export const decodeTokenId = (tokenId: BigInt): DecodedTokenId => {
  let hexId = tokenId.toHexString()
  let address = '0x' + hexId.substring(0, 20)
  let uint96 = BigInt.fromUnsignedBytes(Bytes.fromHexString(hexId.substring(20, 32)))

  // Return the decoded values
  return new DecodedTokenId(address, uint96)
}

export function findClosestRebaseEvent(
  receipt: ethereum.TransactionReceipt | null,
  contractAddress: Address,
  logIndex: BigInt
): BigDecimal | null {
  if (receipt == null) return null
  if (logIndex == BI_ZERO) return null

  for (let i = receipt.logs.length - 1; i >= 0; i--) {
    let log = receipt.logs[i]
    if (log.logIndex.ge(logIndex)) continue

    // Check if the log is from the correct contract
    if (log.address != contractAddress) continue
    if (log.topics.length == 0 || log.topics[0].toHexString() != REBASE_TOPIC) continue

    // Check if the log is a Rebase event
    let decoded = ethereum.decode('(uint256,uint256)', log.data)
    if (decoded == null) return null
    const t = decoded.toTuple()
    return convertToDecimal(t[0].toBigInt())
  }

  return null
}

export const initiatePoolDay = (pool: SwapPool, dayID: BigInt): SwapPoolDay => {
  const poolDay = new SwapPoolDay(pool.id.concat('-').concat(dayID.toString()))

  poolDay.date = dayID.toI32()
  poolDay.pool = pool.id

  poolDay.totalSupply = pool.totalSupply
  poolDay.liabilities = pool.liabilities
  poolDay.unlocking = pool.unlocking

  poolDay.volume = BI_ZERO
  poolDay.volumeUSD = BD_ZERO
  poolDay.fees = BI_ZERO
  poolDay.feesUSD = BD_ZERO
  poolDay.lpRewards = BI_ZERO
  poolDay.lpRewardsUSD = BD_ZERO
  poolDay.treasuryCut = BI_ZERO
  poolDay.treasuryCutUSD = BD_ZERO

  return poolDay
}
