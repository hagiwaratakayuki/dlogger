<script>
	import { Button, FormGroup } from "sveltestrap";
    export let message = '';
    export let disabled = false;


</script>
<FormGroup>
    <Button disabled={disabled} type="button" outline size="sm" color="danger" class="w-100" on:click>{message}</Button>
    <slot></slot>
</FormGroup>
