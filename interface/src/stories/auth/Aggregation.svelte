<script>
	import Layout from "../../routes/+layout.svelte";
	import Aggregation from "../../routes/private/mypage/_form/Aggregation.svelte";

  export let value = {};
</script>
<Layout>
  <Aggregation value={value}></Aggregation>
</Layout>