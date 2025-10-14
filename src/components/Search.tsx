import { ChangeEvent } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useSearchReset } from "../hooks/useSearch";
import { NavRouteItem } from "../types";

interface SearchProps {
  value: string;
  filteredItems: NavRouteItem[];
  expanded: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: (path: string) => void;
  onReset: () => void;
}

export const Search = ({
  value,
  filteredItems,
  expanded,
  onChange,
  onClick,
  onReset,
}: SearchProps) => {
  const { searchRef } = useSearchReset({ onReset });

  return (
    <div ref={searchRef}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <MdOutlineSearch className="absolute text-2xl text-gray-400 dark:text-gray-200" />
        </div>
        <input
          className="block w-40 lg:w-80 text-sm text-gray-800 dark:text-gray-200 bg-gray-300 dark:bg-gray-600 rounded-3xl py-2 ps-10 border-none ring-1 ring-gray-400 dark:ring-gray-400 placeholder:text-gray-400 placeholder:text-sm dark:placeholder:text-gray-200 outline-none hover:ring-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          type="search"
          name="Search"
          placeholder="Buscar"
          id="search"
          value={value}
          onChange={onChange}
        />
      </div>

      {value && (
        <ul
          className={`absolute w-40 lg:w-72 top-12 ${
            expanded ? "lg:left-20" : "left-16 lg:left-8"
          } p-2 flex flex-col gap-1 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 rounded-md shadow-lg`}
        >
          {filteredItems.length === 0 ? (
            <li className="px-4 py-2 text-gray-900 dark:text-gray-100 rounded-md transition-all duration-300 ease-in-out z-40 truncate">
              No se encontró coincidencias
            </li>
          ) : (
            filteredItems.map((item) => (
              <li
                className="px-4 py-2 cursor-pointer text-sm text-gray-900 dark:text-gray-100 hover:bg-blue-500 hover:text-gray-100 rounded-md truncate transition-all duration-300 ease-in-out"
                key={item.name}
                onClick={() => onClick(item.path)}
              >
                {item.name}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};
