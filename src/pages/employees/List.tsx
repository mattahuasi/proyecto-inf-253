import { useEffect, useState } from "react";
import { AddButton } from "../../components/AddButton";
import { DataTable } from "../../components/DataTable";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useRequest } from "../../hooks/useRequest";
import { Employee } from "../../interfaces/employee";
import { deserialized } from "../../libs/fractal";
import { getEmployeesRequest } from "../../services/employees";

export default function EmployeesList() {
  const { response, loading, error } = useRequest(getEmployeesRequest);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const columns = [
    { key: "id", title: "ID" },
    { key: "paternalSurname", title: "Apellido Paterno" },
    { key: "maternalSurname", title: "Apellido Materno" },
    { key: "names", title: "Nombres" },
    { key: "gender", title: "Genero" },
    { key: "phone", title: "Teléfono" },
    { key: "type", title: "Tipo" },
  ];

  useEffect(() => {
    setEmployees(deserialized(response?.data || []));
  }, [response]);

  return (
    <section>
      <Header title="Lista de empleados">
        <AddButton label="Agregar empleado" path="/employees/add" />
      </Header>

      {loading ? <Loading /> : <DataTable data={employees} columns={columns} />}

      {error && <p>Error: {error.message}</p>}
    </section>
  );
}
