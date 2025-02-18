import { Address, BigInt } from '@graphprotocol/graph-ts'
import { afterAll, assert, beforeAll, clearStore, describe, test } from 'matchstick-as/assembly/index'
import { handleBatchUnlockBought } from '../packages/subgraph/src/lp-eth'
import { createBatchUnlockBoughtEvent } from './lp-eth-utils'

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe('Describe entity assertions', () => {
  beforeAll(() => {
    let caller = Address.fromString('0x0000000000000000000000000000000000000001')
    let amount = BigInt.fromI32(234)
    let reward = BigInt.fromI32(234)
    let lpFees = BigInt.fromI32(234)
    let tokenIds = [BigInt.fromI32(234)]
    let newBatchUnlockBoughtEvent = createBatchUnlockBoughtEvent(caller, amount, reward, lpFees, tokenIds)
    handleBatchUnlockBought(newBatchUnlockBoughtEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test('BatchUnlockBought created and stored', () => {
    assert.entityCount('BatchUnlockBought', 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      'BatchUnlockBought',
      '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1',
      'caller',
      '0x0000000000000000000000000000000000000001'
    )
    assert.fieldEquals('BatchUnlockBought', '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1', 'amount', '234')
    assert.fieldEquals('BatchUnlockBought', '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1', 'reward', '234')
    assert.fieldEquals('BatchUnlockBought', '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1', 'lpFees', '234')
    assert.fieldEquals('BatchUnlockBought', '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1', 'tokenIds', '[234]')

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
