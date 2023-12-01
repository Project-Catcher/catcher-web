import DateContainer from "./DateContainer";
import TimeTable from "./TimeTable";

interface TimeTableContainerProps {}

const TimeTableContainer = ({}: TimeTableContainerProps) => {
  return (
    <>
      <div className="min-w-[362px] max-w-[362px]">
        <DateContainer />
        <div className="w-full border border-[#ACBEFF] rounded-[5px] bg-[#FFF9FC]">
          <TimeTable callType="custom" />
        </div>
      </div>
    </>
  );
};

export default TimeTableContainer;
