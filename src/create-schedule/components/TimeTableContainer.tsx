import { DragEvent } from "react";
import CurrentDate from "./CurrentDate";
import DateMoveButton from "./DateMoveButton";
import ScheduleTitle from "./ScheduleTitle";
import TimeTable from "./TimeTable";

interface TimeTableContainerProps {
  onDrop: (e: DragEvent<HTMLTableRowElement>, index: number) => void;
}

const TimeTableContainer = ({ onDrop }: TimeTableContainerProps) => {
  return (
    <>
      <div className="w-[362px]">
        <DateMoveButton />
        <ScheduleTitle title="일정표" />
        <CurrentDate />
        <div className="w-full border border-[#ACBEFF] rounded-[5px] bg-[#FFF9FC]">
          <TimeTable onDrop={onDrop} />
        </div>
      </div>
    </>
  );
};

export default TimeTableContainer;
