export interface User {
  type: Type;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
  links: UserLinks;
}

export interface Attributes {
  username: string;
  email: string;
  enabled: number;
  user_type: UserType;
}

export enum UserType {
  Customer = "customer",
  Employee = "employee",
}

export interface UserLinks {
  self: string;
}

export interface Relationships {
  role: Customer;
  employee?: Customer;
  customer?: Customer;
}

export interface Customer {
  links: CustomerLinks;
}

export interface CustomerLinks {
  self: string;
  related: string;
}

export enum Type {
  Users = "users",
}
