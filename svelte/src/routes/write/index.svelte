<script lang="ts">
  import marked from "marked";
  import MarkdownRender from "../../components/MarkdownRender.svelte";
  import { writing } from "./../../lib/writingStore";
  import PublishModal from "../../components/WriteForm/PublishModal.svelte";
</script>

{#if !$writing.showPreview}
  <div class="writingWrapper">
    <textarea
      name="title"
      placeholder="Title.."
      class="title"
      bind:value={$writing.title}
    />
    <textarea name="content" class="content" bind:value={$writing.content} />
  </div>
{:else}
  <MarkdownRender
    title={$writing.title}
    content={marked($writing.content)}
    date={new Date().toString()}
    user="ross"
  />
{/if}

{#if $writing.showPublishModal}
  <PublishModal />
{/if}

<style>
  .writingWrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 65ch;
    min-height: calc(100vh - 70px);
  }
  textarea.title {
    resize: none;
    font-size: 2em;
    background-color: transparent;
    border: 0;
    outline: 0;
    font-family: "Roboto Mono", monospace;
  }
  textarea.content {
    resize: none;
    min-height: 100%;
    min-height: calc(100vh - (70px + 96px));
    color: #e8e8e8;
    background-color: transparent;
    border: 0;
    outline: 0;
    font-family: "Roboto Mono", monospace;
  }

  .preview-img {
    width: 100%;
  }
</style>
