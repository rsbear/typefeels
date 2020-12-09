<script lang="ts">
  export let title: string;
  export let date: string;
  export let user: string;
  export let content: string;
</script>

<div class="wrapper">
  <h1 class="text-4xl font-bold">{title}</h1>
  <div class="flex items-center mb-12">
    <h4 class="text-sm text-green-200 mr-2">{user}</h4>
    <h4 class="text-sm text-gray-200">{date}</h4>
  </div>
  <div class="content">
    {@html content}
  </div>
</div>

<style>
  .wrapper {
    max-width: 65ch;
    margin: 0 auto;
  }
  .content :global(h1) {
    font-size: 2.5em;
    font-weight: 500;
  }
  .content :global(h2) {
    font-size: 2em;
    font-weight: 500;
  }
  .content :global(h3) {
    font-size: 1.825em;
    font-weight: 500;
  }
  .content :global(h4) {
    font-size: 1.5em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(p) {
    font-size: 1.25em;
    line-height: 1.75em;
    height: auto;
  }

  .content :global(code) {
    border-radius: 4px;
    background-color: rgba(90, 90, 90, 0.2);
    padding: 10px 18px;
    margin-top: 20px;
  }

  .content :global(ul) {
    list-style-type: disc;
    margin-left: 20px;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>
