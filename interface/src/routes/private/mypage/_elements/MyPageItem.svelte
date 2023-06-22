<script>
	
import {Edit3Icon, Trash2Icon,  Link2Icon} from "svelte-feather-icons";
import { Button, Input,  FormCheck } from "sveltestrap";
import {createEventDispatcher, beforeUpdate} from 'svelte';
import './MypageItem.css';
import {wordWrapper} from './word_wrapper';


const dispatcher = createEventDispatcher();

/**
 * @type {import("src/relay_types/aggregation").Aggregation}
 */
export let aggregation = {};

export let deleteFunction = function() {};

let checked = false;


function _deleteFunction() {
    const message = 'Delete "' + wordWrapper(aggregation.description) + '"?' 
    if (!window.confirm(message)) {
        return;
    }
    deleteFunction();
}

beforeUpdate(onChange);

function onChange() {    
  
    
        /**
         * @type {import('./check_message').Detail}
         */
        const detail = {checked, id:aggregation.id}
        /**
         * @type {import('./check_message').EventName}
         */
        const eventName = "changeState";
        dispatcher(eventName, detail);
    
    

}
</script>
<div class="d-flex mypage_item">
    <div class="w-75">
    
      <FormCheck 
        id={"mypage_item_" + aggregation.id} 
        color="danger" 
        bind:checked={checked} 
        label={wordWrapper(aggregation.description)} 
        class="border-dark"
    />
        
     
                
    </div>
    <div class="w-25 text-center border-start border-primary-subtle ps-4">
        <a title={"jump to  " + wordWrapper(aggregation.description)} href={"/aggregation/" + aggregation.protocol || 'mongodb' + '/'  + aggregation.address || aggregation.id } ><Link2Icon class="me-2 icon" /></a>
        <a href={"/private/mypage/edit/" + aggregation.id} title="test"><Edit3Icon class="text-success me-2 icon"/></a>
       <button type="button" class="bg-body border-0" on:click={_deleteFunction} ><Trash2Icon class="text-danger icon" /></button>         
    </div>
</div>
