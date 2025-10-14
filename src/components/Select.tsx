import { forwardRef } from "react";

interface SelectItem {
  id: string | number; // Si necesitas que `id` pueda ser numérico, lo puedes ajustar.
  name: string;
}

interface SelectProps<T> {
  id: string;
  label: string;
  list: T[];
  error?: string;
  disabled?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps<SelectItem>>(
  ({ id, label, list, error, disabled, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-2">
        <label
          className="font-semibold text-sm text-gray-900 dark:text-gray-100 opacity-80"
          htmlFor={id}
        >
          {label}:
        </label>

        <select
          className="w-full py-3 text-sm bg-gray-100 rounded-lg border border-gray-300 outline-none transition-all duration-300 ease-in-out"
          name={id}
          id={id}
          disabled={disabled}
          ref={ref}
          {...props}
        >
          <option defaultValue={""}>Selecciona una opción</option>
          {list?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <p className="ml-2 text-xs text-red-500">{error}</p>
      </div>
    );
  }
);
