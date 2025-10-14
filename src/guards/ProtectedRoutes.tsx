import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router";
import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/useAuth";
import { AuthUser } from "../interfaces/auth";

type ProtectedRoutesProps = PropsWithChildren & {
  allowedRoles?: AuthUser["role"][];
};

export const ProtectedRoutes = ({
  allowedRoles,
  children,
}: ProtectedRoutesProps) => {
  const { authToken, authUser, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loading />;

  if (!authUser || !authToken)
    return <Navigate to="/auth/login" state={{ from: location }} replace />;

  if (!allowedRoles?.includes(authUser.role))
    return <Navigate to="/" replace />;

  return <>{children}</>;
};
