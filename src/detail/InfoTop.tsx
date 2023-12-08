import Image from "next/image";
import React from "react";

const InfoTop = () => {
  // TODO: 모집 상태 정보 어떻게 받아올지 고민
  return (
    <div className="flex items-center justify-between pb-3 border-b">
      <div className="flex items-center">
        <div className="text-sm font-medium text-neutral-400">일정찾기</div>
        <div className="ml-2">
          <Image src="/assets/detail/vector.svg" width={7} height={13} alt="" />
        </div>
        <div className="px-3 py-1 ml-2 text-xs font-semibold text-center text-white bg-emerald-500 h-fit">
          모집 중
        </div>
      </div>
      <div className="flex items-center">
        <button>
          <Image src="/assets/detail/bell.svg" width={22} height={22} alt="" />
        </button>
        <button className="ml-2">
          <Image src="/assets/detail/share.svg" width={28} height={28} alt="" />
        </button>
      </div>
    </div>
  );
};

export default InfoTop;
