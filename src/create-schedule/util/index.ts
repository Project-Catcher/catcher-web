import { TableArrayType } from "@create-schedule/components/TimeTable";
import { PIXEL, TIME } from "@create-schedule/constants";
import { Dispatch, SetStateAction } from "react";
import { AppliedItem } from "@shared/types";

export const calculateItemHeight = (
  start: { hour: number; minute: number },
  end: { hour: number; minute: number },
) => {
  const { hour: startHour, minute: startMin } = start;
  const { hour: endHour, minute: endMin } = end;
  const hourGap = endHour - startHour;

  if (endMin < startMin) {
    if (hourGap === 1 && endMin === 0) {
      return { type: "sameCell", itemHeight: PIXEL.itemHeight };
    } else if (hourGap === 1 && endMin !== 0) {
      return {
        type: "otherCell",
        itemHeight:
          PIXEL.itemHeight +
          ((TIME.hour + endMin - startMin) / TIME.hour) * PIXEL.cellHeight -
          PIXEL.padding * 2,
      };
    } else if (hourGap > 1 && endMin === 0) {
      return {
        type: "otherCell",
        itemHeight:
          (hourGap - 1) * PIXEL.cellHeight + PIXEL.itemHeight + PIXEL.gap * 2,
      };
    }
    return {
      type: "ohterCell",
      itemHeight:
        PIXEL.cellHeight * (hourGap - 1) +
        PIXEL.itemHeight +
        PIXEL.padding * 2 +
        PIXEL.gap * (hourGap + 1),
    };
  }
  if (endHour === startHour || (hourGap === 1 && endMin === 0)) {
    return { type: "sameCell", itemHeight: PIXEL.itemHeight };
  } else if (hourGap >= 1 && endMin !== 0) {
    return {
      type: "otherCell",
      itemHeight:
        PIXEL.cellHeight * hourGap +
        PIXEL.itemHeight * 0.25 -
        PIXEL.padding +
        PIXEL.gap * hourGap,
    };
  }

  return {
    type: "otherCell",
    itemHeight: PIXEL.cellHeight * hourGap - PIXEL.padding * 2,
  };
};

export const calculateTop = (cellHeight: number) => {
  if (cellHeight === 35) {
    return PIXEL.padding;
  } else if (cellHeight > 35 && cellHeight <= 57) {
    return PIXEL.itemHeight + PIXEL.gap + PIXEL.padding;
  } else if (cellHeight > 57 && cellHeight <= 79) {
    return (PIXEL.itemHeight + PIXEL.gap) * 2 + PIXEL.padding;
  }
  return (PIXEL.itemHeight + PIXEL.gap) * 3 + PIXEL.padding;
};

interface CalculateTableHeightProps {
  appliedItem: AppliedItem[] | null;
  tableArray: TableArrayType[];
  setTableArray: Dispatch<SetStateAction<TableArrayType[]>>;
}

export const calculateTableHeight = ({
  appliedItem,
  tableArray,
  setTableArray,
}: CalculateTableHeightProps) => {
  if (appliedItem) {
    const newTableArray = tableArray.map(({ time, cellHeight }, index) => {
      const startTableItems = appliedItem.filter(
        (item) => item.startTime.hour === time,
      ).length;

      return {
        time,
        cellHeight:
          startTableItems > 0
            ? PIXEL.cellHeight +
              (startTableItems - 1) * PIXEL.itemHeight +
              PIXEL.gap * (startTableItems - 1)
            : cellHeight,
      };
    });
    setTableArray(newTableArray);
  }
};
