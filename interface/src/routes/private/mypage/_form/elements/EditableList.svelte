<script>
 import {tick} from "svelte";
 export let items = [];
 export let initItem = {}

 let lockMap = {};


 

 /**
  * 
  * @param {string | Function} key 
  */
function _setLock(key){
    const name = typeof ket === 'string'? key : key.name;
    lockMap[name] = true;

    tick().then(function() {
        lockMap[name] = false;
    })
}
/**
 * 
 * @param {string | Function} key
 */
function _checkLock(key) {
    const _key = typeof key === 'string'? key : key.name;
    return lockMap[_key];


} 
function addItem(item) {
    if (_checkLock(addItem)) {
        return;

    }
    _setLock(addItem);
    items.push(item || initItem);
    items = items;
   

 }
 function createDeleteFunction(index) {
    const key = "delete_" + index;
    return function() {
        if(_checkLock(key) ){
            return

        }
        _setLock(key);
        items.splice(index, 1);
        items = items;
    }


 }
 function createUpdateFunction(index) {
    const key = "update_" + index;
    return function (item) {
        if (_checkLock(key)){
            return;
        }
        _setLock(key);
        items[index] = item;
        items = items;
    }
 }

</script>
{#each items as item, index}
    <slot name="each" index={index} item={item} updateFunction={createUpdateFunction(index)} deleteFunction={createDeleteFunction(index)} />
{:else}
    <slot name="noItem"/>    
{/each}
<slot name="addItem" addItem={addItem}/>
