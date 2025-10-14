import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { TableAction, TableColumn } from "../types";
import { Dropdown } from "./Dropdown";
import { Pagination } from "./Pagination";

interface DataTableProps<T> {
  data: T[] | null;
  columns: TableColumn[];
  actions?: TableAction[];
}

export const DataTable = <T,>({
  data,
  columns: baseColumns,
  actions,
}: DataTableProps<T>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const columns: ColumnDef<T>[] = baseColumns.map((col) => ({
    header: col.title,
    accessorKey: col.key as string,
  }));

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="flex flex-col justify-center border border-gray-200 pb-5 dark:border-gray-700 items-center gap-8 bg-gray-100 dark:bg-gray-900 rounded-md">
      <div className="w-full overflow-x-auto border-b rounded-b-none rounded-md border-gray-200 bg-gray-100 dark:bg-gray-900 dark:border-gray-700">
        <table className="table-auto w-full">
          <thead className="border-b border-gray-200 dark:border-gray-700">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                className="font-bold text-xs text-left text-gray-900 dark:text-gray-100 uppercase break-words truncate"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <th className="py-4 px-8 " key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
                {actions && actions?.length > 0 ? (
                  <th className="py-4 px-8">Acciones</th>
                ) : (
                  ""
                )}
              </tr>
            ))}
          </thead>

          {data?.length === 0 ? (
            <tr>
              <td
                colSpan={
                  columns.length + (actions && actions.length > 0 ? 1 : 0)
                }
                className="text-center text-gray-900 dark:text-gray-100 text-sm py-4"
              >
                No hay datos para mostrar
              </td>
            </tr>
          ) : (
            <tbody>
              {table.getRowModel().rows.map((row, index) => (
                <tr
                  className={
                    table.getRowModel().rows.length - 1 !== index
                      ? "border-b border-gray-200 dark:border-gray-700"
                      : ""
                  }
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className="text-sm py-4 px-8 text-gray-900 dark:text-gray-100 opacity-90"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                  {actions && actions?.length > 0 ? (
                    <td className="py-4 px-8 text-center">
                      <Dropdown
                        Icon={MdOutlineMoreVert}
                        items={actions.map((action) => ({
                          ...action,
                          onClick: () => action.onClick(row),
                        }))}
                      />
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      <Pagination table={table} />

      <div className="text-xs lg:text-sm text-center text-gray-900 dark:text-gray-100">
        Mostrando {table.getRowModel().rows.length.toLocaleString()} de{" "}
        {table.getRowCount().toLocaleString()} filas
      </div>
    </div>
  );
};
