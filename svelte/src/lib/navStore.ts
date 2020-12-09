import { writable } from "svelte/store";

interface DynamicNav {
  alias: string | null;
  contentType: string;
  name: string | null;
}

export const dynamicNav = writable<DynamicNav>({
  alias: null,
  contentType: null,
  name: null,
});

export const setDynamicNav = ({ alias, contentType, name }: DynamicNav) => {
  dynamicNav.update(() => {
    return {
      alias,
      contentType,
      name,
    };
  });
};

export const resetDynamicNav = () => {
  dynamicNav.update(() => {
    return {
      alias: null,
      contentType: null,
      name: null,
    };
  });
};

export const test = () => {
  dynamicNav.subscribe((x) => {
    console.log("x", x);
  });
};
