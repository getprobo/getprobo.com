import {isClient} from "./env.ts";

/**
 * SSR compatible method to define a custom element.
 */
export const customElementDefine = (name: string, cb: () =>  CustomElementConstructor) => {
  if (isClient()) {
    customElements.define(name, cb());
  }
};
