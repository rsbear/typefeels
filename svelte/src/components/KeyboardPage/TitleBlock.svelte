<script lang="ts">
  export let angle: string;
  export let avatar: string;
  export let brand: string;
  export let connection: string;
  export let firmware: string;
  export let mount: string;
  export let name: string;
  export let pcb: string;
  export let size: string;
  export let stage: string;
</script>

<div class="wrapper grid grid-cols-2">
  <aside class="flex flex-col">
    <h1>{brand}</h1>
    <h1 class="text-6xl font-bold leading-none">{name}</h1>
    <!-- <span class="badge bg-blue-300 text-blue-600">interest check</span> -->
    <div class="flex my-10">
      <ul class="flex flex-col mr-8">
        <li class="inline-block">
          <ion-icon name="albums-outline" class="text-gray-100" />
          <span>{size}</span>
        </li>
        <li class="inline-block">
          <ion-icon name="layers-outline" class="text-gray-100" />
          <span>{mount}</span>
        </li>
        <li class="inline-block">
          <ion-icon name="resize-outline" class="text-gray-100" />
          <span>{angle}&#176;</span>
        </li>
      </ul>
      <ul class="flex flex-col">
        <li class="inline-block">
          <ion-icon name="flash-outline" class="text-gray-100" />
          <span>{connection}</span>
        </li>
        <li class="inline-block">
          <ion-icon name="git-merge-outline" class="text-gray-100" />
          <span>{pcb}</span>
        </li>
        <li class="inline-block">
          <ion-icon name="git-pull-request-outline" class="text-gray-100" />
          <span>{firmware}</span>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <button type="button">
        <ion-icon name="heart" class="text-white pr-1" />
        Follow
      </button>
    </div>
  </aside>
  <aside><img src={avatar} alt={name} /></aside>
</div>

<style>
  .wrapper {
  }
  button {
    padding: 0.42em 1em;
    border-radius: 2px;
    background-color: #b495cb;
    display: flex;
    align-items: center;
    font-size: 0.875em;
    text-transform: uppercase;
  }

  ion-icon {
    margin-top: 1px;
  }

  .badge {
    padding: 0.3em 0.5em;
    border-radius: 2px;
    text-transform: uppercase;
    font-size: 0.875em;
  }
</style>
