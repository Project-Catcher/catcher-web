import CurrentDate from "./CurrentDate";
import DateMoveButton from "./DateMoveButton";
import ScheduleTitle from "./ScheduleTitle";
import TimeTable from "./TimeTable";

interface TimeTableContainerProps {}

const TimeTableContainer = ({}: TimeTableContainerProps) => {
  return (
    <>
      <div className="min-w-[362px] max-w-[362px]">
        <DateMoveButton />
        <ScheduleTitle title="일정표" />
        <CurrentDate />
        <div className="w-full border border-[#ACBEFF] rounded-[5px] bg-[#FFF9FC]">
          <TimeTable />
        </div>
      </div>
    </>
  );
};

export default TimeTableContainer;
