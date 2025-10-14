import { ReactNode } from "react";

interface FieldsetCardProps {
  legend: string;
  children: ReactNode;
}

export const FieldsetCard = ({ legend, children }: FieldsetCardProps) => {
  return (
    <fieldset className="grid lg:grid-cols-2 gap-2 lg:gap-8 mb-8">
      <legend className="text-gray-900 dark:text-gray-100 opacity-70 font-bold uppercase text-sm mb-2 lg:mb-4">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
};
