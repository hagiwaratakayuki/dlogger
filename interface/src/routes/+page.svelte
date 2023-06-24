<script>
	import { Button } from "sveltestrap";

</script>
<div class="ws-100 text-center my-5">
    <h1>Wellcom to D Logger  </h1>
    <a  id="signup" class="ws-50 p-5 mb-5 d-block" href="/auth/signup">Sign Up</a>
    <a href="/auth/signin" class="ws-50 p-5 mb-5 d-block">Sign In</a>
</div>

<style>
    #signup {
        background-color: var(--bs-indigo);
        color: white;
        font-size: 2rem;
        font-weight: bold;
        border-radius: 5px;

    }
</style>