import _Log from './Log.svelte';



export default {
    title: 'Aggregation',
    component: _Log,

};

/**
 * @type {import("../../../relay_types/logs.d.ts").Logs}
 */
const logs = [
    {
        block:2042,
        log: "this is test",
        logger: "abafwlwydsmst",
        origin: "afwertlwergferw",
        sender: "0xabcdefgawtnp345",
        timestamp:203754789
        
    }, 
    {
        block: 2042,
        log: "this is test",
        logger: "abafwlwydsmst",
        origin: "afwertlwergferw",
        sender: "0xabcdefgawtnp345",
        timestamp: 203754789

    }

];

export const Log = {
    args:{
        logs
    }

}


