import { ReactNode } from "react";

interface InputGroupProps {
  legend: string;
  children: ReactNode;
  error?: string;
}

export const InputGroup = ({ legend, children, error }: InputGroupProps) => {
  return (
    <fieldset className="flex flex-col">
      <legend className="text-gray-900 dark:text-gray-100 opacity-80 font-semibold text-sm mb-2">
        {legend}
      </legend>

      <div className="flex flex-wrap gap-2 lg:gap-6">{children}</div>

      {error && <p className="ml-2 text-xs text-red-500 mt-1">{error}</p>}
    </fieldset>
  );
};
