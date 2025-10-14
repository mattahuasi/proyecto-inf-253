export interface Menu {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  photoUrl: string | null;
  stock: number;
  priority: Priority;
  enabled: boolean;
  links: Links;
}

export interface Links {
  self: string;
}

export enum Priority {
  H = "H",
  M = "M",
  L = "L",
}
