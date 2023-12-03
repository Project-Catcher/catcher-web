import React, { useState } from "react";
import ScheduleHeader from "./ScheduleHeader";
import ScheduleTab from "./ScheduleTab";

type TabType =
  | "진행 예정"
  | "진행 중"
  | "진행 완료"
  | "모집 중"
  | "참여 신청"
  | "보관";

const Main = () => {
  const [tab, setTab] = useState("진행 예정");

  const onClickTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div>
      <div className="flex justify-center pt-32">
        {/* 탭 */}
        <ScheduleHeader />
      </div>

      <div className="flex justify-center">
        {/* 일정 탭 */}
        <div className="flex flex-col w-3/5 pt-10">
          <ScheduleTab
            tabTitle="내 일정"
            tabItems={allTabItems}
            currentTab={tab}
            onClickTab={onClickTab}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

const allTabItems: Record<"title", TabType>[] = [
  { title: "진행 예정" },
  { title: "진행 중" },
  { title: "진행 완료" },
  { title: "모집 중" },
  { title: "참여 신청" },
  { title: "보관" },
];
