// 일정 만들기 1
import React, { useState } from "react";

const Create = () => {
  const [tab, setTab] = useState("전체");

  return (
    <div className="flex flex-col items-center">
      <div className="w-[60%] h-[45px] text-zinc-800 text-[32px] font-bold capitalize mt-[150px]">
        내가 만든 일정
      </div>
      <div className="w-[60%] h-[38px] relative mt-9">
        <div
          className={`w-[31px] h-[27px] left-0 top-0 absolute text-center  text-base cursor-pointer ${
            tab === "전체"
              ? "border-b-2 border-pink-400 text-zinc-800 font-bold"
              : "text-zinc-400 font-medium"
          }`}
          onClick={() => {
            setTab("전체");
          }}
        >
          전체
        </div>
        <div
          className={`w-[100px] h-[27px] left-[68px] top-0 absolute text-center text-base cursor-pointer ${
            tab === "진행중인 일정"
              ? "border-b-2 border-pink-400 text-zinc-800 font-bold"
              : "text-zinc-400 font-medium"
          }`}
          onClick={() => {
            setTab("진행중인 일정");
          }}
        >
          진행중인 일정
        </div>
        <div
          className={`w-[85px] h-[27px] left-[200px] top-0 absolute text-center text-base cursor-pointer ${
            tab === "완료된 일정"
              ? "border-b-2 border-pink-400 text-zinc-800 font-bold"
              : "text-zinc-400 font-medium"
          }`}
          onClick={() => {
            setTab("완료된 일정");
          }}
        >
          완료된 일정
        </div>
      </div>

      {/* 카드 */}

      <div className="w-[270px] h-[470px] relative">
        <div className="w-[270px] h-[470px] left-0 top-0 absolute bg-white border border-gray-300" />
        <div className="w-[270px] h-[225px] left-0 top-0 absolute bg-stone-300 border border-zinc-400" />
        <div className="w-[127px] h-[18px] left-[71px] top-[435px] absolute text-center text-zinc-500 text-sm font-medium font-['Noto Sans KR']">
          일정 만들기 바로가기
        </div>
        <div className="w-[127px] h-[18px] left-[71px] top-[95px] absolute text-center text-white text-sm font-medium font-['Noto Sans']">
          대표이미지가 없어요
        </div>
        <div className="w-[148px] h-[18px] left-[24px] top-[242px] absolute text-zinc-800 text-base font-medium font-['Noto Sans KR']">
          제목을 입력해주세요.
        </div>
        <div className="w-[60px] h-[18px] left-[24px] top-[270px] absolute text-neutral-400 text-sm font-medium font-['Noto Sans KR']">
          명란마요
        </div>
        <div className="w-12 h-[18px] left-[36px] top-[305px] absolute text-neutral-400 text-xs font-medium font-['Noto Sans KR']">
          작성 중
        </div>
        <div className="w-[7px] h-[7px] left-[23px] top-[311px] absolute bg-amber-300 rounded-full" />
        <div className="w-[68px] h-[25px] left-0 top-0 absolute bg-emerald-400" />
        <div className="w-[55px] h-[18px] left-[7px] top-[4px] absolute text-center text-white text-xs font-semibold font-['Noto Sans']">
          캠핑 레져
        </div>
        <div className="w-5 h-5 left-[245px] top-[6px] absolute" />
      </div>
    </div>
  );
};

export default Create;
