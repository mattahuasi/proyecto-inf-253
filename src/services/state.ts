import { DocumentObject } from "jsonapi-fractal";
import axios from "./axios";

export const getStatesRequest = () => axios.get("/states");

export const getStateRequest = (id: string) => axios.get("/states/" + id);

export const postStateRequest = (data: DocumentObject) =>
  axios.post("/states", data);

export const putStateRequest = (id: string, data: DocumentObject) =>
  axios.put("/states/" + id, data);

export const deleteStateRequest = (id: string) => axios.delete("/states/" + id);
