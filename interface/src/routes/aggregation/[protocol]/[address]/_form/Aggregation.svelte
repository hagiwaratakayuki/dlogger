<script>
	

    
    import Contract from "./Contract.svelte";
	
	import NoItem from "../_elements/NoItem.svelte";
		
	import FlatHeader2 from "../../../../../elements/FlatHeader2.svelte";
	import FlatHeader3 from "../../../../../elements/FlatHeader3.svelte";
    import Protocol from "./Protocol.svelte";
    import Contracts from "./Contracts.svelte";
	import Unit from "./elements/Unit.svelte";
	import Group from "../../../../../elements/Group.svelte";
	import Audit from "./Audit.svelte";
    /**
     * @type {import("src/relay_types/aggregation").Aggregation} 
     */
    export let aggregation = {};
   
    

</script>
<div>
    
    <FlatHeader2>Description</FlatHeader2>    
    <Group>
        <p>{aggregation.description}</p>        
    </Group>
    <FlatHeader2>Origin Adress</FlatHeader2>
    <Unit isIndent={true}>
        <Protocol value={aggregation.origin}></Protocol>   
    </Unit>
    <Audit checkLast={false} headerLevel={2} label={"Audit Link for This Aggregation"} values={aggregation.audit}></Audit>
    <FlatHeader2>Logger</FlatHeader2>
    <Unit isIndent={true}>
        <Contract contractAlias="Logger"  value={aggregation.logger}></Contract>
    </Unit>
    <FlatHeader2>Contracts</FlatHeader2>
    <Unit isIndent={true}>
        
        <Contracts bind:contracts={aggregation.contracts}></Contracts>
        
    </Unit>
   
</div>