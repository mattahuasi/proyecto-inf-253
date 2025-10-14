import { useEffect, useState } from "react";
import { AddButton } from "../../components/AddButton";
import { DataTable } from "../../components/DataTable";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useRequest } from "../../hooks/useRequest";
import { Menu } from "../../interfaces/menu";
import { deserialized } from "../../libs/fractal";
import { getMenusRequest } from "../../services/menus";

export default function MenusList() {
  const { response, loading, error } = useRequest(getMenusRequest);
  const [menus, setMenus] = useState<Menu[]>([]);

  const columns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Nombre" },
    { key: "slug", title: "Slug" },
    { key: "description", title: "Descripción" },
    { key: "price", title: "Precio" },
    { key: "stock", title: "Stock" },
    { key: "priority", title: "Prioridad" },
    { key: "enabled", title: "Habilitado" },
  ];

  useEffect(() => {
    setMenus(deserialized(response?.data || []));
  }, [response]);

  return (
    <section>
      <Header title="Lista de menús">
        <AddButton label="Agregar menú" path="/menus/add" />
      </Header>

      {loading ? <Loading /> : <DataTable data={menus} columns={columns} />}

      {error && <p>Error: {error.message}</p>}
    </section>
  );
}
