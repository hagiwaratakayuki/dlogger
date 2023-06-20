<script>
	import { Col, Container, Row } from "sveltestrap";
import BasicForm from "../_form/BasicForm.svelte";
/**
 * @typedef {import('../../../relay_types/user').User} User
 * @type {[]}
 */
let user = {name:'', password:''}

   
</script>
<Container fluid>
    <Row class="justify-content-md-center">
        <Col md=4 class="bg-white mt-5 pt-4 border border-primary-subtle rounded">
        <BasicForm bind:password={user.password} bind:id={user.id} buttonMessage={"Signup"}></BasicForm>
        </Col>
    </Row>
</Container>
