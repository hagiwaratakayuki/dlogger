<script>
	import { Col, Container, Row } from "sveltestrap";
    import { Edit3Icon } from "svelte-feather-icons";



</script>

<div class="container-fluid" id="header">
    <Row class="h-100">
        <Col md=4 class="h-100"><div id="sitetitle" class="text-white fw-bold fst-italic"><Edit3Icon/><div class="logo">ogger</div></div></Col>
    </Row>
    
</div>
<style>
    #header {
        height: 64px;
        background-color: var(--bs-indigo);
       
        max-width: 100dvw;
    }
    #sitetitle {
        height: 100%;
        padding-top: 20px;
    }
    .logo {
        height: 24px;
        display: inline-block;
        vertical-align: bottom;
    }
   
</style>



