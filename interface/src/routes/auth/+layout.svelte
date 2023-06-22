<script>
 
    import { LOGIN } from "$lib/consts/cookie";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    function checkLogin () {
        const cookies = Object.fromEntries(( document?.cookie || "" ).split(";").map(function(r) {
            return r.trim().split('=');
        }))
        if (LOGIN in cookies) {
            /**
             * @type {import('.svelte-kit/types/src/routes/private/mypage/$types').RouteId}
            */
            const MyPage = '/private/mypage';
            goto( MyPage )

        }
    }
    checkLogin();
    onMount(checkLogin);

</script>
<slot />
