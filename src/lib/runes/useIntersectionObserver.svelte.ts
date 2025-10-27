export const useIntersectionObserver = (options: any = { threshold: 0.5 }) => {
  let ref = $state<HTMLElement>();
  let observed = $state(false);

  $effect(() => {
    if (ref) {
      const observer = new IntersectionObserver(([entry]) => {
        observed = entry.isIntersecting;
      }, options);

      observer.observe(ref);

      return () => {
        if (observer) observer.disconnect();
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
