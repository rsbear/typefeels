<script lang="ts">
  export let segment: string;

  import Nav from "./Nav.svelte";
</script>

<div class="wrap">
  <div class="grid">
    <aside>
      <Nav {segment} />
    </aside>
    <main>
      <slot />
    </main>
  </div>
</div>

<style lang="postcss">
  .wrap {
    margin: 0 auto;
    max-width: 1060px;
  }
  .grid {
    display: grid;
    grid-template-columns: 180px 820px;
    grid-gap: 40px;
    margin: 4em auto;
  }
</style>
