// 제목, 달력 필터 컴포넌트
import React, { Dispatch, SetStateAction } from "react";
import { DateProps } from "./All";
import InputCalender from "./InputCalender";

interface ShowCalendarType {
  start: boolean;
  end: boolean;
}

interface ContentFilterProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  date: DateProps;
  setDate: Dispatch<SetStateAction<DateProps>>;
  showCalendar: ShowCalendarType;
  handleCalendarClick: (type: "start" | "end") => void;
  handleStartDateChange: (newDate: Date) => void;
  handleEndDateChange: (newDate: Date) => void;
  onClickSearch: () => void;
}

const ContentFilter = ({
  title,
  setTitle,
  date,
  setDate,
  showCalendar,
  handleCalendarClick,
  handleStartDateChange,
  handleEndDateChange,
  onClickSearch,
}: ContentFilterProps) => {
  return (
    <div className="flex items-center justify-center w-full py-3 bg-white">
      <div className="mr-2 text-sm font-light text-zinc-800">일정 제목</div>
      <div className="w-1/6 h-[38px] bg-white rounded-[5px] border border-neutral-200 flex items-center mr-6">
        <input
          className="w-full px-2 py-1 text-sm font-normal text-zinc-500 focus:outline-none"
          placeholder="일정 제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="ml-6 mr-2 text-sm font-light text-zinc-800">
        모집 기간
      </div>
      <InputCalender
        date={date.start}
        visible={showCalendar.start}
        placeholder={"모집 시작일"}
        handleCalendarClick={() => handleCalendarClick("start")}
        handleDateChange={handleStartDateChange}
      />
      <div className="px-2">-</div>
      <InputCalender
        date={date.end}
        visible={showCalendar.end}
        placeholder={"모집 종료일"}
        handleCalendarClick={() => handleCalendarClick("end")}
        handleDateChange={handleEndDateChange}
      />
      <button
        className="ml-3 w-[90px] h-10 bg-pink-400 rounded-[5px] text-white text-sm font-bold"
        onClick={onClickSearch}
      >
        찾기
      </button>
    </div>
  );
};

export default ContentFilter;
