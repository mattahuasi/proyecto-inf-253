import { ReactNode } from "react";

interface HeaderProps {
  title: string;
  children?: ReactNode;
}

export const Header = ({ title, children }: HeaderProps) => {
  return (
    <header
      className={`flex  ${
        children ? "justify-between" : "justify-start"
      } items-center gap-4 mb-5 truncate`}
    >
      <h2 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {children}
    </header>
  );
};
