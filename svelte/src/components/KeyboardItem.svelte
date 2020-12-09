<script lang="ts">
  export let x;
</script>

<a rel="preload" href={`/keyboards/${x.alias}`}>
  <img src={x.images_thumbs[0]} alt="" />
  <h4 class="mt-1">{x.brand} {x.name}</h4>
  <p class="text-cool-gray-300">{x.size}</p>
</a>
