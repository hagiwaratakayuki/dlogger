import { Aggregation } from '$lib/server/mongodb/models/aggregation';
import { gql } from 'graphql-request';
import {call} from '$lib/server/graphql/client';
import { json } from '@sveltejs/kit';

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
        onAddLogs(where: {origin: ${origin}, or:[${callerString}] }){
            log
            origin
            caller
            timestamp
            block
            transactionHash

        }
             
     `
     /**
      * @typedef {{transactionHash:string}} log
      */
      /**
       * @type {log[]}
       */
     const  queryResponses =  await call(query);
     /**
      * @type {Object<string, log[]>}
      */
     const  logMap = {};
     for (const queryResponse of queryResponses) {
        const logs = logMap[queryResponse.transactionHash] || [];
        logs.push(queryResponse)

     }
     const logs = Object.values(logMap);





    return json({aggreagtion, logs});
};