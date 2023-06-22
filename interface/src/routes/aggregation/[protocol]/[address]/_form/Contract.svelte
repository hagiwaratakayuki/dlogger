<script>
    
    import Audit from "./Audit.svelte";
    import Protocol from "./Protocol.svelte";
    import Website from "./Website.svelte";
    import Oracle from "./Oracle.svelte";

    import Group from "../../../../../elements/Group.svelte";

	import NoItem from "../_elements/NoItem.svelte";
	
	import FlatHeader3 from "../../../../../elements/FlatHeader3.svelte";
	import Unit from "./elements/Unit.svelte";
	import HorizontalHeader from "../../../../../elements/HorizontalHeader.svelte";
    /**
     * @type {import("src/relay_types/aggregation").Contract}
     */
    export let value = {};
   
    export let contractAlias = "Contract";
    
    
    

  
    
</script>
{#if value.name}
<Group>
    <HorizontalHeader>Contract Name</HorizontalHeader>
    <span>{value.name}</span>   
</Group>
{/if}
{#if value.website && Object.values(value.website) > 0 }
<Group>
    <HorizontalHeader>Website of {contractAlias}</HorizontalHeader>
    <Website value={value.website}></Website>
</Group>
{/if}
<Protocol value={value.protocol}></Protocol>
<Audit  label={"Audit Link for This " + contractAlias}/>
<Group>
    <FlatHeader3>Oracles for This {contractAlias}</FlatHeader3>
    <Group isIndent={true}>
        {#each value.oracles as oracle, index}
            <Unit isLast={value.oracles.length === index +1}>                
                <Oracle value={oracle}></Oracle>
            </Unit>
    
        {:else}
        <NoItem message="No Oracle"></NoItem>
        {/each}
    </Group>
</Group>

