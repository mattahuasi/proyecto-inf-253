import { MdOutlineFilterAlt, MdOutlineReplay } from "react-icons/md";
import { Column, Data } from "../types";



export const Table = ({
  columns,
  data,
}: {
  columns: Column[];
  data: Data[];
}) => {
  return (
    <>
      <div className="flex justify-between items-center font-bold text-[14px] text-[#202224] border rounded-[10px] border-[#d5d5d5] mb-6">
        <p className="px-[26px] pt-[26px] pb-[25px]">
          <MdOutlineFilterAlt className="text-2xl" />
        </p>
        <p className="px-[26px] pt-[26px] pb-[25px] font-bold text-[14px] text-[#202224] border-l border-[#979797] border-opacity-65">
          Filter By
        </p>
        <p className="px-[26px] pt-[26px] pb-[25px] font-bold text-[14px] text-[#202224] border-l border-[#979797] border-opacity-65">
          <input type="date" name="" id="" />
        </p>
        <p className="px-[26px] pt-[26px] pb-[25px] font-bold text-[14px] text-[#202224] border-l border-[#979797] border-opacity-65">
          Order Type
        </p>
        <p className="px-[26px] pt-[26px] pb-[25px] font-bold text-[14px] text-[#202224] border-l border-[#979797] border-opacity-65">
          Order Status
        </p>
        <p className="flex items-center gap-2 px-[26px] pt-[26px] pb-[25px] font-bold text-[14px] text-[#ea0234] border-l border-[#979797] border-opacity-65">
          <span className="text-lg">
            <MdOutlineReplay />
          </span>
          Reset Filter
        </p>
      </div>

      <div className="border border-[#b9b9b9] rounded-[14px]">
        <table className="w-full bg-white rounded-[14px]">
          <thead>
            <tr className="bg-[#fcfdfd] border-b border-[#d5d5d5] rounded-t-[14px]">
              {columns.map((column) => (
                <td
                  className="rounded-full font-extrabold text-sm opacity-90 px-8 py-[15px] "
                  key={column.key}
                >
                  {column.title}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                className={`${
                  index < data.length - 1 ? "border-b border-[#979797]" : ""
                }`}
                key={item.id}
              >
                {columns.map((column) => (
                  <td
                    className="font-semibold text-sm opacity-90 px-8 py-7 "
                    key={column.key}
                  >
                    {item[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
};
