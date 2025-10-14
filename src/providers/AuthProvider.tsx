import axios from "axios";
import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { AuthCredentials, AuthUser } from "../interfaces/auth";
import {
  getAuthUserRequest,
  loginRequest,
  logoutRequest,
} from "../services/auth";

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authToken, setAuthToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!authToken) {
        setLoading(false);
        return;
      }

      try {
        const user = await getAuthUserRequest();

        setAuthUser(user.data);
      } catch {
        setAuthToken(null);
        setAuthUser(null);
        setError("Error al recuperar datos de usuario");
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [authToken]);

  async function handleLogin({ ...credentials }: AuthCredentials) {
    try {
      const { data } = await loginRequest({ ...credentials });

      localStorage.setItem("token", data.plain_text_token);
      setAuthToken(data.plain_text_token);

      const user = await getAuthUserRequest();

      setAuthUser(user.data);
      setError(null);

      navigate("/dashboard", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      }

      setAuthToken(null);
      setAuthUser(null);
    }
  }

  async function handleLogout() {
    try {
      if (!authToken) return;
      await logoutRequest();
      setAuthToken(null);
      setAuthUser(null);
      setError(null);
      localStorage.removeItem("token");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    }
  }

  return (
    <AuthContext.Provider
      value={{ authToken, authUser, handleLogin, handleLogout, error, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
