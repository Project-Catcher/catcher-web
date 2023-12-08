import Image from "next/image";
import React from "react";

interface FilterTabProps {
  handleReset: VoidFunction;
}

const FilterTab = ({ handleReset }: FilterTabProps) => {
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
        className="ml-auto text-sm text-zinc-800 hover:text-zinc-900"
        onClick={handleReset}
      >
        초기화
      </button>
    </div>
  );
};

export default FilterTab;
