<script>
 import {tick} from "svelte";
 export let items = [];
 export let initItem = {}

 let _items = []
 let lock = false


 $:if (items != _items && lock === false) {
    items = _items = items || [];
}

function _setLock(){
    lock = true;

    tick().then(function() {
        lock = false;
    })
} 
function addItem() {

    items.push(initItem);
    items = items;

 }
 function createDeleteFunction(index) {
    return function() {
        items.splice(index, 1);
        items = items;
    }


 }
 function createUpdateFunction(index) {
    return function (_item) {
        if (lock === true) {
            return;
        }
        _setLock();
        items[index] = _item;
        items = items;
    }
 }

</script>
{#each items as item, index}
    <slot name="each" index={index} item={item} updateFunction={createUpdateFunction(index)} deleteFunction={createDeleteFunction} />
{:else}
    <slot name="noItem"/>    
{/each}
<slot name="addItem" addItem={addItem}/>
