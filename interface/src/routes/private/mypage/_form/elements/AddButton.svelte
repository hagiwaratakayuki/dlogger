<script>
	import { Button, FormGroup } from "sveltestrap";
    export let message;


</script>
<FormGroup>
    <Button type="button"   class="w-100 fw-bold" on:click>{message}</Button>
    <slot></slot>
</FormGroup>
