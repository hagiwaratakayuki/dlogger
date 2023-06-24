<script>
    import { FormGroup, Button, Label, Input, FormText } from "sveltestrap";
    import Audit from "./Audit.svelte";
    import Protocol from "./Protocol.svelte";
    import Website from "./Website.svelte";
    import Oracle from "./Oracle.svelte";
	import AddButton from "./elements/AddButton.svelte";

	import NoItem from "./elements/NoItem.svelte";
	import DeleteButton from "./elements/DeleteButton.svelte";
	import FlatHeader3 from "../../../../elements/FlatHeader3.svelte";
	import Unit from "./elements/Unit.svelte";
    /**
     * @typedef {import("src/relay_types/aggregation").Contract} ContractType
     * @typedef {Partial<import("$lib/util_types").KeysMap<ContractType>>} ContractInits 
     */

     /**
      * @type {ContractInits}
      */
    const defaultValue = {
        name: "", 
        protocol: {}, 
        website:{},
        audit:[],
        oracles:[]

    }
    /**
     * @type {ContractInits}
     */
    export let value = Object.assign({}, defaultValue);
    export let key = "";
    export let contractAlias = "Contract";
    
    let _value = value;

  
    $: {
       
           
        
        if (_value != value) {
            
            
            _value = value = Object.assign({}, defaultValue, value || {});
           

        }
        
     
        

    }
    function createId() {
        let _key; 
        if (key) {
            _key = key + '_';

        }
        return _key + 'contract';

    }
    function addOracle() {
        value.oracles.push({})
        value.oracles = value.oracles;
    }
    function createRemoveOracle(index) {
        return function() {
            value.oracles.splice(index,1);
            value.oracles = value.oracles;
        }

    }
    

  
    
</script>
<FormGroup floating>
    <Input id={createId() + '_name'} bind:value={value.name} placeholder={"Enter " + contractAlias + "'s name"}/>
    <Label for={createId() + '_name' }>Contarct's Name</Label>
    
</FormGroup>
<div>
    <FlatHeader3>Website(Optional)</FlatHeader3>
    <Website key={createId() + '_website'} bind:value={value.website}></Website>
</div>
<div>
    <FlatHeader3>Protocol</FlatHeader3>
    <Protocol key={createId() + '_protocol'} bind:value={value.protocol}></Protocol>
</div>
<Audit key={createId() + '_audit'} label={"Audit Link for This " + contractAlias} bind:values={value.audit}/>
<div>
    <FlatHeader3>Oracles for This {contractAlias}</FlatHeader3>
    <div class="ps-3">
        {#each value.oracles as oracle, index}
            <Unit>
                <Oracle key={createId() + '_oracle_' + index} bind:value={oracle}></Oracle>    
                <DeleteButton message={"Remove This Oracle"} on:click={createRemoveOracle(index)}></DeleteButton>
            </Unit>
    
        {:else}
        <NoItem message="No Oracle"></NoItem>
        {/each}
        <AddButton on:click={addOracle} message={"Add Oracle"}></AddButton>
    </div>
    
</div>

