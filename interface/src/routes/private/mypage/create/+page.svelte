<script>
	import { Col, Container, Row } from "sveltestrap";
    import Aggregation from "../_form/Aggregation.svelte";
    
	import HeadeNavi from "$lib/elements/HeadeNavi.svelte";


   
</script>
<HeadeNavi></HeadeNavi>
<Container fluid>
    <Row class="justify-content-md-center">
        <Col md=10 class="bg-white mt-5 pt-4 border border-primary-subtle rounded">
        <Aggregation></Aggregation>
        </Col>
    </Row>
</Container>