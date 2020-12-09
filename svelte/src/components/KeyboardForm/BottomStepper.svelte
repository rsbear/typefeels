<aside class="fixed bottom-0 left-0 w-full bg-body z-50">
  <div
    class="container max-w-4xl border-t border-solid border-cool-gray-700 bg-body"
  >
    <slot />
  </div>
</aside>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1.5em 0;
  }

  .bg-body {
    background-color: #101010;
  }
</style>
