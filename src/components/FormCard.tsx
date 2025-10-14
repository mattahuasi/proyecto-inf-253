import { ReactNode } from "react";
import { SubmitButton } from "./SubmitButton";

interface FormProps {
  onSubmit: () => void;
  children: ReactNode;
}

export const FormCard = ({ onSubmit, children }: FormProps) => {
  return (
    <form
      className="p-4 lg:px-32 lg:py-12 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-900"
      onSubmit={onSubmit}
    >
      {children}

      <div className="flex justify-center items-centermt-8">
        <SubmitButton label="Agregar" />
      </div>
    </form>
  );
};
