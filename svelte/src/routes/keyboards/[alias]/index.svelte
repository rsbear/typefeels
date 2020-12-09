<script context="module" lang="ts">
  export async function preload({ params }) {
    return { params };
  }
</script>

<script>
  export let params;

  import { operationStore, query } from "@urql/svelte";
  import JoinSection from "../../../components/KeyboardPage/JoinSection.svelte";
  import TitleBlock from "../../../components/KeyboardPage/TitleBlock.svelte";

  import Layout from "../../../components/Layout.svelte";
  import gql from "../../../gql";
  import About from "../../../components/KeyboardPage/About.svelte";
  import { setDynamicNav, dynamicNav } from "../../../lib/navStore";

  const keyboard = operationStore(gql.itemKeyboard, { alias: params.alias });
  query(keyboard);

  keyboard.subscribe((x) => {
    const obj = {
      alias: x.data && x.data.getKeyboard.alias,
      contentType: "keyboards",
      name: x.data && x.data.getKeyboard.name,
    };
    setDynamicNav({ ...obj });
  });
</script>

<Layout>
  <section>
    {#if $keyboard.fetching}
      Loading...
    {:else if $keyboard.error}
      Oh no!
      {$keyboard.error.message}
    {:else if !$keyboard.data}
      No data
    {:else}
      <div class="divide-y divide-gray-700">
        <section class="pb-10">
          <TitleBlock
            angle={$keyboard.data.getKeyboard.angle}
            brand={$keyboard.data.getKeyboard.brand}
            connection={$keyboard.data.getKeyboard.connection}
            firmware={$keyboard.data.getKeyboard.firmware}
            mount={$keyboard.data.getKeyboard.mount}
            name={$keyboard.data.getKeyboard.name}
            pcb={$keyboard.data.getKeyboard.pcb}
            size={$keyboard.data.getKeyboard.size}
            stage={$keyboard.data.getKeyboard.stage}
            avatar={$keyboard.data.getKeyboard.images_thumbs[0]}
          />
        </section>
        <section class="py-10">
          <JoinSection />
        </section>
        <section class="py-10">
          <About content={$keyboard.data.getKeyboard.about} />
        </section>
        <section class="py-10">
          {#each $keyboard.data.getKeyboard.images_posters as poster}
            <img src={poster} alt="yes" class="mb-4" />
          {/each}
        </section>
      </div>
    {/if}
  </section>
</Layout>
