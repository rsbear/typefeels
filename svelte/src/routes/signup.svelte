<script lang="ts">
  import MagicWord from "../components/MagicWord.svelte";

  let email: string;
  let username: string;
  let error: null | string = null;
  let showMagicWord = false;

  async function submitUser(event) {
    event.preventDefault();
    try {
      // need to generate auth serverside
      // then we can show the confirmation magic word input
      showMagicWord = true;
    } catch (err) {
      console.log("err", err);
      error = err;
    }
  }
</script>

{#if !showMagicWord}
  <div>
    <form on:submit={submitUser}>
      <input type="text" bind:value={email} placeholder="email" />
      <input type="text" bind:value={username} placeholder="username" />
      <button type="submit">Sign up</button>
    </form>
  </div>
{:else}
  <MagicWord {email} {username} />
{/if}
