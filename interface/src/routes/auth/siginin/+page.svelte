<script>
	import { Col, Container, Row } from "sveltestrap";
    import BasicForm from "../_form/BasicForm.svelte";
    import {goto} from "$app/navigation"
    import { MYPAGE } from "$lib/consts/route";

    let isLoading = false;
    let wholeMessage = ''; 


    /**
     *  @type {import('src/relay_types/user').PlainUser} 
     */
    const user = {
        screen_name: '',
        password: ''
    }

   function onClick() {
        isLoading = true;
        /**
         * @type {import('.svelte-kit/types/src/routes/api/auth/signin/$types').RouteId}
         */
        const url = '/api/auth/signin';
        const promise = fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        promise.then(function(response) {
            if (response.ok === true) {
                goto("/private/mypage")
                return
            }
            isLoading = false;
            if (response.status < 500) {
                wholeMessage = 'Your Password or Screen Name is Incorrect'                
            }
            else {
                wholeMessage = 'Sever Error'

            }

            
        }).catch(function() {
            wholeMessage = 'Server or Network Error'
        });

  
   }
   


</script>
<Container fluid>
    <Row class="justify-content-md-center">
        <Col md=4 class="bg-white mt-5 pt-4 border border-primary-subtle rounded">
            <p class="text-center">No Account? <a href='../signup'>Sign Up</a></p>
            <BasicForm 
                buttonMessage={"Sign In"} 
                on:click={onClick}
                bind:screen_name = {user.screen_name}
                bind:password = {user.password}
                isLoading = {isLoading}
                wholeMessage = {wholeMessage}
                bind:


            />
        </Col>
    </Row>
</Container>
