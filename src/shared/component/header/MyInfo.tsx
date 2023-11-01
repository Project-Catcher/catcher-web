import Image from "next/image";
import React from "react";

const MyInfo = () => {
  return (
    <>
      <div
        className="absolute top-8 w-0 h-0 border-[12px] border-solid"
        style={{
          borderColor: "transparent transparent white transparent",
        }}
      />
      <div className="absolute top-14 -right-10 w-[339px]  bg-white rounded-[15px] shadow py-5 px-3 flex flex-wrap gap-2">
        <div className="w-[150px] h-[67px] bg-pink-200 rounded-[10px] flex-center flex-col">
          <div text-zinc-800 text-base font-medium>
            내 일정
          </div>
          <div className="text-sm font-medium text-stone-500">523개</div>
        </div>

        <div className="w-[150px] h-[67px] bg-white border border-neutral-200 rounded-[10px] flex-center flex-col">
          <div text-zinc-800 text-base font-medium>
            누적 좋아요 수
          </div>
          <div className="text-sm font-medium text-stone-500">523개</div>
        </div>

        <div className="w-[150px] h-[67px] bg-white border border-neutral-200 rounded-[10px] flex-center flex-col">
          <div text-zinc-800 text-base font-medium>
            예정 일정
          </div>
          <div className="text-sm font-medium text-stone-500">523개</div>
        </div>
        <div className="w-[150px] h-[67px] bg-white border border-neutral-200 rounded-[10px] flex-center flex-col">
          <div text-zinc-800 text-base font-medium>
            승인 대기 중
          </div>
          <div className="text-sm font-medium text-stone-500">523개</div>
        </div>

        <div className="w-[309px] h-[46.17px] bg-purple-500 rounded-[10px] shadow flex-center text-white">
          새로운 일정만들기
          <Image
            src="/header/write-icon.svg"
            alt="write-icon"
            width={14}
            height={14}
          />
        </div>
        <div className="w-[309px] h-[46.17px] bg-white rounded-[10px] shadow border border-neutral-200 flex-center">
          마이페이지
        </div>
        <div className="w-[309px] h-[46.17px] bg-stone-300 rounded-[10px] shadow flex-center text-white">
          Log out
        </div>
      </div>
    </>
  );
};

export default MyInfo;
