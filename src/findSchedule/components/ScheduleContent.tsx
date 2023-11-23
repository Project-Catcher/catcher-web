import React, { ChangeEvent } from "react";
import Card from "./Card";
import KeywordFilter, { keywordFilterType } from "./KeywordFilter";

interface ScheduleContentProps {
  keywordFilter: keywordFilterType;
  handleKeywordChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}

const ScheduleContent = ({
  keywordFilter,
  handleKeywordChange,
}: ScheduleContentProps) => {
  return (
    <div className="w-full ml-8">
      <KeywordFilter
        keywordFilter={keywordFilter}
        handleKeywordChange={handleKeywordChange}
      />
      <div className="flex flex-wrap mt-3 gap-x-3 gap-y-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* 카드 구조를 위해 빈 카드 추가 */}
        <div className="w-[260px] h-[420px] m-auto"></div>
        <div className="w-[260px] h-[420px] m-auto"></div>
        <div className="w-[260px] h-[420px] m-auto"></div>
        <div className="w-[260px] h-[420px] m-auto"></div>
      </div>
    </div>
  );
};

export default ScheduleContent;
