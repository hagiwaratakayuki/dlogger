<script>
    import "bootstrap/dist/css/bootstrap.min.css";
	
    /** @type {import('./$types').LayoutData} */
    //export let data;
</script>
<svelte:head>
  <title>D Logger</title>
</svelte:head>
<div id="global" class='en'>
    <slot />
</div>

<style>
    .en {
         font-family: 'Baskerville' ,'Baskerville Old Face', 'Garamond', 'Times New Roman', serif
    }
    #global {
        min-height: 100dvh;
        min-height: 100vh;
        /*width: 100dvw;*/
        /*width: 100vw;*/

        background-color: var(--bs-light);

    }
</style>
