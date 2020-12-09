<script lang="ts">
  export let title: string;
</script>

<section class="border border-cool-gray-800">
  <h2 class="mb-2">{title}</h2>
  <slot />
</section>

<style>
  section {
    margin-bottom: 1.5em;
    padding: 0.825em 1.5em;
    border-radius: 4px;
  }
</style>
