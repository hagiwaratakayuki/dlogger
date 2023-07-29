<script>
	import { Form, FormGroup, Input, Label } from 'sveltestrap';
    export let name
    export let url
</script>

<Form>
	<FormGroup floating>
         <Input bind:value={name} id="name"/>
		<Label for="name" >Organaization Name</Label>       
	</FormGroup>
    <FormGroup floating>
        <Input bind:value={url} id="url"/>
		<Label for="url" >Organaization URL</Label>       
	</FormGroup>
       
	</FormGroup>
</Form>
