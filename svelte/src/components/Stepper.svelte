<script lang="ts">
  export let titles: string[];
  export let handleIdx: Function;
  export let currentIdx: number;
</script>

<aside>
  <ul>
    {#each titles as title, i}
      {#if i !== 0}
        <div class="relative bar">
          <div class="h-px bg-cool-gray-600 w-full" />
        </div>
      {/if}
      <li
        class={currentIdx !== i ? 'text text-cool-gray-400' : 'text text-blue-100'}
        on:click={handleIdx(i)}
      >
        <ion-icon
          name={currentIdx !== i ? 'ellipse-outline' : 'checkmark-circle'}
          class={currentIdx !== i ? 'text-white' : 'text-blue-400'}
        />
        {title}
      </li>
    {/each}
  </ul>
</aside>

<style>
  aside {
    padding-bottom: 1em;
    margin-bottom: 2.5em;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    display: flex;
    align-items: center;
  }

  ion-icon {
    margin-right: 0.5em;
    visibility: inherit;
  }

  .text {
    font-weight: 500;
  }

  .bar {
    width: 40px;
  }
</style>
