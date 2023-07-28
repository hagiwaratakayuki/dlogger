<script>
	import { Button } from 'sveltestrap';
</script>

<div class="ws-100 text-center py-5">
	<h1 class="mt-5">Wellcome to D Logger</h1>
	<div class="text-center">
		<a id="signup" class="ws-50 p-3 mt-5 d-inline-block" href="/auth/signup">Sign Up</a>
		<a href="/auth/signin" class="ws-50 p-5 mb-5 d-block">Sign In</a>
	</div>
</div>

<style>
	#signup {
		background-color: var(--bs-indigo);
		color: white;
		font-size: 2rem;
		font-weight: bold;
		border-radius: 5px;
		width: 50%;
	}
</style>
