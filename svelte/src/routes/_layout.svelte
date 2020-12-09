<script lang="ts">
  export let segment: string;

  import { initClient } from "@urql/svelte";
  import Topbar from "../components/Topbar.svelte";

  initClient({
    url: "/graphql",
  });
</script>

<Topbar {segment} />
<main>
  <slot {segment} />
</main>

<style>
  /* main {
    max-width: 56em;
    margin: 0 auto;
  } */
</style>
