import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Checkbox } from "../components/Checkbox";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";
import { useAuth } from "../hooks/useAuth";
import { AuthCredentials } from "../interfaces/auth";

const ERROR_TIMEOUT = 5000;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCredentials>();
  const { error, handleLogin } = useAuth();
  const [visibleError, setVisibleError] = useState<string | null>(null);

  const onSubmit = (credentials: AuthCredentials) => {
    handleLogin({ ...credentials, device_name: "web" });
  };

  useEffect(() => {
    if (error) {
      setVisibleError(error);

      const timeout = setTimeout(() => {
        setVisibleError(null);
      }, ERROR_TIMEOUT);

      return () => clearTimeout(timeout);
    }
  }, [error]);

  return (
    <>
      <section className="p-8 rounded-3xl shadow-md bg-gray-100 dark:bg-gray-900">
        <h1 className="font-bold text-xl text-center text-gray-900 dark:text-gray-100 mb-2">
          Inicia sesión con tu cuenta
        </h1>
        <p className="text-xs text-center text-gray-900 dark:text-gray-100 opacity-80 mb-6">
          Por favor ingresa tu correo electrónico y contraseña para continuar.
        </p>

        {visibleError && (
          <p className="-mt-2 text-center text-xs font-semibold text-red-500 rounded-lg px-4 py-2 mb-4">
            {visibleError}
          </p>
        )}

        <form
          className="w-full flex flex-col gap-4 items-start"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="email"
            labelText="Correo electrónico"
            type="email"
            placeholder="esteban_schiller@gmail.com"
            {...register("email", {
              required: "El correo electrónico es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "El correo electrónico no es válido",
              },
            })}
            error={errors.email?.message}
          />

          <Input
            id="password"
            labelText="Contraseña"
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
            error={errors.password?.message}
          />

          <Checkbox id="remember" labelText="Recordarme" />

          <SubmitButton label="Iniciar sesión" fullWidth />
        </form>

        <p className="text-center font-semibold text-sm text-gray-900 dark:text-gray-100 opacity-65 mt-4">
          No tienes una cuenta?
          <Link
            className="ml-1 font-bold text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
            to="/auth/register"
          >
            Crear Cuenta
          </Link>
        </p>
      </section>
    </>
  );
}
