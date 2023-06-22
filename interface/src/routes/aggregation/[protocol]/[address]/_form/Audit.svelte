<script>
    
    import Link from "./Link.svelte";
	import NoItem from "../_elements/NoItem.svelte";
	import FlatHeader3 from "../../../../../elements/FlatHeader3.svelte";
	import FlatHeader2 from "../../../../../elements/FlatHeader2.svelte";
	import Unit from "./elements/Unit.svelte";
    import Group from "../../../../../elements/Group.svelte";
    /**
     * @type {import("src/relay_types/aggregation").Audit}
     */
    export let values = []; 
    
    export let label = 'Audit';
    export let headerLevel = 3; 
    export let checkLast = true;

    
</script>  
<Group>
    {#if headerLevel === 2}
        <FlatHeader2>{label}</FlatHeader2>    
    {/if}
    {#if headerLevel === 3}
        <FlatHeader3>{label}</FlatHeader3>
  
    {/if} 
    <Group isIndent={true}>
        
        {#each values as value, index}
            <Unit isLast={checkLast == true && values.length === index + 1}>
                <Link  link={value}/>                               
            </Unit>
        {:else}
            <NoItem message={"No Audit Link"}></NoItem>
        {/each}
        
    </Group>

</Group>