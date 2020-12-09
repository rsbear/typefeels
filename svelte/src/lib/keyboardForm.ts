import { writable } from "svelte/store";

export const keyboard = writable<KeyboardForm>({
  about:
    "# Start writing in markdown! \n\n### Icons \n- i, markdown cheatsheet\n- image, upload an image and get a URL \n- glasses, preview the article \n\n\n ```please note: html tags are sanitized ```",
  angle: "",
  brand: "",
  connection: "",
  extra_pcbs: false,
  extra_plates: false,
  firmware: "",
  images: [],
  mount: "",
  name: "",
  pcb: "",
  size: "",
  editions: [{ name: "", price: "" }],
  layouts: [""],
  layout_support: [""],
  plates: [{ name: "", price: "" }],
  cases: [{ name: "", price: "" }],
  weights: [{ name: "", price: "" }],
});

export const addString = (event) => {
  console.log("event", event);
  const { name } = event.target;
  console.log("name", name);
  keyboard.update((x) => {
    return {
      ...x,
      [name]: [...x[name], ""],
    };
  });
};

export const removeString = (event) => {
  const { name, value } = event.target;
  keyboard.update((x) => {
    return {
      ...x,
      [name]: x[name].filter((item) => item !== value),
    };
  });
};

export const addMaterial = (event) => {
  const { name } = event.target;
  keyboard.update((x) => {
    return {
      ...x,
      [name]: [...x[name], { name: "", price: "" }],
    };
  });
};

export const removeMaterial = (event) => {
  const { name, value } = event.target;
  keyboard.update((x) => {
    return {
      ...x,
      [name]: x[name].filter((item) => item.name !== value),
    };
  });
};

export const booleanSwap = (val, event) => {
  const { name } = event.target;
  keyboard.update((x) => {
    return {
      ...x,
      [name]: val,
    };
  });
};

export const test = () => {
  keyboard.subscribe((x) => {
    console.log("x", x);
  });
};
