<script>
    import "./_elements/Mypage.css";
    import {Button, Col, Container, ListGroup, ListGroupItem, Row} from "sveltestrap";
    import {onMount} from "svelte";
  import { goto}  from '$app/navigation';
    import {Trash2Icon, Edit3Icon} from 'svelte-feather-icons'
	import EditableList from "./_form/elements/EditableList.svelte";
	import MyPageItem from "./_elements/MyPageItem.svelte";
    import { wordWrapper } from "./_elements/word_wrapper";
	import HeadeNavi from "$lib/elements/HeadeNavi.svelte";

    /**
     * @type {import("../../../relay_types/aggregation").AggregationHeader[]}
     */
    export let aggregations = [];
    let deleteIds = {} 


    onMount(function() {
        if (aggregations.length === 0) {
            callGetApi()

        }

    });
    let isMultideleteDisabled = true
    $:{
        isMultideleteDisabled = (aggregations.length || 0) === 0 || Object.values(deleteIds).reduce(function(prev, current){
            return prev || current;
        }, false) === false;
    }
    function callGetApi() {
        deleteIds = {};
        aggregations =  [{description:"test", id:"test"},{description:"test2", id:"test2"},{description:"test3", id:"test3"}];

    }
    /**
     * 
     * @param {CustomEvent}event
     */
    function checkDeleteState (event) {
        /**
         * @type {import('./_elements/check_message').Detail}
         */
        const detail = event.detail
      
      
        deleteIds[detail.id] = detail.checked;
        deleteIds = deleteIds;

    }

    function deleteMullti() {
        const message = aggregations.filter(function(aggregation) {
            return deleteIds[aggregation.id] === true; 
        }).map(function(aggregation){
            return wordWrapper(aggregation.description) ;

        }).join('\r\n');
        window.confirm('Delete\r\n' + message);

    }
    function moveToCreate() {
        goto('/private/mypage/create');
    }
    
    
</script>
<HeadeNavi></HeadeNavi> 
<Container fluid id="mypage">
    <Row class="justify-content-center">
        <Col md="8" class="mt-5">
            <div class="mb-4 control d-flex w-100">
                <div class="w-75">
                    <Button color="danger" type="button" class="border border-danger-subtle" disabled={isMultideleteDisabled} on:click={deleteMullti}><Trash2Icon class="me-2"/><span class="align-middle">Delete checked Aggregation</span></Button>
                </div>
                <div class="w-25 text-center">
                    <Button  color="secondary" class="create" href="/private/mypage/create"><Edit3Icon class="ms-0" /><span class="align-middle" >Add New Aggregation</span></Button>
                </div>                
            </div>
            <ListGroup>
                <EditableList bind:items={aggregations}>
                    <ListGroupItem slot="each" let:item={aggregation} let:deleteFunction>
                        <MyPageItem on:changeState={checkDeleteState} aggregation={aggregation} deleteFunction={deleteFunction}/>
                    </ListGroupItem>
                </EditableList>
            </ListGroup>
        </Col>
    </Row>
   
</Container>
