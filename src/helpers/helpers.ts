import axios from "axios";
import { toast } from "react-toastify";

export const toastAxiosError = (error: Error) => {
  if (axios.isAxiosError(error)) {
    const errors = error.response?.data.errors;

    if (errors && Array.isArray(errors)) {
      errors.forEach((err) => {
        toast.error(err.detail);
      });
    } else {
      toast.error(error.response?.data.message);
    }
  } else {
    toast.error("Error desconocido al crear el recurso");
  }
};
