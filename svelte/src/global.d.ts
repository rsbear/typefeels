declare interface Material {
  name: string;
  price: string;
}

declare interface Color {
  name?: string;
  hex?: string;
  pantone?: string;
  ral?: string;
}

declare interface KeyboardForm {
  about: string;
  angle: string;
  brand: string;
  connection: string;
  extra_pcbs: boolean;
  extra_plates: boolean;
  firmware: string;
  images: any[];
  mount: string;
  name: string;
  pcb: string;
  size: string;

  layouts: string[];
  layout_support: string[];

  editions: Material[];
  plates: Material[];
  cases: Material[];
  weights: Material[];

  colors?: null | Color[];
}

declare enum Content {
  Article = "articles",
  Keyboard = "keyboards",
  Keyset = "keysets",
}
