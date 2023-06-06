<script>
	import Layout from "../../../routes/+layout.svelte";
	import Aggregation from "../../../routes/aggregation/[protocol]/[address]/_form/Aggregation.svelte";

  export let aggregation = {};
</script>
<Layout>
  <Aggregation aggregation={aggregation}></Aggregation>
</Layout>