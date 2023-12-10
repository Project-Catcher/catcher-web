// 일정 찾기 페이지 필터
import React, { Dispatch, SetStateAction } from "react";
import DurationTab from "./DurationTab";
import ExpenseTab from "./ExpenseTab";
import FilterTab from "./FilterTab";
import LocationTab from "./LocationTab";
import { DateProps, ShowCalendarType } from "./Page";
import PersonnelTab from "./PersonnelTab";
import ThemeTab from "./ThemeTab";

interface ScheduleFilterProps {
  handleReset: VoidFunction;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  date: DateProps;
  showCalendar: ShowCalendarType;
  handleCalendarClick: (type: "start" | "end") => void;
  handleStartDateChange: (newDate: Date) => void;
  handleEndDateChange: (newDate: Date) => void;
  expense: string;
  handleExpenseChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  personnel: string;
  handlePersonnelChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ScheduleFilter = ({
  handleReset,
  theme,
  setTheme,
  date,
  showCalendar,
  handleCalendarClick,
  handleStartDateChange,
  handleEndDateChange,
  expense,
  handleExpenseChange,
  personnel,
  handlePersonnelChange,
}: ScheduleFilterProps) => {
  return (
    <div className="inline-block min-w-[280px] max-w-[280px] bg-neutral-50 h-full">
      <FilterTab handleReset={handleReset} />
      <ThemeTab theme={theme} setTheme={setTheme} />
      <DurationTab
        date={date}
        showCalendar={showCalendar}
        handleCalendarClick={handleCalendarClick}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
      />
      <ExpenseTab expense={expense} handleExpenseChange={handleExpenseChange} />
      <LocationTab />
      <PersonnelTab
        personnel={personnel}
        handlePersonnelChange={handlePersonnelChange}
      />
    </div>
  );
};

export default ScheduleFilter;
