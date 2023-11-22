import Image from "next/image";
import React, { useState } from "react";
import InputCalender from "./InputCalendar";
import { DateProps, ShowCalendarType } from "./Page";

interface DurationTabProps {
  date: DateProps;
  showCalendar: ShowCalendarType;
  handleCalendarClick: (type: "start" | "end") => void;
  handleStartDateChange: (newDate: Date) => void;
  handleEndDateChange: (newDate: Date) => void;
}

const DurationTab = ({
  date,
  showCalendar,
  handleCalendarClick,
  handleStartDateChange,
  handleEndDateChange,
}: DurationTabProps) => {
  return (
    <div className="p-5 border-t">
      <div className="flex items-center">
        <Image
          src="/assets/findSchedule/category.svg"
          alt="category"
          width={24}
          height={24}
        />
        <span className="ml-2 text-base font-bold text-zinc-800">기간</span>
      </div>
      <div className="flex gap-x-[10px] flex-wrap mt-3">
        <InputCalender
          date={date.start}
          visible={showCalendar.start}
          placeholder={"시작일"}
          handleCalendarClick={() => handleCalendarClick("start")}
          handleDateChange={handleStartDateChange}
        />
        <InputCalender
          date={date.end}
          visible={showCalendar.end}
          placeholder={"종료일"}
          handleCalendarClick={() => handleCalendarClick("end")}
          handleDateChange={handleEndDateChange}
        />
      </div>
    </div>
  );
};

export default DurationTab;
