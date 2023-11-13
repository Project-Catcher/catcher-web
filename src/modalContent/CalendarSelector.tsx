import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSetRecoilState } from "recoil";
import { scheduleAnswers } from "@shared/recoil";

interface CalendarSelectorProps {
  type: "startedAt" | "endedAt";
}

const CalendarSelector = ({ type }: CalendarSelectorProps) => {
  const setAnswer = useSetRecoilState(scheduleAnswers);

  const handleDate = (value: string) => {
    setAnswer((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <Calendar
      onChange={(value) => {
        const date = new Date(value as Date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        handleDate(`${year}.${month}.${day}`);
      }}
    />
  );
};

export default CalendarSelector;
