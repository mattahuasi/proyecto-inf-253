import { Outlet } from "react-router";
import { PublicRoutes } from "../guards/PublicRoutes";

export const GuestLayout = () => {
  return (
    <PublicRoutes>
      <main className="h-screen flex justify-center items-center bg-blue-500 dark:bg-blue-900 px-5">
        <Outlet />
      </main>
    </PublicRoutes>
  );
};
