import React, { ChangeEvent } from "react";

export interface keywordFilterType {
  option: string;
  keyword: string;
}

interface KeywordFilterProps {
  keywordFilter: keywordFilterType;
  handleKeywordChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}

const KeywordFilter = ({
  keywordFilter,
  handleKeywordChange,
}: KeywordFilterProps) => {
  const { option, keyword } = keywordFilter;

  return (
    <div className="flex items-center justify-between pb-3 border-b">
      <div className="text-3xl font-bold text-zinc-800">일정 찾기</div>
      <div className="flex gap-1">
        <div className="relative">
          <select
            className="block w-[90px] h-[38px] px-3 py-2 text-sm bg-white border rounded-md shadow appearance-none hover:border-gray-400 focus:outline-none focus:shadow-outline border-neutral-200"
            name="option"
            value={option}
            onChange={handleKeywordChange}
          >
            <option value="전체">전체</option>
            <option value="제목">제목</option>
            <option value="작성자">작성자</option>
            <option value="내용">내용</option>
            <option value="제목+내용">제목+내용</option>
            <option value="태그">태그</option>
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
            value={keyword}
            onChange={handleKeywordChange}
          />
        </div>
        <button className="w-[100px] h-[38px] px-5 bg-pink-400 rounded-[5px] text-white hover:bg-pink-500">
          <span>찾기</span>
        </button>
      </div>
    </div>
  );
};

export default KeywordFilter;
