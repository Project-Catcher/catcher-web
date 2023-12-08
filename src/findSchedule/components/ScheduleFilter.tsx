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
  theme: string;
  date: DateProps;
  showCalendar: ShowCalendarType;
  expense: string;
  personnel: string;
  handleTab: (theme: string) => void;
  handleCalendarClick: (type: "start" | "end") => void;
  handleDateChange: (type: "start" | "end", newDate: Date) => void;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset: VoidFunction;
}

const ScheduleFilter = ({
  handleReset,
  theme,
  date,
  showCalendar,
  expense,
  personnel,
  handleTab,
  handleCalendarClick,
  handleDateChange,
  handleRadioChange,
}: ScheduleFilterProps) => {
  return (
    <div className="inline-block min-w-[280px] max-w-[280px] bg-neutral-50 h-full">
      <FilterTab handleReset={handleReset} />
      <ThemeTab theme={theme} handleTab={handleTab} />
      <DurationTab
        date={date}
        showCalendar={showCalendar}
        handleCalendarClick={handleCalendarClick}
        handleDateChange={handleDateChange}
      />
      <ExpenseTab expense={expense} handleExpenseChange={handleRadioChange} />
      <LocationTab />
      <PersonnelTab
        personnel={personnel}
        handlePersonnelChange={handleRadioChange}
      />
    </div>
  );
};

export default ScheduleFilter;
