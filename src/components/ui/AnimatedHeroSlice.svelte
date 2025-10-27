<div class="h-full slice transition-all" style={style}>
</div>

<script lang="ts">
    import {onMount} from "svelte";

    const minDuration = 1000
    const offsetRange = 0.5
    const randomScale = () => 0.2 + Math.random()
    const randomOffset = () => 100 * (offsetRange/2 - Math.random() * offsetRange)
    const randomDuration = () => Math.round(minDuration + Math.random() * minDuration)

    let timer: ReturnType<typeof setTimeout> | null = null
    let scale = $state(randomScale())
    let offset = $state(randomOffset())
    let duration = $state(randomDuration())
    const style = $derived(`transform: scaleY(${scale.toFixed(2)}) translateY(${offset.toFixed(2)}%); transition-duration: ${duration}ms;`)
    const tick = () => {
        scale = randomScale()
        offset = randomOffset()
        duration = randomDuration()
        timer = setTimeout(tick, duration)
    }

    onMount(() => {
        timer = setTimeout(tick, randomDuration())
        return () => {
          if (timer) {
            clearTimeout(timer);
          }
        }
    })
</script>

<style>
    .slice {
        z-index: 1;
        background: linear-gradient(180deg, #FFFFFB 0%, #E4F7C7 100%);
    }
</style>
