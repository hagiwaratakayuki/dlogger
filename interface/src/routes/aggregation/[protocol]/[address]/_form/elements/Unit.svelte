<script>
 export let isIndent = false;
 export let isLast = false; 
 const basicClass = " mb-4"
 let classText = "";
 $:{
    let classList = [basicClass];
    
    if (isIndent === true) {
        classList.push("ps-2");

    }
    if (isLast === false) {
        classList.push("border-bottom")
        
    }
    classText = classList.join(" ");
 }  
</script>
<div class={classText}>
    <slot/>

</div>