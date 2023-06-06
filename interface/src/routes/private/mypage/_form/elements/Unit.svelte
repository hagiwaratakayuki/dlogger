<script>
 export let isIndent = false
 const basicClass = "border-bottom mb-4"
 let classText = "";
 $:{

    classText = basicClass;
    if (isIndent === true) {
        classText += " ps-2";

    }
 }  
</script>
<div class={classText}>
    <slot/>

</div>