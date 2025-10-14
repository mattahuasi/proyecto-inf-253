import { MdOutlinePerson } from "react-icons/md";

export const Avatar = () => {
  return (
    <div className="w-10 h-10 flex justify-center items-center overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600">
      <MdOutlinePerson className="text-2xl text-gray-900 dark:text-gray-50" />
    </div>
  );
};
