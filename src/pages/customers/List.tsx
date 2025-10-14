import { useEffect, useState } from "react";
import { AddButton } from "../../components/AddButton";
import { DataTable } from "../../components/DataTable";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useRequest } from "../../hooks/useRequest";
import { Customer } from "../../interfaces/user";
import { deserialized } from "../../libs/fractal";
import { getCustomersRequest } from "../../services/customers";

export default function CustomersList() {
  const { response, loading, error } = useRequest(getCustomersRequest);
  const [customers, setCustomers] = useState<Customer[]>([]);

  const columns = [
    { key: "id", title: "ID" },
    { key: "paternalSurname", title: "Apellido Paterno" },
    { key: "maternalSurname", title: "Apellido Materno" },
    { key: "names", title: "Nombres" },
    { key: "gender", title: "Genero" },
    { key: "phone", title: "Teléfono" },
  ];

  useEffect(() => {
    setCustomers(deserialized(response?.data || []));
  }, [response]);

  return (
    <section>
      <Header title="Lista de clientes">
        <AddButton label="Agregar cliente" path="/customers/add" />
      </Header>

      {loading ? <Loading /> : <DataTable data={customers} columns={columns} />}

      {error && <p>Error: {error.message}</p>}
    </section>
  );
}
