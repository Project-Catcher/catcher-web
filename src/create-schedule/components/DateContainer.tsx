import { handleCurrentDate } from "@create-schedule/util";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { scheduleAnswers } from "@shared/recoil";
import CurrentDate from "./CurrentDate";
import DateMoveButton from "./DateMoveButton";
import ScheduleTitle from "./ScheduleTitle";

const DateContainer = () => {
  const { startedAt, endedAt } = useRecoilValue(scheduleAnswers);
  const [currentDate, setCurrentDate] = useState(startedAt);

  const onClick = (type: "next" | "prev") => {
    if (type === "next") {
      if (
        endedAt?.getMonth() === currentDate?.getMonth() &&
        endedAt?.getDate() === currentDate?.getDate()
      )
        return;

      setCurrentDate((prev) => {
        return handleCurrentDate(prev, type);
      });
    } else if (type === "prev") {
      if (
        startedAt?.getMonth() === currentDate?.getMonth() &&
        startedAt?.getDate() === currentDate?.getDate()
      )
        return;

      setCurrentDate((prev) => {
        return handleCurrentDate(prev, type);
      });
    }
  };

  return (
    <>
      <DateMoveButton onClick={onClick} />
      <ScheduleTitle title="일정표" />
      <CurrentDate currentDate={currentDate} />
    </>
  );
};

export default DateContainer;
