<script>
    import Audit from "./Audit.svelte";
    import Protocol from "./Protocol.svelte";
    import Website from "./Website.svelte";
	import FlatHeader3 from "../../../../../elements/FlatHeader3.svelte";
	import Group from "../../../../../elements/Group.svelte";
	import HorizontalHeader from "../../../../../elements/HorizontalHeader.svelte";
    /**
     * @type {import("src/relay_types/aggregation").Oracle}
     */
    export let value = {};
  
    
   
  
    
</script>
<div role="article">
    <Group>
        <HorizontalHeader>Oracle's Name</HorizontalHeader>
        <span>{value.name}</span>       
 
    </Group>       
    {#if value.website && Object.values(value.website).length > 0}
    <Group>        
        <Website value={value.website}></Website>
    </Group>
    {/if}
    <Group>
        <Protocol value={value.protocol}></Protocol>
    </Group>
    <Audit  label={"Audit Link for This Oracle"} />
</div>
