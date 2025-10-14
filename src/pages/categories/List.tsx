import { useEffect, useState } from "react";
import { AddButton } from "../../components/AddButton";
import { DataTable } from "../../components/DataTable";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useRequest } from "../../hooks/useRequest";
import { Category } from "../../interfaces/category";
import { deserialized } from "../../libs/fractal";
import { getCategoriesRequest } from "../../services/categories";

export default function CategoriesList() {
  const { response, loading, error } = useRequest(getCategoriesRequest);
  const [categories, setCategories] = useState<Category[]>([]);

  const columns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Nombre" },
    { key: "slug", title: "Slug" },
    { key: "description", title: "Descripción" },
    { key: "priority", title: "Prioridad" },
  ];

  useEffect(() => {
    setCategories(deserialized(response?.data || []));
  }, [response]);

  return (
    <section>
      <Header title="Lista de categorías">
        <AddButton label="Agregar categoría" path="/categories/add" />
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <DataTable data={categories} columns={columns} />
      )}

      {error && <p>Error: {error.message}</p>}
    </section>
  );
}
