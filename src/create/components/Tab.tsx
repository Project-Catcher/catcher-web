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
        모든 일정
      </div>
      <div className="h-[30px] relative mt-9 flex gap-x-10">
        {tabItems.map((tab, i) => (
          <div
            key={`tab-${i}`}
            className={`cursor-pointer ${
              currentTab === tab.title
                ? "border-b-2 border-pink-400 text-zinc-800 font-bold"
                : "text-zinc-400 font-medium"
            }`}
            onClick={() => onClickTab(tab.title as TabType)}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tab;

const tabItems = [
  { title: "전체" },
  { title: "진행 중인 일정" },
  { title: "완료된 일정" },
  { title: "임시 저장" },
];
