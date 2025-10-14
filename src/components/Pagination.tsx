import { Table } from "@tanstack/react-table";
import {
  MdOutlineFirstPage,
  MdOutlineLastPage,
  MdOutlineNavigateBefore,
  MdOutlineNavigateNext,
} from "react-icons/md";

interface PaginationProps<T> {
  table: Table<T>;
}

export const Pagination = <T,>({ table }: PaginationProps<T>) => {
  const classDisabled = "text-gray-400 dark:text-gray-500";

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-16 px-4 lg:px-16">
      <div className="text-2xl lg:text-4xl text-gray-900 dark:text-gray-100">
        <button
          className={!table.getCanPreviousPage() ? classDisabled : ""}
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <MdOutlineFirstPage />
        </button>

        <button
          className={!table.getCanPreviousPage() ? classDisabled : ""}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <MdOutlineNavigateBefore />
        </button>
        <button
          className={!table.getCanNextPage() ? classDisabled : ""}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {" "}
          <MdOutlineNavigateNext />
        </button>
        <button
          className={!table.getCanNextPage() ? classDisabled : ""}
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          <MdOutlineLastPage />
        </button>
      </div>

      <div className="flex items-center gap-2 lg:gap-6 text-sm text-gray-900 dark:text-gray-100">
        <p>
          Pagina <strong>{table.getState().pagination.pageIndex + 1}</strong> de{" "}
          <strong>{table.getPageCount().toLocaleString()}</strong>
        </p>
        <span>|</span>
        <div className="flex items-center gap-2">
          <p>Ir a la pagina:</p>
          <input
            className="block w-16 lg:w-20 text-center text-sm text-gray-800 dark:text-gray-200 bg-gray-300 dark:bg-gray-600 rounded-3xl py-2 border-none ring-1 ring-gray-400 dark:ring-gray-400 placeholder:text-gray-400 placeholder:text-sm dark:placeholder:text-gray-200 outline-none hover:ring-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </div>
      </div>

      <select
        className="block text-sm text-gray-800 dark:text-gray-200 bg-gray-300 dark:bg-gray-600 rounded-3xl py-2 border-none ring-1 ring-gray-400 dark:ring-gray-400 placeholder:text-gray-400 placeholder:text-sm dark:placeholder:text-gray-200 outline-none hover:ring-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 ease-in-out"
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Mostrar {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
