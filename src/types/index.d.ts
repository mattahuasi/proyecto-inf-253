import { Row } from "@tanstack/react-table";
import { IconType } from "react-icons";

export interface ExpandedProps {
  expanded: boolean;
  routes: NavRouteSection[];
  toggle?: () => void;
}

export interface NavRouteSection {
  title: string;
  items: NavRouteItem[];
}

export interface NavRouteItem {
  name: string;
  path: string;
  icon: IconType;
}

export interface TableColumn {
  key: string;
  title: string;
}

export interface TableAction {
  label: string;
  icon?: IconType;
  onClick: (row: Row<T>) => void;
}
