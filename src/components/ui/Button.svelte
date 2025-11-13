<script lang="ts">
  import { tv, type VariantProps } from "tailwind-variants";
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

  const button = tv({
  base: "font-medium rounded-full leading-none transition-all inline-flex items-center flex-none justify-center gap-2",
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-primary/80 disabled:bg-primary/60",
      secondary: "border bg-secondary border-b-[#0000001A]",
      highlight: "bg-highlight"
    },
    size: {
      default: "px-3 h-9 sm:h-8 text-sm",
      lg: "py-3 text-lg px-5",
      icon: "size-8",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

  type Props = {
    href?: string,
    as?: string
  } & VariantProps<typeof button> & HTMLButtonAttributes

  let { as, size, variant, ...props }: Props = $props();
  let tag = $derived.by(() => {
    if (props.href) {
      return "a";
    }
    if (as) {
      return as;
    }


    return "button";
  })
</script>

<svelte:element this={tag} {...props} class={button({size, variant, className: props.class})}>
  <slot />
</svelte:element>
