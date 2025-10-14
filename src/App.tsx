import { Route, Routes } from "react-router";
import { Slide, ToastContainer } from "react-toastify";
import { ProtectedRoutes } from "./guards/ProtectedRoutes";
import { RootRedirect } from "./guards/RootRedirect";
import { AuthLayout } from "./layouts/AuthLayout";
import { GuestLayout } from "./layouts/GuestLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CategoryAdd from "./pages/categories/Add";
import CategoryEdit from "./pages/categories/Edit";
import CategoriesList from "./pages/categories/List";
import CustomerAdd from "./pages/customers/Add";
import CustomerEdit from "./pages/customers/Edit";
import CustomersList from "./pages/customers/List";
import EmployeeAdd from "./pages/employees/Add";
import EmployeeEdit from "./pages/employees/Edit";
import EmployeesList from "./pages/employees/List";
import MenuAdd from "./pages/menus/Add";
import MenuEdit from "./pages/menus/Edit";
import MenusList from "./pages/menus/List";
import OrderAdd from "./pages/orders/Add";
import OrdersList from "./pages/orders/List";
import PermissionsList from "./pages/permissions/List";
import RoleAdd from "./pages/roles/Add";
import RoleEdit from "./pages/roles/Edit";
import RolesList from "./pages/roles/List";
import StateAdd from "./pages/states/Add";
import StateEdit from "./pages/states/Edit";
import StatesList from "./pages/states/List";
import TableAdd from "./pages/tables/Add";
import TableEdit from "./pages/tables/Edit";
import TablesList from "./pages/tables/List";
import UserAdd from "./pages/users/Add";
import UserEdit from "./pages/users/Edit";
import UsersList from "./pages/users/List";

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />

      <Routes>
        <Route path="/" element={<RootRedirect />} />

        <Route path="auth" element={<GuestLayout />}>
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<h1>Pagina en construcción</h1>} />
        </Route>

        <Route path="dashboard" element={<AuthLayout />}>
          <Route
            index
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="orders" element={<AuthLayout />}>
          <Route
            index
            path="list"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <OrdersList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <OrderAdd />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="customers" element={<AuthLayout />}>
          <Route
            index
            path="list"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <CustomersList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <CustomerAdd />
              </ProtectedRoutes>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <CustomerEdit />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="menus" element={<AuthLayout />}>
          <Route
            index
            path="list"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <MenusList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <MenuAdd />
              </ProtectedRoutes>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <MenuEdit />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="categories" element={<AuthLayout />}>
          <Route
            index
            path="list"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <CategoriesList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <CategoryAdd />
              </ProtectedRoutes>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <CategoryEdit />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="states" element={<AuthLayout />}>
          <Route
            index
            path="list"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <StatesList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <StateAdd />
              </ProtectedRoutes>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <StateEdit />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="tables" element={<AuthLayout />}>
          <Route
            index
            path="list"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <TablesList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <TableAdd />
              </ProtectedRoutes>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <TableEdit />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="employees" element={<AuthLayout />}>
          <Route
            index
            path="list"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <EmployeesList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <EmployeeAdd />
              </ProtectedRoutes>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <EmployeeEdit />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="permissions" element={<AuthLayout />}>
          <Route
            index
            path="list"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <PermissionsList />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="roles" element={<AuthLayout />}>
          <Route
            index
            path="list"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <RolesList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <RoleAdd />
              </ProtectedRoutes>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <RoleEdit />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="users" element={<AuthLayout />}>
          <Route
            index
            path="list"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <UsersList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <UserAdd />
              </ProtectedRoutes>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoutes allowedRoles={["Super admin"]}>
                <UserEdit />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
