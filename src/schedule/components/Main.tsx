// 내 일정 메인
import React from "react";
import MyScheduleContent from "./MyScheduleContent";
import ScheduleHeader from "./ScheduleHeader";

const Main = () => {
  return (
    <div>
      <div className="flex justify-center pt-32">
        {/* 탭 */}
        <ScheduleHeader />
      </div>

      <div className="flex justify-center">
        {/* 일정 탭 */}
        <div className="flex flex-col w-3/5 py-10">
          <div className="text-zinc-800 text-[32px] font-bold">내 일정</div>
        </div>
      </div>

      <div className="flex flex-col items-center min-h-[640px] bg-slate-100 border-t">
        {/* MainContent */}

        <MyScheduleContent />
      </div>
    </div>
  );
};

export default Main;
