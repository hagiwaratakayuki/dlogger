<script>
	import { Col, Container, Row } from "sveltestrap";
import BasicForm from "../_form/BasicForm.svelte";

    /**
     *  @type {import('src/relay_types/user').PlainUser} 
     */
    const user = {
        screen_name: '',
        password: ''
    }

   function onClick() {

   }
</script>
<Container fluid>
    <Row class="justify-content-md-center">
        <Col md=4 class="bg-white mt-5 pt-4 border border-primary-subtle rounded">
            <BasicForm 
                buttonMessage={"Login"} 
                on:click={onClick}
                bind:screen_name = {user.screen_name}
                bind:password = {user.password}

            />
        </Col>
    </Row>
</Container>
