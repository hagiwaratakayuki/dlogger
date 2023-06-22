<script>
   
    import WebSite from "./Website.svelte";
    import Protocol from "./Protocol.svelte";
	import Website from "./Website.svelte";
	import FlatHeader3 from "../../../../../elements/FlatHeader3.svelte";
	import Group from "../../../../../elements/Group.svelte";
    /**
     * @typedef {import("src/relay_types/aggregation").Link} Link
     * @typedef {import("src/relay_types/aggregation").WebSite} WebSite
     * @typedef {import("src/relay_types/aggregation").ProtocolAddress} ProtocolAddress
    */
    /**
     * @type {Link}
     */
    export let link = {}
    

</script>
{#if link.linkType === 'protocolAddress'}
    <Protocol  value={link}/>
{/if}
{#if link.linkType === 'website'}
    <Website  value={link}/>
{/if}


