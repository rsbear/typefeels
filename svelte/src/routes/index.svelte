<script>
  import Layout from "./../components/Layout.svelte";

  import { query, operationStore } from "@urql/svelte";
  import gql from "../gql";
  import ArticlesHome from "../components/ArticlesItems/ArticlesHome.svelte";
  import KeyboardItem from "../components/KeyboardItem.svelte";

  const keyboards = operationStore(gql.listKeyboards);
  query(keyboards);
  console.log($keyboards);
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<Layout>
  <ArticlesHome />
  <section>
    {#if $keyboards.fetching}
      Loading...
    {:else if $keyboards.error}
      Oh no!
      {$keyboards.error.message}
    {:else if !$keyboards.data}
      No data
    {:else}
      <div class="flex items-end mt-8 mb-1">
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

<!-- </Layout> -->
<style>
</style>
