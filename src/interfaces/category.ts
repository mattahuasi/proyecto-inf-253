export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  priority: string;
  links: Links;
}

export interface Links {
  self: string;
}
