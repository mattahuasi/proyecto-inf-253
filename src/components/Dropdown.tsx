import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IconType } from "react-icons";
import { DropdownAction } from "../types";

interface DropdownProps {
  Icon: IconType;
  items?: DropdownAction[];
}

export const Dropdown = ({ Icon, items }: DropdownProps) => {
  return (
    <Menu>
      <MenuButton className="rounded-full border border-gray-300 dark:border-gray-600">
        <Icon className="text-2xl text-gray-900 dark:text-gray-100" />
      </MenuButton>

      <MenuItems
        className="w-48 border border-gray-50 dark:border-gray-700  bg-gray-100 dark:bg-gray-900 rounded-md shadow-md z-50 focus:outline-none transition-all duration-300 ease-in-out"
        transition
        anchor="bottom end"
      >
        {items?.map((item, index) => (
          <MenuItem key={item.label}>
            <div
              className={`p-1 ${
                items.length - 1 !== index
                  ? "border-b border-gray-300 dark:border-gray-800"
                  : ""
              }`}
              onClick={item.onClick}
            >
              {" "}
              <div className="flex items-center gap-4 px-4 py-2 cursor-pointer text-gray-900 dark:text-gray-100 hover:bg-blue-500 hover:text-gray-100 rounded-md transition-all duration-300 ease-in-out">
                {item.icon && <item.icon className="text-2xl" />}
                <span className="text-xs break-words truncate">
                  {item.label}
                </span>
              </div>
            </div>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
