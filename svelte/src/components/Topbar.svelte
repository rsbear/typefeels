<script lang="ts">
  import PublishButton from "./PublishButton.svelte";
  import { writing } from "./../lib/writingStore";

  export let segment: string;
  function handleShow() {
    $writing.showPreview = !$writing.showPreview;
  }
</script>

<aside>
  <ul class="flex justify-end items-center px-20 py-4">
    {#if segment === 'write'}
      <li>
        <button type="button">
          <ion-icon
            name="information-outline"
            class="text-2xl text-gray-100 outline-none mr-4 focus:outline-none"
          /></button>
      </li>
      <li>
        <button type="button">
          <ion-icon
            name="glasses-outline"
            class="text-2xl text-gray-100 outline-none mr-4 focus:outline-none"
            on:click={handleShow}
          /></button>
      </li>
      <li>
        <button type="button">
          <ion-icon
            name="image-outline"
            class="text-2xl text-gray-100  mr-4 focus:outline-none"
          /></button>
      </li>
      <li>
        <PublishButton />
      </li>
    {:else}
      <li class="mr-6">
        <a href="/create/keyboard">
          <ion-icon name="rocket-outline" class="text-xl" />
        </a>
      </li>
      <li class="mr-6">
        <a href="/write">
          <ion-icon name="reader-outline" class="text-xl" />
        </a>
      </li>
    {/if}
    <li>
      <ion-icon name="person-circle-outline" class="text-2xl" />
    </li>
  </ul>
</aside>
