import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { onAddLog } from "../generated/Logger/Logger"

export function createonAddLogEvent(
  log: string,
  origin: Bytes,
  caller: Bytes,
  block: BigInt,
  timestamp: BigInt,
  logger: Bytes
): onAddLog {
  let onAddLogEvent = changetype<onAddLog>(newMockEvent())

  onAddLogEvent.parameters = new Array()

  onAddLogEvent.parameters.push(
    new ethereum.EventParam("log", ethereum.Value.fromString(log))
  )
  onAddLogEvent.parameters.push(
    new ethereum.EventParam("origin", ethereum.Value.fromFixedBytes(origin))
  )
  onAddLogEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromFixedBytes(caller))
  )
  onAddLogEvent.parameters.push(
    new ethereum.EventParam("block", ethereum.Value.fromUnsignedBigInt(block))
  )
  onAddLogEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  onAddLogEvent.parameters.push(
    new ethereum.EventParam("logger", ethereum.Value.fromFixedBytes(logger))
  )

  return onAddLogEvent
}
