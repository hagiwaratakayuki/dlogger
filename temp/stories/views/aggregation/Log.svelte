<script>
	import Layout from "../../../routes/+layout.svelte";
	import Log from "../../../routes/aggregation/[protocol]/[address]/_log/Side.svelte";

  export let logs = [];
</script>
<Layout>
  <Log logs={logs}></Log>
</Layout>