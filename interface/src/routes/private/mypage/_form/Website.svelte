<script>
import { Input, FormGroup, Label } from "sveltestrap";
/**
 * @type {Partial<import("../../../../relay_types/aggregation.d.ts").WebSite> | null}
 */
export let value = {url:''};
export let key = '';
$: if(!value) {
    value = {url: ''};

}
function createId(key) {
    return key + '_website_url';
}
</script>



<FormGroup floating>
    <Input id={createId(key)}  bind:value={value.url} placeholder="Enter a URL" />
    <Label for={createId(key)}>URL</Label>   
</FormGroup>
