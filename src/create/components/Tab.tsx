// 탭 컴포넌트
import React from "react";
import { TabType } from "./Create";

interface TabProps {
  currentTab: string;
  onClickTab: (tab: TabType) => void;
}

const Tab = ({ currentTab, onClickTab }: TabProps) => {
  return (
    <>
      <div className="text-zinc-800 text-[32px] font-bold capitalize mt-[150px]">
        내가 만든 일정
      </div>
      <div className="h-[30px] relative mt-9">
        <div
          className={`w-[31px] h-[27px] left-0 top-0 absolute text-center  text-base cursor-pointer ${
            currentTab === "전체"
              ? "border-b-2 border-pink-400 text-zinc-800 font-bold"
              : "text-zinc-400 font-medium"
          }`}
          onClick={() => onClickTab("전체")}
        >
          전체
        </div>
        <div
          className={`w-[100px] h-[27px] left-[68px] top-0 absolute text-center text-base cursor-pointer ${
            currentTab === "진행 중인 일정"
              ? "border-b-2 border-pink-400 text-zinc-800 font-bold"
              : "text-zinc-400 font-medium"
          }`}
          onClick={() => onClickTab("진행 중인 일정")}
        >
          진행 중인 일정
        </div>
        <div
          className={`w-[85px] h-[27px] left-[200px] top-0 absolute text-center text-base cursor-pointer ${
            currentTab === "완료된 일정"
              ? "border-b-2 border-pink-400 text-zinc-800 font-bold"
              : "text-zinc-400 font-medium"
          }`}
          onClick={() => onClickTab("완료된 일정")}
        >
          완료된 일정
        </div>
      </div>
    </>
  );
};

export default Tab;
