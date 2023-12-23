import { PIXEL } from "@create-schedule/constants";
import {
  calculateItemHeight,
  calculateTableHeight,
  calculateTop,
} from "@create-schedule/util";
import { DragEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useModal } from "@shared/hook";
import { appliedScheduleItem, selectedScheduleItem } from "@shared/recoil";
import { AppliedItem, CategoryItem } from "@shared/types";
import CategoryFrame from "./CategoryFrame";

export interface TableArrayType {
  time: number;
  cellHeight: number;
}

interface TimeTableProps {
  callType: "template" | "custom";
  initialData?: AppliedItem[];
}

const TimeTable = ({ callType, initialData }: TimeTableProps) => {
  const [tableArray, setTableArray] = useState<TableArrayType[]>(
    Array.from({ length: 25 }, (_, index) => ({
      time: index,
      cellHeight: PIXEL.cellHeight,
    })),
  );

  const { openModal } = useModal();
  const appliedItem = useRecoilValue(appliedScheduleItem);
  const [selectedItem, setSelectedItem] = useRecoilState(selectedScheduleItem);

  const onDrop = (e: DragEvent<HTMLTableRowElement>, index: number) => {
    setSelectedItem((prev) => ({
      ...(prev as CategoryItem),
      selectedTime: index,
    }));
    if (
      selectedItem?.title &&
      selectedItem.category &&
      selectedItem.tagBackground
    ) {
      openModal({ contentId: "scheduleTimeSelector", isHeaderCloseBtn: true });
    }
    e.preventDefault();
  };

  const renderItems = (
    items: AppliedItem[],
    cellHeight: number,
    index: number,
  ) => {
    return items.map((item, _index) => {
      const { type, itemHeight } = calculateItemHeight(
        item.startTime,
        item.endTime,
      );
      const top = calculateTop(cellHeight);

      if (item.startTime.hour === index)
        return (
          <div
            key={item.category + item.tagBackground + item.startTime}
            style={type === "sameCell" ? {} : { top: top }}
            className={`${
              item.startTime.hour === item.endTime.hour ||
              (item.endTime.minute === 0 &&
                item.endTime.hour - item.startTime.hour === 1)
                ? "relative"
                : "absolute left-[80px]"
            }`}
          >
            <CategoryFrame category={[item]} itemHeight={itemHeight} />
          </div>
        );
    });
  };

  useEffect(() => {
    calculateTableHeight({ appliedItem, tableArray, setTableArray });
  }, [appliedItem]);

  return (
    <table className="w-full">
      <tbody>
        {tableArray.map(({ time, cellHeight }, index) => (
          <tr
            key={time}
            className={`${
              time !== 24 ? "border-b-[0.5px] border-b-[#ACBEFF] " : ""
            }min-h-[35px]`}
            onDrop={(e) => onDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
          >
            <td
              style={{ height: cellHeight }}
              className="relative list-item list-none text-[#ACBEFF] font-semibold leading-[22px] pl-[15px] pr-[30px] py-1.5"
            >
              <div className="inline-block w-[56px]">{time}:00</div>
              <div className="flex flex-col gap-[1px] float-right w-[250px]">
                {callType === "template"
                  ? initialData && renderItems(initialData, cellHeight, index)
                  : appliedItem && renderItems(appliedItem, cellHeight, index)}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TimeTable;
