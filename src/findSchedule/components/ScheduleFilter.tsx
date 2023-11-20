// 일정 찾기 페이지 필터
import React, { Dispatch, SetStateAction } from "react";
import FilterTab from "./FilterTab";
import ThemeTab from "./ThemeTab";

interface ScheduleFilterProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ScheduleFilter = ({ theme, setTheme }: ScheduleFilterProps) => {
  return (
    <div className="inline-block w-[281px] bg-neutral-50 h-full">
      <FilterTab />
      <ThemeTab theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default ScheduleFilter;
