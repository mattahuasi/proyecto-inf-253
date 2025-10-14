import { DocumentObject } from "jsonapi-fractal";
import axios from "./axios";

export const getEmployeesRequest = () => axios.get("/employees");

export const getEmployeeRequest = (id: string) => axios.get("/employees/" + id);

export const postEmployeeRequest = (data: DocumentObject) =>
  axios.post("/employees", data);

export const putEmployeeRequest = (id: string, data: DocumentObject) =>
  axios.put("/employees/" + id, data);

export const deleteEmployeeRequest = (id: string) =>
  axios.delete("/employees/" + id);
