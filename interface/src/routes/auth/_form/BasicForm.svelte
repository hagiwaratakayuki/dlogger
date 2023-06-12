<script>
import { Form, FormGroup, Label, Input, Button, FormText, Spinner } from "sveltestrap";


export let id = '';
export let password = '';
export let buttonMessage = "Login";
export let passwordInfo = "";
export let nameInfo = "";
export let isLoading = false; 


</script>

<Form>
  <FormGroup floating>
    
    <Input type="text" id="id" bind:value={id} disabled={isLoading}/>
    <Label for="id">Account ID</Label>
    {#if nameInfo}<FormText>{nameInfo}</FormText>{/if}
  </FormGroup>

  <FormGroup floating>
      <Input type="password" id="password" name="password" bind:value={password} disabled={isLoading}/>
      <Label for="password">Password</Label>
      {#if passwordInfo}<FormText>{passwordInfo}</FormText>{/if}
  </FormGroup>
  <FormGroup class="text-center">
    <Button type="button" color={"primary"} disabled={isLoading} class="w-25">{#if isLoading}<Spinner size={"sm"}></Spinner>{/if}{buttonMessage}</Button>
  </FormGroup>  
</Form>