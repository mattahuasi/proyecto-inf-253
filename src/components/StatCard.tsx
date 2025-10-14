import { ReactNode } from "react";
import { MdOutlineTrendingDown, MdOutlineTrendingUp } from "react-icons/md";

interface StatCardProps {
  title: string;
  counter: string;
  icon: ReactNode;
  iconColor: string;
  percentage: string;
  detail: string;
  isUp: boolean;
}

export const StatCard = ({
  title,
  counter,
  icon,
  iconColor,
  percentage,
  detail,
  isUp,
}: StatCardProps) => {
  return (
    <article className="flex flex-col gap-7 p-4 bg-gray-100 dark:bg-gray-900 rounded-md shadow-md">
      <div className="flex gap-20">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-400 opacity-70">
            {title}
          </h3>
          <p className="font-bold text-2xl text-gray-900 dark:text-gray-100">
            {counter}
          </p>
        </div>
        <div
          className={`w-14 h-14 flex justify-center items-center text-3xl rounded-3xl`}
          style={{
            color: iconColor,
            backgroundColor: iconColor + "36",
          }}
        >
          {icon}
        </div>
      </div>

      <p className="flex items-center gap-1 text-base font-semibold text-gray-500 dark:text-gray-400">
        {isUp ? (
          <MdOutlineTrendingUp className="text-2xl text-green-500" />
        ) : (
          <MdOutlineTrendingDown className="text-2xl text-red-500" />
        )}
        <span className={isUp ? "text-green-500" : "text-red-500"}>
          {percentage}%
        </span>
        {detail}
      </p>
    </article>
  );
};
