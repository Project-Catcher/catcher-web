import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSetRecoilState } from "recoil";
import { scheduleAnswers } from "@shared/recoil";

const CalendarSelector = () => {
  const setAnswer = useSetRecoilState(scheduleAnswers);

  const handleStartedAt = (startedAt: string) => {
    setAnswer((prev) => ({ ...prev, startedAt }));
  };

  return (
    <Calendar
      onChange={(value) => {
        const date = new Date(value as Date);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        handleStartedAt(`${year}.${month}.${day}`);
      }}
    />
  );
};

export default CalendarSelector;
