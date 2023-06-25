import { onAddLog as onAddLogEvent } from "../generated/Logger/Logger"
import { onAddLog } from "../generated/schema"

export function handleonAddLog(event: onAddLogEvent): void {
  let entity = new onAddLog(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  )
  entity.log = event.params.log
  entity.origin = event.params.origin.toHexString()
  entity.caller = event.params.caller.toHexString()
  entity.block = event.params.block.toHexString()
  entity.timestamp = event.params.timestamp.toHexString()
  entity.logger = event.params.logger.toHexString()

  entity.blockNumber = event.block.number.toHexString()
  entity.blockTimestamp = event.block.timestamp.toHexString()
  entity.transactionHash = event.transaction.hash.toHexString()

  entity.save()
}
