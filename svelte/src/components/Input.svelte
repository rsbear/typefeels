<script lang="ts">
  export let value: string;
  export let label: string;
  export let name: string;
  export let placeholder: string;
  export let icon: string;
</script>

<div class="wrap">
  <ion-icon name={icon} class="text-cool-gray-400" />
  <input type="text" {label} bind:value {placeholder} />
</div>

<style>
  .wrap {
    border: solid 1px rgb(90, 110, 120);
    border-radius: 2px;
    padding: 0 0.5em;
    display: flex;
    align-items: center;
  }

  .wrap:focus-within {
    border-color: rgb(68, 59, 190);
    box-shadow: 0px 0px 0px 2px rgba(190, 220, 240, 0.8);
  }

  input {
    background-color: transparent;
    padding: 0.375em;
    width: 100%;
  }

  input:active {
    border: 0;
    outline: 0;
  }

  input:focus {
    border: 0;
    outline: 0;
  }
</style>
