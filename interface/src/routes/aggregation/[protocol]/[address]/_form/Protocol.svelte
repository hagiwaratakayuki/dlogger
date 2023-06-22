<script>
	import FlatHeader3 from "../../../../../elements/FlatHeader3.svelte";
    import Group from "../../../../../elements/Group.svelte";
	import HorizontalHeader from "../../../../../elements/HorizontalHeader.svelte";


/**
 * @type {import("src/relay_types/aggregation.d.ts").Protocol}
 */
export let value = {name:'', address:''};
export let isIndent = false 

</script>

<Group isIndent={isIndent}>
    <HorizontalHeader>Protocol Name</HorizontalHeader><span>{value.name}</span>
</Group>
<Group isIndent={isIndent}>
    <HorizontalHeader>Address in Protocol</HorizontalHeader><span>{value.address}</span>      
</Group>