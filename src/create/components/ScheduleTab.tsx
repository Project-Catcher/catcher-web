// 일정 탭 컴포넌트
import React from "react";
import { TabType } from "./Create";

interface ScheduleTab {
  currentTab: string;
  onClickTab: (tab: TabType) => void;
}

const ScheduleTab = ({ currentTab, onClickTab }: ScheduleTab) => {
  return (
    <>
      <div className="text-zinc-800 text-[32px] font-bold capitalize">
        모든 일정
      </div>
      <div className="h-[30px] relative mt-9 flex gap-x-10">
        {tabItems.map((tab, i) => (
          <div
            key={`schedule Tab-${i}`}
            className={`cursor-pointer ${
              currentTab === tab.title
                ? "border-b-2 border-pink-400 text-zinc-800 font-bold"
                : "text-zinc-400 font-medium"
            }`}
            onClick={() => onClickTab(tab.title)}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default ScheduleTab;

const tabItems: Record<"title", TabType>[] = [
  { title: "전체" },
  { title: "진행 중인 일정" },
  { title: "완료된 일정" },
  { title: "임시 저장" },
];
