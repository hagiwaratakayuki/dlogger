<script>
import { Input, FormGroup, Label } from "sveltestrap";
/**
 * @type {import("../../../../relay_types/aggregation.d.ts").ProtocolAddress}
 */
export let value = {name:'', address:''};
export let key = '';
$: if(!value) {
    value =  {name:'', address:''};

}
function createId(key) {
    return key + '_protocol'
}

</script>

<FormGroup floating>
    <Input id={createId(key) + '_name'} aria-required="true"  bind:value={value.name} placeholder="Enter a protocol name" />
    <Label for={createId(key) + '_name'}><span class="text-danger">*</span>Protocol Name</Label>   
</FormGroup>
<FormGroup floating>
    <Input id={createId(key) + '_address'} aria-required="true" bind:value={value.address} placeholder="Enter a addreess in protocol" />
    <Label for={createId(key) + '_address'}><span class="text-danger">*</span>Address in protocol</Label>   
</FormGroup>