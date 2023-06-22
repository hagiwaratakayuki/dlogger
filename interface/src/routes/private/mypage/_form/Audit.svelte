<script>
    import { FormGroup,Label } from "sveltestrap";
    import Link from "./Link.svelte";
    import { onMount } from "svelte";
	import DeleteButton from "./elements/DeleteButton.svelte";
	import AddButton from "./elements/AddButton.svelte";
	import NoItem from "./elements/NoItem.svelte";
	import FlatHeader3 from "../../../../elements/FlatHeader3.svelte";
	import FlatHeader2 from "../../../../elements/FlatHeader2.svelte";
	import Unit from "./elements/Unit.svelte";
    /**
     * @type {import("src/relay_types/aggregation").Audit}
     */
    export let values = []; // same thing multyple link. ex websit, onchain 
    export let key = "";
    export let label = 'Audit';
    export let headerLevel = 3; 

    
    function createKey(index) {
        let _key; 
        if (key) {
            _key = key + '_';

        }
        return _key + 'audit_' + index;

    }

    function addLink() {
         /**
          * @type {import("src/relay_types/aggregation").Link}
          * */
        const link = {linkType:"website"}
        values.push(link);
        values = values;



    }
    function createRemoveLink(index) {
        return function() {
            values.splice(index, 1);
            values = values;
                  
            
            

            
        }
    }
</script>
<FormGroup>
    {#if headerLevel === 2}
        <FlatHeader2>{label}</FlatHeader2>    
    {/if}
    {#if headerLevel === 3}
        <FlatHeader3>{label}</FlatHeader3>
  
    {/if} 
    <FormGroup class="ps-2">
        
            {#each values as value, index}
                <Unit>
                    <Link key={createKey(index)} bind:link={value}/>
                    <FormGroup><DeleteButton message={"Remove Audit Link"} on:click={createRemoveLink(index)}></DeleteButton></FormGroup>            
                </Unit>
            {:else}
                <NoItem message={"No Audit Link"}></NoItem>
            {/each}
              
        <FormGroup>
            <AddButton message={"Add Audit Link"} on:click={addLink}></AddButton>
        </FormGroup>
    </FormGroup>

</FormGroup>