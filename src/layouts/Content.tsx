import { ReactNode } from "react";

export const Content = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <h2 className="font-bold text-[32px]">{title}</h2>
      {children}
    </div>
  );
};
