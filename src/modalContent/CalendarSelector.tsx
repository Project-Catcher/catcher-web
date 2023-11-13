import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSetRecoilState } from "recoil";
import { useModal } from "@shared/hook";
import { scheduleAnswers } from "@shared/recoil";

interface CalendarSelectorProps {
  type: "startedAt" | "endedAt";
}

const CalendarSelector = ({ type }: CalendarSelectorProps) => {
  const { closeModal } = useModal();
  const setAnswer = useSetRecoilState(scheduleAnswers);

  const handleDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = String(date.getDate()).padStart(2, "0");
    setAnswer((prev) => ({ ...prev, [type]: `${year}.${month}.${day}` }));
    closeModal();
  };

  return (
    <Calendar
      onChange={(value) => {
        const date = new Date(value as Date);
        handleDate(date);
      }}
    />
  );
};

export default CalendarSelector;
