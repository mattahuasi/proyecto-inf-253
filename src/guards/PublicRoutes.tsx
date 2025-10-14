import { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/useAuth";

type PublicRoutesProps = PropsWithChildren;

export const PublicRoutes = ({ children }: PublicRoutesProps) => {
  const { authToken, loading } = useAuth();

  if (loading) return <Loading />;

  if (authToken) return <Navigate to="/dashboard" replace />;

  return <>{children}</>;
};
