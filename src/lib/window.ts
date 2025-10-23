import {isClient} from "./env.ts";

export const windowWidth = ()  => {
  return isClient() ? window.innerWidth : 600;
};
