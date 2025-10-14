import axios, { type AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

instance.defaults.headers.common["Content-Type"] = "application/vnd.api+json";
instance.defaults.headers.common["Accept"] = "application/vnd.api+json";
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default instance;
