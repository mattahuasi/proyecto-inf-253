export interface Employee {
  id: string;
  paternalSurname: string;
  maternalSurname: string;
  names: string;
  gender: Gender;
  phone: null | string;
  type: string;
  links: Links;
}

export enum Gender {
  F = "F",
  M = "M",
}

export enum Type {
  AD = "AD",
  CO = "CO",
  CA = "CA",
  WA = "WA",
}

export interface Links {
  self: string;
}
