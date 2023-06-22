<script>
import { Form, FormGroup, Label, Input, Button, FormText, Spinner } from "sveltestrap";
import {beforeUpdate, afterUpdate, createEventDispatcher} from 'svelte';
const dipatch = createEventDispatcher();

export let screen_name = '';
export let password = '';
export let buttonMessage = "Login";
export let passwordInfo = "";
export let nameInfo = "";
export let isLoading = false;


afterUpdate(function() {
  
  dipatch('update')
})



</script>

<Form>
  <FormGroup floating>
    
    <Input type="text" id="screen_name" bind:value={screen_name} disabled={isLoading}/>
    <Label for="screen_name">Screen Name</Label>
    {#if nameInfo}<FormText>{nameInfo}</FormText>{/if}
  </FormGroup>

  <FormGroup floating>
      <Input type="password" id="password" name="password" bind:value={password} disabled={isLoading}/>
      <Label for="password">Password</Label>
      {#if passwordInfo}<FormText>{passwordInfo}</FormText>{/if}
  </FormGroup>
  <FormGroup class="text-center">
    <Button on:click type="button" color={"primary"} disabled={isLoading || !password  || !screen_name  } class="w-25">{#if isLoading}<Spinner size={"sm"}></Spinner>{/if}{buttonMessage}</Button>
  </FormGroup>  
</Form>