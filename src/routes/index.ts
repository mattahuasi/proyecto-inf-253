import {
  MdOutlineArchive,
  MdOutlineCategory,
  MdOutlineDeliveryDining,
  MdOutlineMenuBook,
  MdOutlinePeople,
  MdOutlinePeopleAlt,
  MdOutlineRestaurantMenu,
  MdOutlineRuleFolder,
  MdOutlineShoppingCart,
  MdOutlineSpeed,
  MdOutlineSupervisorAccount,
  MdOutlineTableRestaurant,
} from "react-icons/md";
import { NavRouteSection } from "../types";

export const routes: NavRouteSection[] = [
  {
    title: "",
    items: [{ name: "Dashboard", path: "/dashboard", icon: MdOutlineSpeed }],
  },
  {
    title: "Pedidos",
    items: [
      {
        name: "Hacer pedido",
        path: "/orders/add",
        icon: MdOutlineShoppingCart,
      },
      {
        name: "Pedidos",
        path: "/orders/list",
        icon: MdOutlineDeliveryDining,
      },
    ],
  },
  {
    title: "Restaurante",
    items: [
      { name: "Clientes", path: "/customers/list", icon: MdOutlinePeople },
      { name: "Menus", path: "/menus/list", icon: MdOutlineRestaurantMenu },
      {
        name: "Categorías",
        path: "/categories/list",
        icon: MdOutlineCategory,
      },
      { name: "Estados", path: "/states/list", icon: MdOutlineMenuBook },
      { name: "Mesas", path: "/tables/list", icon: MdOutlineTableRestaurant },
    ],
  },
  {
    title: "Administración",
    items: [
      {
        name: "Empleados",
        path: "/employees/list",
        icon: MdOutlineSupervisorAccount,
      },
      {
        name: "Permisos",
        path: "/permissions/list",
        icon: MdOutlineRuleFolder,
      },
      { name: "Roles", path: "/roles/list", icon: MdOutlineArchive },
      {
        name: "Usuarios",
        path: "/users/list",
        icon: MdOutlinePeopleAlt,
      },
    ],
  },
];
