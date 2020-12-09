<script lang="ts">
  import StepFive from "../../components/KeyboardForm/StepFive.svelte";

  import StepFour from "../../components/KeyboardForm/StepFour.svelte";
  import StepOne from "../../components/KeyboardForm/StepOne.svelte";
  import StepThree from "../../components/KeyboardForm/StepThree.svelte";
  import StepTwo from "../../components/KeyboardForm/StepTwo.svelte";
  import Stepper from "../../components/Stepper.svelte";

  const titles = [
    "Specs",
    "Materials & Extras",
    "Pictures",
    "About",
    "Preview & Publish",
  ];
  let currentIdx = 0;

  const handleIdx = (n: number) => {
    currentIdx = n;
  };
</script>

<div class="container max-w-4xl">
  <h1 class="text-2xl font-semibold mb-4">Create a Keyboard</h1>
  <Stepper {titles} {handleIdx} {currentIdx} />

  {#if currentIdx === 1}
    <StepTwo {handleIdx} />
  {:else if currentIdx === 2}
    <StepThree {handleIdx} />
  {:else if currentIdx === 3}
    <StepFour {handleIdx} />
  {:else if currentIdx === 4}
    <StepFive {handleIdx} />
  {:else}
    <StepOne {handleIdx} />
  {/if}
</div>
