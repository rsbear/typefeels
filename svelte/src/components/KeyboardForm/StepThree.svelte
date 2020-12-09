<script lang="ts">
  export let handleIdx: Function;
  import ImageUploader from "../ImageUploader.svelte";
  import BottomStepper from "./BottomStepper.svelte";
  import { keyboard, test } from "./../../lib/keyboardForm";
  test();

  const addImage = (newFile) => {
    keyboard.update((x) => {
      return { ...x, images: [...x.images, newFile] };
    });
  };
</script>

<ImageUploader {addImage} images={$keyboard.images} />

<BottomStepper>
  <button type="button" class="btn mr-2" on:click={handleIdx(1)}>
    <span class="flex items-center">
      <ion-icon name="arrow-back" class=" text-white pr-2" />
      Previous
    </span>
  </button>
  <button
    type="button"
    class="select-btn flex items-center"
    on:click={handleIdx(3)}
  >
    Next
  </button>
</BottomStepper>
