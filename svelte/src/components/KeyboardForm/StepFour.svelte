<script lang="ts">
  export let handleIdx: Function;

  import marked from "marked";
  import BottomStepper from "./BottomStepper.svelte";
  import { keyboard } from "./../../lib/keyboardForm";

  let showPreview = false;
</script>

{#if !showPreview}
  <div class="writingWrapper">
    <textarea name="content" class="content" bind:value={$keyboard.about} />
  </div>
{:else}
  <div>
    <div>
      {@html marked($keyboard.about)}
    </div>
  </div>
{/if}

<BottomStepper>
  <button type="button" class="btn mr-2" on:click={handleIdx(2)}>
    <span class="flex items-center">
      <ion-icon name="arrow-back" class=" text-white pr-2" />
      Previous
    </span>
  </button>
  <button
    type="button"
    class="select-btn flex items-center"
    on:click={handleIdx(4)}
  >
    Next
  </button>
</BottomStepper>

<style>
  .writingWrapper {
    display: flex;
    /* flex-direction: column; */
    margin: 0 auto;
    max-width: 65ch;
    min-height: calc(100vh - 300px);
  }
  textarea.content {
    resize: none;
    width: 100%;
    height: calc(100vh - 300px);
    color: #e8e8e8;
    background-color: transparent;
    border: 0;
    outline: 0;
    font-family: "Roboto Mono", monospace;
  }
</style>
