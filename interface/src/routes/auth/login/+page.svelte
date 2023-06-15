<script>
	import { Col, Container, Row } from "sveltestrap";
import BasicForm from "../_form/BasicForm.svelte";

   
</script>
<Container fluid>
    <Row class="justify-content-md-center">
        <Col md=4 class="bg-white mt-5 pt-4 border border-primary-subtle rounded">
        <BasicForm buttonMessage={"Login"}></BasicForm>
        </Col>
    </Row>
</Container>
