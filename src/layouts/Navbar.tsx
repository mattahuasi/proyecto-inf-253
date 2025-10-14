import {
  MdOutlineKeyboardArrowDown,
  MdOutlineManageAccounts,
  MdOutlineMenu,
  MdOutlineMenuOpen,
} from "react-icons/md";
import { Avatar } from "../components/Avatar";
import { Dropdown } from "../components/Dropdown";
import { Search } from "../components/Search";
import { useAuth } from "../hooks/useAuth";
import { useSearchFilter } from "../hooks/useSearch";
import { ExpandedProps, NavRouteItem, NavRouteSection } from "../types";

export const Navbar = ({ expanded, toggle, routes }: ExpandedProps) => {
  const { authUser } = useAuth();

  const getAllItems = (sections: NavRouteSection[]): NavRouteItem[] => {
    return sections.flatMap((section) => section.items);
  };
  const items = getAllItems(routes);

  const {
    searchText,
    filteredItems,
    handleSearchChange,
    handleItemClick,
    resetSearch,
  } = useSearchFilter({ items });

  return (
    <nav
      className={`bg-gray-50 dark:bg-gray-900 fixed top-0 z-40 right-0 ${
        expanded ? "lg:left-64" : "lg:left-14"
      } transition-all duration-300 ease-in-out w-full lg:w-auto`}
    >
      <div className=" flex items-center justify-between max-h-14 pl-2 lg:pl-4 pr-4 lg:pr-8 py-2">
        <div className="flex items-center gap-4">
          <button
            className={`${
              expanded ? "lg:block" : "lg:hidden"
            } text-3xl text-gray-900 dark:text-gray-50 p-1 hover:bg-blue-500 rounded-md`}
            onClick={toggle}
          >
            {expanded ? <MdOutlineMenu /> : <MdOutlineMenuOpen />}
          </button>

          <Search
            value={searchText}
            filteredItems={filteredItems}
            onChange={handleSearchChange}
            onClick={handleItemClick}
            onReset={resetSearch}
            expanded={expanded}
          />
        </div>

        <div className="flex items-center gap-4">
          <Avatar />

          <div className="flex justify-between items-center gap-4">
            <div className="hidden lg:flex flex-col">
              <h5 className="text-gray-900 dark:text-gray-100 text-sm font-semibold">
                {authUser?.names}
              </h5>
              <p className="text-gray-900 dark:text-gray-100 text-xs">
                {authUser?.role}
              </p>
            </div>

            <Dropdown
              Icon={MdOutlineKeyboardArrowDown}
              items={[
                {
                  label: "Administrar mi cuenta",
                  icon: MdOutlineManageAccounts,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
