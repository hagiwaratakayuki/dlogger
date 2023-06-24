<script>
	import { Col, Container, Row } from "sveltestrap";
    import Aggregation from "../../_form/Aggregation.svelte";
    
	import HeadeNavi from "$lib/elements/HeadeNavi.svelte";
     /** @type {import('./$types').PageData} */
    export let data;
    /**
     * @type {import("$lib/util_types").KeysMap<import('src/relay_types/aggregation').Aggregation>}
     */
    let value = {
        title: '',
        audit: [],
        contracts: [],
        description: '',
        origin: {},
        logger: {},
        protocol: '',
        id: '',
        website: '',
        


    }
    function loadData() {
        /****
         * @type {import(".svelte-kit/types/src/routes/api/aggregation/private/crud/$types").RouteId}
         * */
        const baseUrl = '/api/aggregation/private/crud';  
        /**
         * @type {import("src/relay_types/api/basic").IdKey}
         */
        const idKey = 'id';
        const url = baseUrl + '?' + data
        const proms = fetch(url);

    }



   
</script>
<HeadeNavi></HeadeNavi>
<Container fluid>
    <Row class="justify-content-md-center">
        <Col md=10 class="bg-white mt-5 pt-4 border border-primary-subtle rounded">
        <Aggregation value={value}></Aggregation>
        </Col>
    </Row>
</Container>