import { TableArrayType } from "@create-schedule/components/TimeTable";
import { PIXEL, TIME } from "@create-schedule/constants";
import { Dispatch, SetStateAction } from "react";
import { AppliedItem, CategoryTags, Start2EndTime } from "@shared/types";

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

export const handleTimeFormat = (time: Start2EndTime) => {
  const startHour = parseInt(time.start.hour, 10);
  const startMin = parseInt(time.start.minute, 10);
  const endHour = parseInt(time.end.hour, 10);
  const endMin = parseInt(time.end.minute, 10);

  return { startHour, startMin, endHour, endMin };
};

interface HandleDurationProps {
  time: Start2EndTime;
  setDuration: Dispatch<SetStateAction<number>>;
}

export const handleDuration = ({ time, setDuration }: HandleDurationProps) => {
  const { startHour, startMin, endHour, endMin } = handleTimeFormat(time);
  if (endMin < startMin) {
    const hour = endHour - startHour - 1;
    const min = 60 + endMin - startMin;
    setDuration(hour + min / 60);

    return;
  }

  const hour = endHour - startHour;
  const min = endMin - startMin;
  setDuration(hour + min / 60);
};

export const checkDuplication = (
  startHour: number,
  startMin: number,
  endHour: number,
  endMin: number,
  appliedItem: AppliedItem[] | null,
) => {
  // 이미 존재하는 테이블 아이템에 대해 검사
  if (appliedItem) {
    const isDuplicated = appliedItem.map((item) => {
      const startRange = item.startTime.hour * 60 + item.startTime.minute;
      const endRange = item.endTime.hour * 60 + item.endTime.minute;
      const newItemStartRange = startHour * 60 + startMin;
      const newItemEndRange = endHour * 60 + endMin;

      if (startRange <= newItemStartRange && endRange > newItemStartRange) {
        return true;
      } else if (newItemEndRange > startRange && newItemEndRange <= endRange) {
        return true;
      } else if (startRange > newItemStartRange && endRange < newItemEndRange) {
        return true;
      }
      return false;
    });

    return isDuplicated;
  }
  // 테이블이 비었을 경우
  return [false];
};

export const sortByStartTime = (appliedItem: AppliedItem[]) => {
  appliedItem.sort((a, b) => {
    if (a.startTime.hour !== b.startTime.hour) {
      return a.startTime.hour - b.startTime.hour;
    }
    return a.startTime.minute - b.startTime.minute;
  });
};

export const handleImageSrc = (category: CategoryTags) => {
  switch (category) {
    case "영화":
      return "/images/samples/category_movie.svg";
    case "축제":
      return "/images/samples/category_festival.svg";
    case "캠핑":
      return "/images/samples/category_camping.svg";
    case "관광":
      return "/images/samples/category_tour.svg";
    case "쇼핑":
      return "/images/samples/category_shopping.svg";
    case "음식점":
      return "/images/samples/category_food.svg";
    case "문화생활":
      return "/images/samples/category_culture.svg";
    case "등산":
      return "/images/samples/category_hiking.svg";
    case "기타":
      return "/images/samples/category_etc.svg";
  }
};

export const handleDateFormat = (value: Date) => {
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

export const handleCurrentDate = (prev: Date | null, type: "next" | "prev") => {
  if (prev && type === "next") {
    const newDate = new Date(
      prev.getFullYear(),
      prev.getMonth(),
      prev.getDate() + 1,
    );

    return newDate;
  } else if (prev && type === "prev") {
    const newDate = new Date(
      prev.getFullYear(),
      prev.getMonth(),
      prev.getDate() - 1,
    );

    return newDate;
  }

  return null;
};
