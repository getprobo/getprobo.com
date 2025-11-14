<script lang="ts">
  import type { Snippet } from "svelte";

  const props: {
    duration: string;
    position: string;
    title: string;
    children: Snippet;
    active: boolean;
  } = $props();
</script>

<div
  class="compliance-item min-w-0 w-full group flex flex-col relative pl-7 last:pb-0 sm:p-0 sm:pt-13"
  data-active={props.active || undefined}
>
  <!-- Square indicator -->
  <div
    class="square absolute left-0 top-3 size-2 bg-border-low group-data-active:bg-accent transition-all sm:top-0"
  ></div>

  <!-- ProgressBar -->
  <div
    class="absolute left-[3px] top-5 -bottom-9 group-last:bottom-0 w-0.5 bg-border-low sm:left-2 sm:top-[3px] sm:-right-16 sm:bottom-auto sm:h-[2px] sm:w-auto group-last:sm:right-0"
  >
    <div
      class="size-full bg-accent scale-y-0 duration:0 group-data-active:duration-2000 group-data-active:scale-y-100 origin-top sm:scale-x-0 sm:scale-y-100 sm:group-data-active:scale-x-100 sm:origin-left"
    ></div>
  </div>

  <!-- Content -->
  <div class="border rounded-lg w-max flex items-center h-8.5 text-lg font-medium mb-2 sm:mb-4">
    <div class="grid place-items-center h-full border-r px-2.5 text-quaternary group-data-active:text-accent">{props.position}</div>
    <div class="px-2.5">
      {props.title}
    </div>
  </div>
  <p class="text-lg mb-2 sm:mb-6">
    {@render props.children()}
  </p>
  <p class="text-lg text-muted-foreground mt-auto">
    {props.duration}
  </p>
</div>

<style>
  .compliance-item[data-active] .square {
    animation: squareIn 0.5s ease-in-out;
  }
  @keyframes squareIn {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    0% {
      transform: scale(1);
    }
  }
</style>
