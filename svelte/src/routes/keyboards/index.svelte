<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import KeyboardItem from "@/components/KeyboardItem.svelte";
  import { operationStore, query } from "@urql/svelte";
  import gql from "../../gql";

  const keyboards = operationStore(gql.listKeyboards);
  query(keyboards);
</script>

<Layout>
  <section>
    {#if $keyboards.fetching}
      Loading...
    {:else if $keyboards.error}
      Oh no!
      {$keyboards.error.message}
    {:else if !$keyboards.data}
      No data
    {:else}
      <div class="flex items-end mb-1">
        <a href="/keyboards">
          <h1 class="text-2xl">Keyboards</h1></a>
      </div>
      <div class="grid grid-cols-2 gap-3">
        {#each $keyboards.data.queryKeyboard as x}
          <KeyboardItem {x} />
        {/each}
      </div>
    {/if}
  </section>
</Layout>
