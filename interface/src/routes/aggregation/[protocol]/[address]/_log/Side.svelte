<script>
	import { ListGroup, ListGroupItem } from "sveltestrap";
	import NoItem from "../_elements/NoItem.svelte";
	import FlatHeader2 from "../../../../../elements/FlatHeader2.svelte";
    /**
     * @type {import("../../../../../relay_types/logs").Logs}
     */
    export let logs = [];


</script>
<FlatHeader2>Logs</FlatHeader2>
{#if logs && logs.length}
<ListGroup flush>
    {#each logs as log}
        <ListGroupItem>
            <div class="unit">
                <p class="mb-4">{log.log}</p>
                <div class="d-flex flex-row mb-3">
                    <div class="w-50 item_name">Origin</div>
                    <div class="w-50">{log.origin}</div>
                </div>
                <div class="d-flex flex-row mb-3">
                    <div class="w-50 item_name">Sender</div>
                    <div class="w-50">{log.sender}</div>
                </div>
                <div class="d-flex flex-row mb-3">
                    <div class="w-50 item_name">Block</div>
                    <div class="w-50">{log.block}</div>                    
                </div>
                <div class="d-flex flex-row mb-3">
                    <div class="w-50 item_name">Logger</div>
                    <div class="w-50">{log.logger}</div>                    
                </div>
            </div>            
        </ListGroupItem>
    {/each}
</ListGroup>
{:else}
<NoItem message={"No Logs"}></NoItem>
{/if}

<style>
    .item_name {
        font-family:'Arial', 'Helvetica Neu', 'Helvetica', sans-serif ;
        font-weight: bold;

    }

</style>