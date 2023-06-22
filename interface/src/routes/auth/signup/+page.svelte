<script>
	import { Col, Container, Row } from "sveltestrap";
import BasicForm from "../_form/BasicForm.svelte";
/**
 * @typedef {import('src/relay_types/user').User} User
 * @type {[]}
 */
let user = {screen_name:'', password:''}

   
</script>
<Container fluid>
    <Row class="justify-content-md-center">
        <Col md=4 class="bg-white mt-5 pt-4 border border-primary-subtle rounded">
        <BasicForm bind:password={user.password} bind:screen_name={user.screen_name} buttonMessage={"Signup"}></BasicForm>
        </Col>
    </Row>
</Container>
