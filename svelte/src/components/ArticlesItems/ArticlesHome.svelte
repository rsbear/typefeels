<script lang="ts">
  import dayjs from "dayjs";
  import { articles } from "../../articles";
  const yeah: { title; user; date; hero }[] = articles
    .slice(1, 4)
    .map((x) => x);
</script>

<section>
  <div class="mainblock">
    <img src={articles[0].hero} class="main" alt="Article yeah" />
    <h1 class="text-lg font-bold mt-1">{articles[0].title}</h1>
    <p class="text-base">
      <span class="text-sm text-green-300">{articles[0].user}</span>
      <span
        class="text-sm"
      >{dayjs(articles[0].date).format('MMM DD, YYYY')}</span>
    </p>
  </div>
  <ul class="listblock divide-y divide-gray-700">
    {#each yeah as article}
      <li class="flex justify-between pt-6 pb-6">
        <div>
          <h1 class="font-bold mr-4">{article.title}</h1>
          <p>
            <span class="text-sm text-green-300">{article.user}</span>
            <span
              class="text-sm"
            >{dayjs(article.date).format('MMM DD, YYYY')}</span>
          </p>
        </div>
        <img class="small" src={article.hero} alt="" />
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr 50%;
    padding-bottom: 3em;
    border-bottom: solid 1px #374151;
  }
  .mainblock {
    padding-right: 3em;
    border-right: solid 1px #374151;
  }
  img.main {
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 300px;
  }
  .listblock {
    padding-left: 3em;
  }
  .small {
    height: 40px;
  }
  li:first-of-type {
    padding-top: 0;
  }
</style>
