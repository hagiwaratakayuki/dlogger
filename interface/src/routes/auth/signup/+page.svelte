<script>
	import { Col, Container, Row } from "sveltestrap";
    import BasicForm from "../_form/BasicForm.svelte";
    import {goto} from "$app/navigation"
    

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
         * @type {import('.svelte-kit/types/src/routes/api/auth/signup/$types').RouteId}
         */
        const url = '/api/auth/signup';
        const promise = fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        promise.then(function(response) {
            if (response.ok === true) {
                /**
                 * @type {import('.svelte-kit/types/src/routes/private/mypage/$types').RouteId}
                 */
                const myPage = '/private/mypage';  
                goto( myPage );
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
            <BasicForm 
                buttonMessage={'Sign Up'} 
                on:click={onClick}
                bind:screen_name = {user.screen_name}
                bind:password = {user.password}
                isLoading = {isLoading}
                wholeMessage = {wholeMessage}

            />
        </Col>
    </Row>
</Container>