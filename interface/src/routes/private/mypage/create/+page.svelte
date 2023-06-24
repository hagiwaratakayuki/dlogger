<script>
	import { Col, Container, Row } from "sveltestrap";
    import Aggregation from "../_form/Aggregation.svelte";
    
	import HeadeNavi from "$lib/elements/HeadeNavi.svelte";

	import { goto } from "$app/navigation";
   
    /**
     * @type {any}
     */
    let value = {};
    /**
     * @type {import("../../../api/aggregation/private/$types").RouteId}
     * */
    const apiUrl = '/api/aggregation/private'
    /**
     * @type {import("../$types").RouteId}
     */
    const mypage = '/private/mypage';
    let isFail = false;
    function onSave() {
        const req = {
            method: 'PUT',
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const prom = fetch(apiUrl, req);
        prom.then(function(res) {
            if(res.status === 200) {
                goto(mypage);
                
            }
            else if (300 <= res.status  & res.status < 500) {
                goto('/');
            }
            else {
                isFail = true;
            }

        })
    
    }
</script>
<HeadeNavi></HeadeNavi>
<Container fluid>
    <Row class="justify-content-md-center">
        <Col md=10 class="bg-white mt-5 pt-4 border border-primary-subtle rounded">
        <Aggregation bind:value={value} bind:isFail={isFail} on:save={onSave}></Aggregation>
        </Col>
    </Row>
</Container>