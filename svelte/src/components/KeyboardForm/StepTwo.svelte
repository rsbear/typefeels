<script lang="ts">
  import FormSection from "../shared/FormSection.svelte";
  import Input from "./../Input.svelte";

  export let handleIdx: Function;
  import {
    keyboard,
    addString,
    removeString,
    addMaterial,
    removeMaterial,
    booleanSwap,
    test,
  } from "./../../lib/keyboardForm";
  import BottomStepper from "./BottomStepper.svelte";
  test();
</script>

<FormSection title="Editions">
  {#each $keyboard.editions as { name, price }}
    <div class="addgrid">
      <Input
        name="editions"
        placeholder="Name"
        icon="at-outline"
        bind:value={name}
      />
      <Input
        name="Editions"
        placeholder="Price"
        icon="logo-usd"
        bind:value={price}
      />
      <button
        type="button"
        name="editions"
        on:click={addMaterial}
        class="addbtn"
      >
        <ion-icon name="add" class="text-lg text-blue-300" />
      </button>
      <button
        type="button"
        name="editions"
        value={name}
        class="deletebtn"
        on:click={removeMaterial}
      >
        <ion-icon name="trash" class="text-red-300" />
      </button>
    </div>
  {/each}
</FormSection>

<FormSection title="Cases">
  {#each $keyboard.cases as { name, price }}
    <div class="addgrid">
      <Input
        name="cases"
        placeholder="Material"
        icon="hammer-outline"
        bind:value={name}
      />
      <Input
        name="cases"
        placeholder="Price"
        icon="logo-usd"
        bind:value={price}
      />
      <button type="button" name="cases" on:click={addMaterial} class="addbtn">
        <ion-icon name="add" class="text-lg text-blue-300" />
      </button>
      <button
        type="button"
        name="cases"
        value={name}
        class="deletebtn"
        on:click={removeMaterial}
      >
        <ion-icon name="trash" class="text-red-300" />
      </button>
    </div>
  {/each}
</FormSection>

<FormSection title="Plates">
  {#each $keyboard.plates as { name, price }}
    <div class="addgrid">
      <Input
        name="plates"
        placeholder="Material"
        icon="hammer-outline"
        bind:value={name}
      />
      <Input
        name="plates"
        placeholder="Price"
        icon="logo-usd"
        bind:value={price}
      />
      <button type="button" name="plates" on:click={addMaterial} class="addbtn">
        <ion-icon name="add" class="text-lg text-blue-300" />
      </button>
      <button
        type="button"
        name="plates"
        value={name}
        class="deletebtn"
        on:click={removeMaterial}
      >
        <ion-icon name="trash" class="text-red-300" />
      </button>
    </div>
  {/each}
</FormSection>

<FormSection title="Weights">
  {#each $keyboard.weights as { name, price }}
    <div class="addgrid">
      <Input
        name="weights"
        placeholder="Material"
        icon="hammer-outline"
        bind:value={name}
      />
      <Input
        name="weights"
        placeholder="Price"
        icon="logo-usd"
        bind:value={price}
      />
      <button
        type="button"
        name="weights"
        on:click={addMaterial}
        class="addbtn"
      >
        <ion-icon name="add" class="text-lg text-blue-300" />
      </button>
      <button
        type="button"
        name="weights"
        value={name}
        class="deletebtn"
        on:click={removeMaterial}
      >
        <ion-icon name="trash" class="text-red-300" />
      </button>
    </div>
  {/each}
</FormSection>

<div class="flex justify-between items-center px-12 mb-4">
  <h4 class="font-semibold">Will extra plates be available?</h4>
  <div class="w-1/2">
    <div class="h-px bg-cool-gray-700 w-full mx-2" />
  </div>
  <div class="flex items-center">
    <button
      type="button"
      name="extra_plates"
      class={!$keyboard.extra_plates ? 'btn select-btn mr-2' : 'btn btn-full mr-2'}
      on:click={(e) => booleanSwap(true, e)}
    >yes</button>
    <button
      type="button"
      name="extra_plates"
      class={!$keyboard.extra_plates ? 'btn btn-full' : 'btn select-btn'}
      on:click={(e) => booleanSwap(false, e)}
    >No</button>
  </div>
</div>

<div class="flex justify-between items-center px-12">
  <h4 class="font-semibold">Will extra PCBs be available?</h4>
  <div class="w-1/2">
    <div class="h-px bg-cool-gray-700 w-full mx-2" />
  </div>
  <div class="flex items-center">
    <button
      type="button"
      name="extra_pcbs"
      class={!$keyboard.extra_pcbs ? 'btn select-btn mr-2' : 'btn btn-full mr-2'}
      on:click={(e) => booleanSwap(true, e)}
    >yes</button>
    <button
      type="button"
      name="extra_pcbs"
      class={!$keyboard.extra_pcbs ? 'btn btn-full' : 'btn select-btn'}
      on:click={(e) => booleanSwap(false, e)}
    >No</button>
  </div>
</div>

<BottomStepper>
  <button type="button" class="btn mr-2" on:click={handleIdx(0)}>
    <span class="flex items-center">
      <ion-icon name="arrow-back" class=" text-white pr-2" />
      Previous
    </span>
  </button>
  <button
    type="button"
    class="select-btn flex items-center"
    on:click={handleIdx(2)}
  >
    Next
  </button>
</BottomStepper>

<style>
  .addgrid {
    display: grid;
    grid-template-columns: 1fr 1fr 38px 38px;
    column-gap: 1em;
  }

  .addbtn {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    border: solid 1px rgba(80, 190, 240, 1);
    background-color: transparent;
  }

  .deletebtn {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    border: solid 1px rgb(230, 67, 88);
    background-color: transparent;
  }
</style>
