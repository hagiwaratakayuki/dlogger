<script>
    import { tick } from "svelte";
    import { Input, Label, FormText } from "sveltestrap";
    import Contract from "./Contract.svelte";
    import AddButton from "./elements/AddButton.svelte";
    import DeleteButton from "./elements/DeleteButton.svelte";
    import NoItem from "./elements/NoItem.svelte";
	import Unit from "./elements/Unit.svelte";
	
    /**
     * @typedef {import("../../../../relay_types").Contract} Contarct
     * @type {Contarct[]}
     */
    export let contracts = [];
    
    let senderIndex = -1;
    /**
     * @type {boolean[]}
     */
    let senders = [];

    $:{
       
            let _senderIndex = senderIndex;
            let index = 0;
            const isNotCheck = contracts.filter(function(contract) {
                return contract.isSender;

            }).length === 0;  
            if (isNotCheck === true) {
                senderIndex = -1;

            }
            else {
                for (const contract of contracts) {
                    if (index !== senderIndex && contract.isSender === true) {
                        senderIndex = index;
                        break;

                    }
                    index++;
                
                }
                if (senderIndex !==_senderIndex && _senderIndex !== -1) {
                    contracts[_senderIndex].isSender = false;
                    contracts[_senderIndex] = contracts[_senderIndex];

                }     
            }
            

        
       
    }

    function addContract(){
        /**
         * @type {Contarct}
         */
        const push = { 
            isSender:contracts.length === 0
            
        }
        contracts.push(push);
        
        
      
        contracts = contracts;

    }
    function createDeleteFunction(index){
        return function() {
            contracts.splice(index)
            contracts = contracts;
            if (contracts.length === 0) {
                senderIndex = -1;
            }

        }
        

    }
    
</script>
<div class="ps-3">
        {#each contracts as contract, index}
        <Unit>
            <Input  type="checkbox" bind:checked={contract.isSender} label={"Set this contract as sender"}/>
            <Contract key= {'contracts_' + index} bind:value={contract}></Contract>
            <DeleteButton disabled={senderIndex === index} message={"Remove this contract"} on:click={createDeleteFunction(index)}>
            {#if contract.isSender === true}
                <FormText class="fw-bold color-text-danger">this contract is sender.</FormText>
            {/if}
            </DeleteButton>  
        </Unit>
      
        {:else}
        <NoItem message="No Contract"></NoItem>
        {/each}
    
</div>
<AddButton on:click={addContract} message={"Add Contract"}></AddButton>
