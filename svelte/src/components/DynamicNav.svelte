<script lang="ts">
  import { dynamicNav, test } from "./../lib/navStore";

  let name: string;
  let url: string;

  dynamicNav.subscribe((x) => {
    name = x.name;
    url = `${x.contentType}/${x.alias}`;
  });
</script>

{#if $dynamicNav.alias}
  <div class="mt-6">
    <h4 class="font-semibold">{name}</h4>
    <ul>
      <li class="text-sm my-2"><a href={url}>Project</a></li>
      <li class="text-sm my-2"><a href={`${url}/discussion`}>Discussion</a></li>
      <li class="text-sm my-2"><a href={`${url}/data`}>Data</a></li>
    </ul>
  </div>
{/if}
