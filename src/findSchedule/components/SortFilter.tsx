import React, { ChangeEvent } from "react";

interface SortFilterProps {
  sortFilter: string;
  handleSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SortFilter = ({ sortFilter, handleSortChange }: SortFilterProps) => {
  return (
    <div className="flex items-center">
      <span className="text-sm font-light text-zinc-800">정렬기준</span>
      <div className="relative ml-2">
        <select
          className="block w-[106px] h-[30px] px-3 py-1 text-sm bg-white border rounded-md shadow appearance-none hover:border-gray-400 focus:outline-none  font-medium  text-zinc-500  focus:shadow-outline border-neutral-200"
          value={sortFilter}
          onChange={handleSortChange}
        >
          <option value="최신순">최신순</option>
          <option value="경비 적은 순">경비 적은 순</option>
          <option value="인원 많은 순">인원 많은 순</option>
          <option value="가까운 지역 순">가까운 지역 순</option>
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
    </div>
  );
};

export default SortFilter;
