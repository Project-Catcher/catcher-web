import Image from "next/image";
import React from "react";

const ScheduleFilter = () => {
  return (
    <div className="inline-block w-[281px] bg-neutral-50 h-full">
      <div className="flex items-center p-5">
        <Image
          src="/assets/findSchedule/filter.svg"
          alt="filter"
          width={24}
          height={24}
        />
        <span className="ml-2 text-base font-bold text-zinc-800">필터</span>
        <button className="ml-auto text-sm text-zinc-800 hover:text-zinc-900">
          초기화
        </button>
      </div>
    </div>
  );
};

export default ScheduleFilter;
