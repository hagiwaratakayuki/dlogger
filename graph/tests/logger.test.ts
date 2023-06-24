import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt } from "@graphprotocol/graph-ts"
import { onAddLog } from "../generated/schema"
import { onAddLog as onAddLogEvent } from "../generated/Logger/Logger"
import { handleonAddLog } from "../src/logger"
import { createonAddLogEvent } from "./logger-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let log = "Example string value"
    let origin = Bytes.fromI32(1234567890)
    let caller = Bytes.fromI32(1234567890)
    let block = BigInt.fromI32(234)
    let timestamp = BigInt.fromI32(234)
    let logger = Bytes.fromI32(1234567890)
    let newonAddLogEvent = createonAddLogEvent(
      log,
      origin,
      caller,
      block,
      timestamp,
      logger
    )
    handleonAddLog(newonAddLogEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("onAddLog created and stored", () => {
    assert.entityCount("onAddLog", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "onAddLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "log",
      "Example string value"
    )
    assert.fieldEquals(
      "onAddLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "origin",
      "1234567890"
    )
    assert.fieldEquals(
      "onAddLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "caller",
      "1234567890"
    )
    assert.fieldEquals(
      "onAddLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "block",
      "234"
    )
    assert.fieldEquals(
      "onAddLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )
    assert.fieldEquals(
      "onAddLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "logger",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
