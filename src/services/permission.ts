import axios from "./axios";

export const getPermissionsRequest = () => axios.get("/permissions");
