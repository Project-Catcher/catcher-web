import Image from "next/image";
import React from "react";

interface FilterTabProps {
  onFilterApply: VoidFunction;
  handleReset: VoidFunction;
}

const FilterTab = ({ onFilterApply, handleReset }: FilterTabProps) => {
  return (
    <div className="flex items-center p-5">
      <Image
        src="/assets/findSchedule/filter.svg"
        alt="filter"
        width={24}
        height={24}
      />
      <span className="ml-2 text-base font-bold text-zinc-800">필터</span>
      <button
        className="px-3 py-1 ml-auto text-sm font-bold text-white rounded-md bg-emerald-500 hover:bg-emerald-600"
        onClick={onFilterApply}
      >
        적용
      </button>
      <button
        className="px-2 py-1 ml-2 text-sm rounded-md text-zinc-800 hover:bg-gray-200"
        onClick={handleReset}
      >
        초기화
      </button>
    </div>
  );
};

export default FilterTab;
