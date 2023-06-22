<script>
    
   
    import Group from "../../../../../elements/Group.svelte";
    import Contract from "./Contract.svelte";

    import NoItem from "../_elements/NoItem.svelte";
	import Unit from "./elements/Unit.svelte";
	
    /**
     * @typedef {import("src/relay_types").Contract} Contarct
     * @type {Contarct[]}
     */
    export let contracts = [];
    

    
</script>
<Group isIndent={true}>
    {#each contracts as contract, index}
    <Unit isLast={contracts.length === index +1}>
        <Contract value={contract}></Contract>
   
    </Unit>      
    {:else}
        <NoItem message="No Contract"></NoItem>
    {/each}
    
</Group>

