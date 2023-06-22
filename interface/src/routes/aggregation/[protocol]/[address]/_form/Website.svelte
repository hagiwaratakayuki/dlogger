<script>
	
import Group from "../../../../../elements/Group.svelte";
	import HorizontalHeader from "../../../../../elements/HorizontalHeader.svelte";


/**
 * @type {import("src/relay_types/aggregation").WebSite}
 */
export let value = {url:''};

</script>
<Group>
    <HorizontalHeader>Website</HorizontalHeader><span><a href={value.url} target="_blank">{value.url}</a></span>
</Group>
