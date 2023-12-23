import ScheduleTitle from "./ScheduleTitle";
import ShowSelectedDate from "./ShowSelectedDate";
import ShowSelectedItem from "./ShowSelectedItem";
import TimeDetailSelector from "./TimeDetailSelector";

const TimeModal = () => {
  return (
    <>
      <ScheduleTitle title="일정 등록" />
      <ShowSelectedItem />
      <ShowSelectedDate />
      <TimeDetailSelector />
    </>
  );
};

export default TimeModal;
