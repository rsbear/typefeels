<script lang="ts">
  import { writing } from "./../lib/writingStore";

  const handleShowPublishModal = () => {
    $writing.showPublishModal = !$writing.showPublishModal;
  };
</script>

<button
  type="button"
  class="text-xs font-semibold bg-green-400 rounded-sm py-2 px-4 mb-1 mr-4"
  on:click={handleShowPublishModal}
>Publish</button>
