<script>

  import { Col, Container, Row } from "sveltestrap";
  import Aggregation from "./_form/Aggregation.svelte";
  import Side from "./_log/Side.svelte";
	import HeadeNavi from "$lib/elements/HeadeNavi.svelte";
export let data


     

</script>
<HeadeNavi></HeadeNavi>
<Container fluid >
    <Row class="mt-5">
        <Col md=7 >
            <div class="bg-white border border-primary-subtle mx-2 p-2" >
                 <Aggregation aggregation={data.aggregation}></Aggregation>
            </div>
           
        </Col>
        <Col md=5>
            <div class="bg-white border border-primary-subtle mx-2 p-2" >
                <Side logs={data.logs}></Side>
            </div>
        </Col>                       
    </Row>    
</Container>
