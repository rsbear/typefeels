<script lang="ts">
  import DynamicNav from "./DynamicNav.svelte";

  export let segment: string;
</script>

<nav class="divide-y divide-gray-800">
  <h1 class="font-semibold mb-8">typefeel</h1>
  <ul class="pt-8">
    <li class="text-sm mb-2"><a href="/keyboards">keyboards</a></li>
    <li class="text-sm my-2"><a href="/keysets">keysets</a></li>
  </ul>
  <div class="mt-8">
    <DynamicNav />
  </div>
</nav>
