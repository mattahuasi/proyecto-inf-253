export interface Customer {
  id: string;
  paternalSurname: string;
  maternalSurname: string;
  names: string;
  gender: string;
  phone: string;
  links: Links;
}

export interface Links {
  self: string;
}
