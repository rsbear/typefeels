<script lang="ts">
  export let handleIdx: Function;

  import { mutation, operationStore } from "@urql/svelte";
  import { keyboard } from "./../../lib/keyboardForm";
  import gql from "../../gql";
  import api from "../../lib/api";
  import TitleBlock from "../KeyboardPage/TitleBlock.svelte";
  import BottomStepper from "./BottomStepper.svelte";

  const createKeyboard = operationStore(gql.createKeyboard);
  const createMutation = mutation(createKeyboard);

  const { images, ...rest } = $keyboard;
  const alias = $keyboard.name.replace(/[^a-z0-9]/gi, "_").toLowerCase();

  const handlePublish = async (e) => {
    e.preventDefault();
    try {
      const res = await api.poster("/create/images", {
        alias,
        images: $keyboard.images,
      });
      createMutation({
        input: [
          {
            alias,
            images_thumbs: res.data.thumbs,
            images_posters: res.data.posters,
            images_raws: res.data.raws,
            ...rest,
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };
</script>

<TitleBlock
  angle={$keyboard.angle}
  brand={$keyboard.brand}
  connection={$keyboard.connection}
  firmware={$keyboard.firmware}
  mount={$keyboard.mount}
  name={$keyboard.name}
  pcb={$keyboard.pcb}
  size={$keyboard.size}
  avatar={$keyboard.images[0]}
/>

<BottomStepper>
  <button type="button" on:click={() => handleIdx(0)}>Edit</button>
  <button type="button" on:click={handlePublish}>Publish</button>
</BottomStepper>
