import {onMount} from "svelte";

export const useWindowSize = () => {
  let width = $state(0);
  let height = $state(0);
  let loading = $state(true);

  const handleResize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  onMount(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    loading = false;

    return () => window.removeEventListener('resize', handleResize);
  })

  return {
    get width() { return width },
    get height() { return height },
    get loading() { return loading }
  }
}
