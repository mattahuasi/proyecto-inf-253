import {
  MdOutlineLogout,
  MdOutlineMenu,
  MdOutlineMenuOpen,
} from "react-icons/md";
import { Link } from "react-router";
import { Logo } from "../components/Logo";
import { NavItem } from "../components/NavItem";
import { useAuth } from "../hooks/useAuth";
import { ExpandedProps } from "../types";

export const Sidebar = ({ expanded, toggle, routes }: ExpandedProps) => {
  const { handleLogout } = useAuth();

  return (
    <aside
      className={`bg-gray-50 dark:bg-gray-900 h-screen fixed top-0 left-0 z-50 transform overflow-y-auto ${
        expanded
          ? "translate-x-0 w-64"
          : "-translate-x-full lg:translate-x-0 lg:w-14"
      } transition-all duration-300 ease-in-out flex flex-col`}
    >
      <header className="flex justify-center items-center py-4">
        <Link
          className={expanded ? "block" : "hidden"}
          to="/dashboard"
          viewTransition
        >
          <Logo />
        </Link>

        <button
          className={`${
            expanded ? "hidden" : "block"
          } text-3xl text-gray-900 dark:text-gray-50 p-1 hover:bg-blue-500 rounded-md`}
          onClick={toggle}
        >
          {expanded ? <MdOutlineMenu /> : <MdOutlineMenuOpen />}
        </button>
      </header>

      <nav className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          {routes.map((route, index) => (
            <div className="mb-2" key={index}>
              <h2
                className={`text-gray-900 opacity-65 ml-10 mb-2 ${
                  expanded ? "block" : "hidden"
                } dark:text-gray-50 text-xs font-semibold uppercase`}
              >
                {route.title}
              </h2>
              <ul className="flex flex-col gap-1 mb-1">
                {route.items.map((route, index) => (
                  <li key={index}>
                    <NavItem
                      path={route.path}
                      Icon={route.icon}
                      name={route.name}
                      expanded={expanded}
                    />
                  </li>
                ))}
              </ul>

              <div
                className={`border-t border-gray-200 dark:border-gray-800 w-full bg-slate-900 ${
                  routes.length - 1 === index ? "hidden" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 py-2">
          <button className="block w-full outline-none" onClick={handleLogout}>
            <div
              className={`flex ${
                expanded ? "gap-6" : "gap-3"
              } group transition-all duration-300 ease-in-out`}
            >
              <div
                className={`w-2 py-6 rounded-md -ml-1 group-hover:bg-red-500 transition-all duration-300 ease-in-out`}
              ></div>
              <div
                className={`${
                  expanded
                    ? "w-full rounded-md px-4 mr-6 hover:text-gray-50 group-hover:bg-red-500"
                    : "hover:text-red-500"
                } flex items-center gap-4 text-gray-900 dark:text-gray-50 text-sm font font-semibold transition-all duration-300 ease-in-out`}
              >
                <MdOutlineLogout className="text-2xl" />
                <span className={expanded ? "block" : "hidden"}>
                  Cerrar sesión
                </span>
              </div>
            </div>
          </button>
        </div>
      </nav>
    </aside>
  );
};
