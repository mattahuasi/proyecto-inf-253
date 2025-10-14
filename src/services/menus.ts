import { DocumentObject } from "jsonapi-fractal";
import axios from "./axios";

export const getMenusRequest = () => axios.get("/menus");

export const getMenuRequest = (id: string) => axios.get("/menus/" + id);

export const postMenuRequest = (data: DocumentObject) =>
  axios.post("/menus", data);

export const putMenuRequest = (id: string, data: DocumentObject) =>
  axios.put("/menus/" + id, data);

export const deleteMenuRequest = (id: string) => axios.delete("/menus/" + id);
