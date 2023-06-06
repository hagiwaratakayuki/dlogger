<script>
    import { FormGroup, Button, Label, Input } from "sveltestrap";
    import Audit from "./Audit.svelte";
    import Protocol from "./Protocol.svelte";
    import Website from "./Website.svelte";
	import FlatHeader3 from "../../../../elements/FlatHeader3.svelte";
    /**
     * @type {import("../../../../relay_types/aggregation").Oracle}
     */
    export let value = {};
    export let key = "";
    
    let _value = {};
   
    $: {
        if (value != _value) {
            value = _value = Object.assign({
                name:"", 
                protocol:{
                    protocol:"", 
                    address:""
                }, 
                website:{
                    url:""
                }
            }, value || {} )
        }
        

    }
    function createKey() {
        let _key; 
        if (key) {
            _key = key + '_';

        }
        return _key + 'oracle';

    }

  
    
</script>
<div role="article">
    <FormGroup floating>
        <Input id={createKey() + '_name'} bind:value={value.name} placeholder="Enter oracle's name"/>
        <Label for={createKey() + '_name' }>Oracle's Name</Label>
    </FormGroup>
    <FlatHeader3>Website of This Oracle</FlatHeader3>
    <Website key={createKey() + '_website'} bind:value={value.website}></Website>
    <FlatHeader3>Protocol of This Oracle</FlatHeader3>
    <Protocol key={createKey() + '_protocol'} bind:value={value.protocol}></Protocol>
    <Audit  label={"Audit Link for This Oracle"} key={createKey() + '_audit'} bind:link={value.audit}/>
</div>