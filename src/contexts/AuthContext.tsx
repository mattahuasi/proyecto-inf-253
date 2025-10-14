import { createContext } from "react";
import { AuthCredentials, AuthUser } from "../interfaces/auth";

type AuthContext = {
  authToken?: string | null;
  authUser?: AuthUser | null;
  loading: boolean;
  error?: string | null;
  handleLogin: (credentials: AuthCredentials) => Promise<void>;
  handleLogout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContext | undefined>(undefined);
