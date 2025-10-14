import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export const RootRedirect = () => {
  const { authToken } = useAuth();

  return authToken ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/auth/login" replace />
  );
};
