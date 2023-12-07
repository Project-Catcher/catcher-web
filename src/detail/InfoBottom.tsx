import Image from "next/image";
import React from "react";

interface InfoBottomProps {
  scheduleId: number;
  like: number;
  scrap: number;
}

const InfoBottom = ({ scheduleId, like, scrap }: InfoBottomProps) => {
  return (
    <div className="flex gap-2 mt-4">
      <button className="w-[60px] h-[50px] flex flex-col items-center px-4 py-2 bg-white border border-gray-300 rounded">
        <Image
          src="/assets/detail/heart.svg"
          width={22}
          height={22}
          alt="like"
        />
        <span className="text-xs font-medium text-neutral-400">{like}</span>
      </button>
      <button className="w-[60px] h-[50px] flex flex-col items-center px-4 py-2 bg-white border border-gray-300 rounded">
        <Image
          src="/assets/detail/bookmark.svg"
          width={18}
          height={22}
          alt="bookmark"
        />
        <span className="text-xs font-medium text-neutral-400">{scrap}</span>
      </button>
      <button className="w-full h-full">
        <div className="p-auto text-white  bg-emerald-400 hover:bg-emerald-500 rounded-[10px] text-lg font-semibold py-2.5 text-center">
          일정 참여하기
        </div>
      </button>
    </div>
  );
};

export default InfoBottom;
