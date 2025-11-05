type Options = {
  threshold?: number;
  once?: boolean;
}

const base: Options = { threshold: 0.5, once: false }

export const useIntersectionObserver = (options: Options = base) => {
  let ref = $state<HTMLElement>();
  let observed = $state(false);

  $effect(() => {
    if (ref) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && options.once) {
          observer.disconnect();
        }
        observed = entry.isIntersecting;
      }, {threshold: options.threshold});

      observer.observe(ref);

      return () => {
        observer.disconnect();
      };
    }
  });

  return {
    get observed() {
      return observed;
    },
    get ref() {
      return ref;
    },
    set ref(element) {
      ref = element;
    },
  };
};
