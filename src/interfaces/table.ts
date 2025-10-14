export interface Table {
  id: string;
  number: number;
  status: Status;
  ability: number;
  links: Links;
}

export interface Links {
  self: string;
}

export enum Status {
  Available = "A",
  Busy = "B",
  Waiting = "W",
}
