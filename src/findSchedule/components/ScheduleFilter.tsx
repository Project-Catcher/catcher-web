// 일정 찾기 페이지 필터
import React, { Dispatch, SetStateAction } from "react";
import DurationTab from "./DurationTab";
import FilterTab from "./FilterTab";
import { DateProps, ShowCalendarType } from "./Page";
import ThemeTab from "./ThemeTab";

interface ScheduleFilterProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  date: DateProps;
  showCalendar: ShowCalendarType;
  handleCalendarClick: (type: "start" | "end") => void;
  handleStartDateChange: (newDate: Date) => void;
  handleEndDateChange: (newDate: Date) => void;
}

const ScheduleFilter = ({
  theme,
  setTheme,
  date,
  showCalendar,
  handleCalendarClick,
  handleStartDateChange,
  handleEndDateChange,
}: ScheduleFilterProps) => {
  return (
    <div className="inline-block w-[281px] bg-neutral-50 h-full">
      <FilterTab />
      <ThemeTab theme={theme} setTheme={setTheme} />
      <DurationTab
        date={date}
        showCalendar={showCalendar}
        handleCalendarClick={handleCalendarClick}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
      />
    </div>
  );
};

export default ScheduleFilter;
