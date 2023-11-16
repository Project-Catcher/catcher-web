import { DragEvent, useMemo } from "react";

interface TimeTableProps {
  onDrop: (e: DragEvent<HTMLTableRowElement>, index: number) => void;
}

const TimeTable = ({ onDrop }: TimeTableProps) => {
  const tableArray = useMemo(
    () => Array.from({ length: 25 }, (_, index) => index),
    [],
  );

  return (
    <table className="w-full">
      <tbody>
        {tableArray.map((time, index) => (
          <tr
            key={time}
            className={`${
              time !== 24 ? "border-b-[0.5px] border-b-[#ACBEFF] " : ""
            }min-h-[35px]`}
            onDrop={(e) => onDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
          >
            <td className="text-[#ACBEFF] font-semibold leading-[22.5px] px-[15px] py-[6px]">
              {time}:00
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TimeTable;
