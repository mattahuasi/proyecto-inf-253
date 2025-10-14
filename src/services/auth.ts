import { AuthCredentials } from "../interfaces/auth";
import axios from "./axios";

export const loginRequest = ({ ...credentials }: AuthCredentials) =>
  axios.post("/login", credentials);

export const registerRequest = ({ ...credentials }: AuthCredentials) =>
  axios.post("/register", credentials);

export const getAuthUserRequest = () => axios.get("/me");

export const logoutRequest = () => axios.post("/logout");
