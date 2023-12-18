import { keywordRanges } from "@findSchedule/const";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { findSchedule } from "@pages/api/findSchedule";
import { CardType } from "./Card";
import { DateProps } from "./DurationTab";

interface KeywordFilterProps {
  theme: string;
  date: DateProps;
  expense?: number;
  location: string;
  personnel?: number;
  updateCardList: (newCardList: CardType[]) => void;
  handleCardCount: (count: number) => void;
}

const KeywordFilter = ({
  theme,
  date,
  expense,
  location,
  personnel,
  updateCardList,
  handleCardCount,
}: KeywordFilterProps) => {
  const [keywordFilter, setKeywordFilter] = useState({
    option: 1,
    keyword: "",
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  const handleKeywordChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setKeywordFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClickSearch = () => {
    const params = {
      theme: theme,
      dateStart: date.start?.toISOString() ?? "",
      dateEnd: date.end?.toISOString() ?? "",
      expense: expense,
      location: location,
      personnel: personnel,
      keywordOption: keywordFilter.option,
      keyword: keywordFilter.keyword,
    };

    findSchedule(params).then((res) => {
      updateCardList(res);
      handleCardCount(res.length);
      setKeywordFilter((prev) => ({
        ...prev,
        keyword: "",
      }));
    });
  };

  return (
    <div className="flex items-center justify-between pb-3 border-b">
      <div className="text-3xl font-bold text-zinc-800">일정 찾기</div>
      <div className="flex gap-1">
        <div className="relative">
          <select
            className="block w-[90px] h-[38px] px-3 py-2 text-sm bg-white border rounded-md shadow appearance-none hover:border-gray-400 focus:outline-none focus:shadow-outline border-neutral-200"
            name="option"
            value={keywordFilter.option}
            onChange={handleKeywordChange}
          >
            {keywordRanges.map((keyword, i) => (
              <option key={`keyword-${i}`} value={keyword.value}>
                {keyword.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.3 7.7L10 12.4 14.7 7.7 16 9l-6 6-6-6z" />
            </svg>
          </div>
        </div>
        <div className="w-full h-[38px] bg-white rounded-md border border-neutral-200 flex items-center hover:border-gray-400 focus:shadow-outline focus:outline-none shadow">
          <input
            className="w-full h-full px-2 py-1 text-sm font-normal rounded-md text-zinc-500 focus:outline-none"
            placeholder="키워드를 입력하세요."
            name="keyword"
            value={keywordFilter.keyword}
            onChange={handleKeywordChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          className="w-[100px] h-[38px] px-5 bg-pink-400 rounded-[5px] text-white hover:bg-pink-500"
          onClick={onClickSearch}
        >
          <span>찾기</span>
        </button>
      </div>
    </div>
  );
};

export default KeywordFilter;
