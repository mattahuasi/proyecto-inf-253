import { Link } from "react-router";

interface AddButtonProps {
  label: string;
  path: string;
}

export const AddButton = ({ label, path }: AddButtonProps) => {
  return (
    <Link
      className="inline-block px-5 py-3 rounded-lg shadow-lg text-sm text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out"
      to={path}
      viewTransition
    >
      {label}
    </Link>
  );
};
