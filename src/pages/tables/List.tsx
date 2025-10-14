import { Row } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import {
  MdOutlineDelete,
  MdOutlineEdit,
  MdOutlineVisibility,
} from "react-icons/md";
import { useNavigate } from "react-router";
import { AddButton } from "../../components/AddButton";
import { DataTable } from "../../components/DataTable";
import { DialogModal } from "../../components/DialogModal";
import { FieldsetCard } from "../../components/FieldsetCard";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useDialogModal } from "../../hooks/useDialogModal";
import { useRequest } from "../../hooks/useRequest";
import { Table } from "../../interfaces/table";
import { deserialized } from "../../libs/fractal";
import { getTablesRequest } from "../../services/tables";

export default function TablesList() {
  const { response, loading, error } = useRequest(getTablesRequest);
  const {
    modalIsOpen: viewModal,
    openModal: openViewModal,
    closeModal: closeViewModal,
  } = useDialogModal();
  const {
    modalIsOpen: deleteModal,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useDialogModal();
  const [tables, setTables] = useState<Table[]>([]);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const navigate = useNavigate();

  const columns = [
    { key: "id", title: "ID" },
    { key: "number", title: "Número" },
    { key: "status", title: "Estado" },
    { key: "ability", title: "Habilidad" },
  ];

  const actions = [
    {
      icon: MdOutlineVisibility,
      label: "Ver",
      onClick: (row: Row<Table>) => {
        setSelectedTable(row.original);
        openViewModal();
      },
    },
    {
      icon: MdOutlineEdit,
      label: "Editar",
      onClick: (row: Row<Table>) =>
        navigate("/tables/edit/" + row.original.id, { viewTransition: true }),
    },
    {
      icon: MdOutlineDelete,
      label: "Eliminar",
      onClick: () => console.log("Eliminar"),
    },
  ];

  useEffect(() => {
    setTables(deserialized(response?.data || []));
  }, [response]);

  return (
    <section>
      <Header title="Lista de mesas">
        <AddButton label="Agregar mesa" path="/tables/add" />
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <DataTable data={tables} columns={columns} actions={actions} />
      )}

      {error && <p>Error: {error.message}</p>}

      <DialogModal isOpen={viewModal} closeModal={closeViewModal}>
        <article className="flex flex-col justify-center items-center gap-6">
          <FieldsetCard legend="Datos personales">
            {JSON.stringify(selectedTable)}
            {/* <Input
              id="paternalSurname"
              labelText="Apellido paterno"
              type="text"
              value={selectedUser?.paternalSurname}
              placeholder="Centeno"
              disabled
            />
            <Input
              id="maternalSurname"
              labelText="Apellido materno"
              type="text"
              value={selectedUser?.maternalSurname}
              placeholder="Asensio"
              disabled
            />
            <Input
              id="names"
              labelText="Nombres"
              type="text"
              value={selectedUser?.names}
              placeholder="Laia"
              disabled
            />
            <Input
              id="phone"
              labelText="Teléfono"
              type="tel"
              value={selectedUser?.phone || undefined}
              placeholder="123456789"
              disabled
            />

            <InputGroup legend="Genero">
              <Radio
                id="female"
                labelText="Femenino"
                value={Gender.F}
                checked={selectedUser?.gender === Gender.F}
                disabled
              />
              <Radio
                id="male"
                labelText="Masculino"
                value={Gender.M}
                checked={selectedUser?.gender === Gender.M}
                disabled
              />
            </InputGroup>

            <InputGroup legend="Tipo de empleado">
              <Radio
                id="admin"
                labelText="Administrador"
                value={Type.AD}
                checked={selectedUser?.type === Type.AD}
                disabled
              />
              <Radio
                id="cook"
                labelText="Cocinero"
                value={Type.CO}
                checked={selectedUser?.type === Type.CO}
                disabled
              />
              <Radio
                id="cashier"
                labelText="Cajero"
                value={Type.CA}
                checked={selectedUser?.type === Type.CA}
                disabled
              />
              <Radio
                id="waiter"
                labelText="Mesero"
                value={Type.WA}
                checked={selectedUser?.type === Type.WA}
                disabled
              />
            </InputGroup> */}
          </FieldsetCard>
        </article>
      </DialogModal>
    </section>
  );
}
