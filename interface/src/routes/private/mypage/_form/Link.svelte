<script>
    import { Input, Label, FormGroup  } from "sveltestrap";
    import WebSite from "./Website.svelte";
    import Protocol from "./Protocol.svelte";
	import Website from "./Website.svelte";
    /**
     * @typedef {import("../../../../relay_types/aggregation").Link} Link
     * @typedef {import("../../../../relay_types/aggregation").WebSite} WebSite
     * @typedef {import("../../../../relay_types/aggregation").ProtocolAddress} ProtocolAddress
    */
    /**
     * @type {Link}
     */
    export let link = {}
    export let key = "";
    /**
     * @type {WebSite}
     */
    let _website = {linkType:'website', url:''};
    /**
     * @type {ProtocolAddress}
    */
   let _protocolAddress = {linkType:'protocolAdress', protocol:'', address:''};
    let linkType = ''; 
    $:{
        if (!link) {
            link = {};
        }
        if (!link.linkType) {
            link.linkType = 'protocolAddress';

        }
        if (linkType === link.linkType) {
            
            if (link.linkType === 'protocolAddress') {
                _protocolAddress =  link;

            }
            if (link.linkType === 'website') {
                _website = link;

            }
  
        
        }
        else{ 

            linkType = link.linkType;
            if (link.linkType === 'protocolAddress') {
                link =  _protocolAddress

            }
            if (link.linkType === 'website') {
                link = _website

            }
        }
    
    }

    function createId(key) {
        return key + "_link"; 
    }
</script>
<FormGroup floating>    
    <Input id={createId(key)} bind:value={link.linkType} type="select">
        <option value="protocolAddress">Protocol Adress</option>
        <option value="website">Website</option>
    </Input>
    <Label for={createId(key)}>Link type</Label>
</FormGroup>
{#if link.linkType === 'protocolAddress'}
    <Protocol key={key} bind:value={link}/>
{/if}
{#if link.linkType === 'website'}
    <Website key={key} bind:value={link}/>
{/if}


