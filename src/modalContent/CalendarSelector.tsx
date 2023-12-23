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
    setAnswer((prev) => ({ ...prev, [type]: date }));
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
