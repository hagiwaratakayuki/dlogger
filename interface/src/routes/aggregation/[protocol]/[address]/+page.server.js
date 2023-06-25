import { Aggregation } from '$lib/server/mongodb/models/aggregation';
import { gql } from 'graphql-request';
import {call} from '$lib/server/graphql/client';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const model = new Aggregation();
    await model.connect()
    const mongoId = event.params.address
    /**
     * @type {import("src/relay_types/aggregation").Aggregation}
     */
    const aggreagtion = await model.read(mongoId);
    const origin = aggreagtion.origin.address
    const callers = (aggreagtion.contracts || []).filter(function(contract) {
        return contract.isSender;
     }).map(function (contract) {
        return '{' + `caller:${contract.protocol.address}` + '}';         
     })
     const callerString = callers.join(", ")
     
     const query = gql`{
        onAddLog(where: {origin: ${origin}, or:[{$callerString}] }){
            log
            origin
            caller
            timestamp
            block
            transactionHash

        }
             
     `

     const logs =  await call(query);





    return {};
};