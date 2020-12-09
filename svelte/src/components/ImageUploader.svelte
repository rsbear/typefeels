<script lang="ts">
  export let images: any[];
  export let addImage: Function;
  import Dropzone from "svelte-file-dropzone";

  const handleSelectedImage = (e) => {
    const { acceptedFiles, fileRejections } = e.detail;
    const reader = new FileReader();
    reader.onload = (e) => {
      addImage(reader.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  };
</script>

<div class="drop">
  <Dropzone
    on:drop={handleSelectedImage}
    disableDefaultStyles={true}
    containerClasses="absolute w-full h-full"
  />
  <div class="flex items-center">
    <ion-icon name="image-outline" class="text-cool-gray-500 pr-2" />
    <span class="text-cool-gray-400">Drag and drop, or click to add some images.</span>
  </div>
</div>

<h4 class="font-semibold mt-4 mb-2">Images</h4>
<div class="grid grid-cols-3 gap-2">
  {#each images as item}
    <div class="img-out">
      <button class="btn bg-red-700">
        <ion-icon name="trash" class=" text-white relative" />
      </button>
      <img src={item} alt="To be uploaded" />
    </div>
  {/each}
</div>

<style lang="pcss">
  .drop {
    position: relative;
    height: 72px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    @apply bg-cool-gray-700;
  }

  .drop :global(p) {
    visibility: hidden;
  }

  .img-out {
    position: relative;
    width: 100%;
  }

  .img-out:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  button {
    position: absolute;
    padding: 0;
    top: 0.5em;
    right: 0.5em;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
  }
</style>
