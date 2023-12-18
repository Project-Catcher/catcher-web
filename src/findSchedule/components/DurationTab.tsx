import React from "react";
import CategoryTitle from "./CategoryTitle";
import InputCalender from "./InputCalendar";
import { ShowCalendarType } from "./Page";

export interface DateProps {
  start: Date | undefined;
  end: Date | undefined;
}

interface DurationTabProps {
  date: DateProps;
  showCalendar: ShowCalendarType;
  handleCalendarClick: (type: "start" | "end") => void;
  handleDateChange: (type: "start" | "end", newDate: Date) => void;
}

const DurationTab = ({
  date,
  showCalendar,
  handleCalendarClick,
  handleDateChange,
}: DurationTabProps) => {
  return (
    <div className="p-5 border-t">
      <CategoryTitle title="기간" />
      <div className="flex gap-x-2.5 flex-wrap mt-3">
        <InputCalender
          date={date.start}
          visible={showCalendar.start}
          placeholder={"시작일"}
          handleCalendarClick={() => handleCalendarClick("start")}
          handleDateChange={(e) => {
            handleDateChange("start", e);
          }}
        />
        <InputCalender
          date={date.end}
          visible={showCalendar.end}
          placeholder={"종료일"}
          handleCalendarClick={() => handleCalendarClick("end")}
          handleDateChange={(e) => {
            handleDateChange("end", e);
          }}
        />
      </div>
    </div>
  );
};

export default DurationTab;
