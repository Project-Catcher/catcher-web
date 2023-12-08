import Image from "next/image";
import React, { useState } from "react";
import CategoryTitle from "./CategoryTitle";
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
      <CategoryTitle title="기간" />
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
