<script>
	import { Form, FormGroup, Input, Label, Button } from "sveltestrap";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

	import Contract from "./Contract.svelte";
	
	import NoItem from "./elements/NoItem.svelte";
	import DeleteButton from "./elements/DeleteButton.svelte";
	
	import AddButton from "./elements/AddButton.svelte";
	import FlatHeader2 from "../../../../elements/FlatHeader2.svelte";
	import FlathHader1 from "../../../../elements/FlathHader1.svelte";
	import Protocol from "./Protocol.svelte";
    import Contracts from "./Contracts.svelte";
	import Unit from "./elements/Unit.svelte";
	import Audit from "./Audit.svelte";
	import MessageModal from "$lib/elements/modal/MessageModal.svelte";
	
	
    /**
     * 
     * @typedef  {import("src/relay_types/aggregation.d.ts").Aggregation} Aggregation
     * @typedef {import("$lib/util_types").KeysMap<Aggregation>} AggregationKeys
     */
    
      /**
       * @type {AggregationKeys}
       */
      const defaultValue = {description:'', audit:[], contracts:[], website:{}, logger:{}, origin:{}, title:'', protocol:''} 
    /**
     * @type {AggregationKeys}
     */

    export let value = Object.assign({}, defaultValue);
    export let isFail = false;
    export let message = "Something Incolect";
    let _value = value;
    let _contracts = [];
    $:{
        if(value != _value){
        
      
            value = _value = Object.assign({},defaultValue, value || {});
        }
        
        
    }
    function triggerSave() {
        dispatch('save');

    }
    
   



</script>
<Form>
    <FlatHeader2>Title</FlatHeader2>
    <FormGroup floating>
        <Input type="text" bind:value={value.title} id="title" data-testid='title'/>
        <Label for="description" class="mb-4">Title of This Aggrecation</Label>
    </FormGroup>
    <FlatHeader2>Description</FlatHeader2>    
    <FormGroup floating>        
        <Input type="textarea" bind:value={value.description} id="about" data-testid/>
        <Label for="about" class="mb-4">Description of This Aggrecation</Label>
    </FormGroup>
    <FlatHeader2>Origin Adress</FlatHeader2>
    <Unit isIndent={true}>
        <Protocol bind:value={value.origin}></Protocol>   
    </Unit> 
  

    <Audit  label={"Audit Link for This Aggregation"} key={'audit'} headerLevel={2} bind:values={value.audit}/>
    <FlatHeader2>Logger</FlatHeader2>
    <Unit isIndent={true}>
        <Contract contractAlias="Logger" key="logger" bind:value={value.logger}></Contract>
        

    </Unit>
    <FlatHeader2>Contracts</FlatHeader2>
    <Unit isIndent={true}>
        
        <Contracts bind:contracts={value.contracts}></Contracts>
        
    </Unit>
    <FormGroup>
        <Button data-testid='save' color="primary" size="lg" type="button"  class="w-100 fw-bold" on:click={triggerSave}>Save</Button>
    </FormGroup>
</Form>
<MessageModal message={message} bind:isOpen={isFail}></MessageModal>
