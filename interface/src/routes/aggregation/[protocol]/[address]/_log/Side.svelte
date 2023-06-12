<script>
	import { ListGroup, ListGroupItem } from "sveltestrap";
	import NoItem from "../_elements/NoItem.svelte";
	import FlatHeader2 from "../../../../../elements/FlatHeader2.svelte";
    /**
     * @type {import("../../../../../relay_types/logs").Logs}
     */
    export let logs = [];
    let _logBinds = []
    $: {
        let logBindMap = {};
        for (const log of logs) {
            const logBind = logBindMap[log.block] || []
            logBind.push(log)
            logBindMap[log.block] = logBind

            
        }
        _logBinds = Object.entries(logBindMap).map(function([block,logUnits]){
            return {block, logUnits}

        })
        //console.log(_logBinds);
    }


</script>
<FlatHeader2>Logs</FlatHeader2>
{#if logs && logs.length}
<ListGroup flush>
    {#each _logBinds as logBind}
        <ListGroupItem>
            <div class="d-flex flex-row mb-3">
                <div class="w-50 item_name">Block</div>
                <div class="w-50">{logBind.block}</div>
            </div>
            {#each logBind.logUnits || [] as logUnit, index}
                    
            <div class="unit ps-2 mb-4 " class:border-bottom={(logBind.logUnits.length -1) !== index  }>
                <p class="mb-3">{logUnit.log}</p>
                <div class="d-flex flex-row mb-3">
                    <div class="w-50 item_name">Origin</div>
                    <div class="w-50">{logUnit.origin}</div>
                </div>
                <div class="d-flex flex-row mb-3">
                    <div class="w-50 item_name">Sender</div>
                    <div class="w-50">{logUnit.sender}</div>
                </div>
                <div class="d-flex flex-row mb-3">
                    <div class="w-50 item_name">Logger</div>
                    <div class="w-50">{logUnit.logger}</div>                    
                </div>
            </div> 
            {/each}    
        </ListGroupItem>
    {/each}
</ListGroup>
{:else}
<NoItem message={"No Logs"}></NoItem>
{/if}

<style>
    .item_name {
       font-weight: bold;

    }

</style>