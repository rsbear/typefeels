import { writable } from "svelte/store";

interface WritingForm {
  title: string;
  date?: string;
  user: string;
  images: string[];
  content: string;
  showPreview: boolean;
  showPublishModal: boolean;
}

export const writing = writable<WritingForm>({
  title: "",
  user: "Ross",
  showPreview: false,
  showPublishModal: false,
  images: [],
  content:
    "# Start writing in markdown! \n\n### Icons \n- i, markdown cheatsheet\n- image, upload an image and get a URL \n- glasses, preview the article \n\n\n ```please note: html tags are sanitized ```",
});

export const editString = (event) => {
  const { name, value } = event.target;
  writing.update((x) => {
    return {
      ...x,
      [name]: value,
    };
  });
};

export const test = () => {
  writing.subscribe((x) => {
    console.log("x", x);
  });
};
