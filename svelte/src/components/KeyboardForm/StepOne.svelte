<script lang="ts">
  import Input from "../Input.svelte";

  import FormSection from "../shared/FormSection.svelte";

  import { keyboard, addString, removeString } from "./../../lib/keyboardForm";
  import BottomStepper from "./BottomStepper.svelte";
  // import Add from "./../../../static/icons/add.svg";
  export let handleIdx: Function;
</script>

<FormSection title="Name and Brand">
  <div class="grid grid-cols-2 gap-4">
    <Input
      label="Name"
      bind:value={$keyboard.name}
      placeholder="Name"
      icon="at"
    />
    <Input
      label="Brand"
      icon="at-circle"
      bind:value={$keyboard.brand}
      placeholder="Brand or Creator"
    />
  </div>
</FormSection>

<FormSection title="Size, Mount, and Typing Angle">
  <div class="grid grid-cols-3 gap-4">
    <Input
      label="Size"
      icon="albums-outline"
      bind:value={$keyboard.size}
      placeholder="e.g. 65%, TKL"
    />
    <Input
      label="Mount"
      icon="layers-outline"
      bind:value={$keyboard.mount}
      placeholder="e.g. Top Mount, Gasket"
    />
    <Input
      label="Typing Angle"
      icon="resize"
      bind:value={$keyboard.angle}
      placeholder="Typing angle"
    />
  </div>
</FormSection>

<FormSection title="Connection, PCB, and Firmware">
  <div class="grid grid-cols-3 gap-4">
    <Input
      label="Connection"
      icon="flash-outline"
      bind:value={$keyboard.connection}
      placeholder="e.g. USB Type-C"
    />
    <Input
      label="PCB"
      icon="git-merge-outline"
      bind:value={$keyboard.pcb}
      placeholder="PCB"
    />
    <Input
      label="Firmware"
      icon="git-pull-request-outline"
      bind:value={$keyboard.firmware}
      placeholder="e.g. QMK, VIA"
    />
  </div>
</FormSection>

<FormSection title="Layouts">
  {#each $keyboard.layouts as x, idx}
    <div class="addgrid">
      <Input
        name="layouts"
        icon="reorder-three-outline"
        bind:value={x}
        placeholder="e.g. WKL, HHKB"
      />
      <button type="button" name="layouts" on:click={addString} class="addbtn">
        <ion-icon name="add" class="text-lg text-blue-300" />
      </button>
      <button
        type="button"
        name="layouts"
        value={x}
        class="deletebtn"
        on:click={removeString}
      >
        <ion-icon name="trash" class="text-red-300" />
      </button>
    </div>
    {#if $keyboard.layouts.length > 1}
      <div class="h-2" />
    {/if}
  {/each}
</FormSection>

<FormSection title="Layout Support">
  {#each $keyboard.layout_support as x, i}
    <div class="addgrid">
      <Input
        bind:value={x}
        icon="return-down-back-outline"
        placeholder="e.g. ANSI, ISO, Split Backspace"
      />
      <button
        type="button"
        name="layout_support"
        class="addbtn"
        on:click={addString}
      >
        <ion-icon name="add" class="text-lg text-blue-300" />
        <!-- <Add /> -->
      </button>
      <button
        type="button"
        name="layout_support"
        value={x}
        class="deletebtn"
        on:click={removeString}
      >
        <ion-icon name="trash" class="text-red-300" />
      </button>
    </div>
    {#if $keyboard.layout_support.length > 1}
      <div class="h-2" />
    {/if}
  {/each}
</FormSection>

<BottomStepper>
  <button
    type="button"
    class="select-btn flex items-center"
    on:click={handleIdx(1)}
  >
    Next
  </button>
</BottomStepper>

<style>
  .addgrid {
    display: grid;
    grid-template-columns: 1fr 38px 38px;
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
