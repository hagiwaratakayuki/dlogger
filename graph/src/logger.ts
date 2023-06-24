import { onAddLog as onAddLogEvent } from "../generated/Logger/Logger"
import { onAddLog } from "../generated/schema"

export function handleonAddLog(event: onAddLogEvent): void {
  let entity = new onAddLog(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.log = event.params.log
  entity.origin = event.params.origin
  entity.caller = event.params.caller
  entity.block = event.params.block
  entity.timestamp = event.params.timestamp
  entity.logger = event.params.logger

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
