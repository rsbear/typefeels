<script lang="ts">
  export let content: string;
  import marked from "marked";
</script>

<div class="content prose mx-auto">
  {@html marked(content)}
</div>

<style>
  .content :global(h1) {
    font-size: 2.5em;
    font-weight: 500;
    color: white;
  }
  .content :global(h2) {
    font-size: 2em;
    font-weight: 500;
    color: white;
  }
  .content :global(h3) {
    font-size: 1.825em;
    font-weight: 500;
    color: white;
  }
  .content :global(h4) {
    font-size: 1.5em;
    font-weight: 500;
    color: white;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
    color: white;
  }

  .content :global(pre) {
    background-color: transparent;
    padding: 0;
    color: white;
  }

  .content :global(p) {
    font-size: 1.25em;
    line-height: 1.75em;
    height: auto;
    color: white;
  }

  .content :global(code) {
    border-radius: 4px;
    background-color: rgba(90, 90, 90, 0.2);
    padding: 10px 18px;
    margin-top: 20px;
    color: white;
  }

  .content :global(ul) {
    list-style-type: disc;
    margin-left: 20px;
    color: white;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
    color: white;
  }
</style>
