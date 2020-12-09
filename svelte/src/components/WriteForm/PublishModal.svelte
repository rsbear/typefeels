<script lang="ts">
  import ImageUploader from "../ImageUploader.svelte";
  import { writing } from "./../../lib/writingStore";
  import articleTags from "./../../lib/articleTags";
  import shortid from "shortid";
  import dayjs from "dayjs";
  import api from "../../lib/api";

  const handleCloseModal = () => {
    $writing.showPublishModal = !$writing.showPublishModal;
  };

  const addImage = (newFile) => {
    writing.update((x) => {
      return { ...x, images: [...x.images, newFile] };
    });
  };

  async function handlePublish() {
    event.preventDefault();
    const safeTitle = $writing.title.replace(/[^a-z0-9]/gi, "-").toLowerCase();
    const alias = `${safeTitle}-${shortid.generate()}`;
    const res = await api.poster("/create/images", {
      alias: `articles/${alias}`,
      images: $writing.images,
    });

    const data = {
      title: $writing.title,
      alias: `${safeTitle}-${shortid.generate()}`,
      date: dayjs().format("MMM DD, YYYY"),
      hero: res.data.posters[0],
      user: "Ross",
      content: $writing.content,
    };

    fetch("/write", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      handleCloseModal();
    });
  }
</script>

<div class="modalWrap">
  <div class="modal">
    <div class="flex justify-end pt-4 px-4">
      <button type="button" on:click={handleCloseModal}>
        <ion-icon name="close" class="text-2xl" />
      </button>
    </div>
    <div class="content divide-y divide-gray-700">
      <h1 class="text-2xl mb-4">Publish your writing</h1>
      <div class="py-4">
        <h1 class="text-sm mb-2">Add a hero image</h1>
        {#if $writing.images.length === 1}
          <img class="preview-img" src={$writing.images[0]} alt="" />
        {:else}
          <ImageUploader images={$writing.images} {addImage} />
        {/if}
      </div>
      <div class="py-4">
        <h1 class="font-semibold text-sm mb-2">Select 1 or 2 tags</h1>
        {#each articleTags as tag}
          <button
            type="button"
            class="text-xs font-semibold bg-gray-700 rounded-sm py-2 px-4 mb-2 mr-2"
          >{tag}</button>
        {/each}
      </div>
    </div>
    <div class="btn-container border-gray-700">
      <button
        type="button"
        class="text-xs font-semibold bg-green-400 rounded-sm py-2 px-12"
        on:click={handlePublish}
      >Submit</button>
    </div>
  </div>
</div>

<style>
  .modalWrap {
    position: absolute;
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .modal {
    width: 900px;
    border-radius: 4px;
    background-color: #101010;
  }
  .content {
    padding: 0em 4em 1em 4em;
  }
  .preview-img {
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    padding: 1em 0;
    border-top: solid 1px #374151;
  }
</style>
