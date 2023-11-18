// 일정카드의 상태 뱃지
import React from "react";
import { getDaysDifference } from "@shared/utils";
import { scheduleType } from "./ScheduleContent";

interface CardStatusProps {
  scheduleType: scheduleType;
  durationStart: string;
  participateNum?: number;
  participateCapacity?: number;
  recruitStart?: string;
  recruitEnd?: string;
}

// TODO: 임시저장 데이터 관련 값 백에서 어떻게 넘겨주는지 확인 후 prop 수정
const CardStatus = ({
  scheduleType,
  durationStart,
  participateNum = 0,
  participateCapacity = 10,
  recruitStart = "2023-11-17",
  recruitEnd = "2023-11-17",
}: CardStatusProps) => {
  const scheduleProgress = (inputDate: string) => {
    const dateStatus = getDaysDifference(inputDate);

    if (dateStatus < 0) return "진행예정";
    else if (dateStatus === 0) return "진행 중";
    else if (dateStatus > 0) return "진행완료";
  };

  const recruitProgress = (
    recruitStart: string,
    recruitEnd: string,
    participateNum: number,
    participateCapacity: number,
  ) => {
    const now = new Date();
    const startDate = new Date(recruitStart);
    const endDate = new Date(recruitEnd);

    if (startDate > now) {
      return "모집 예정";
    } else if (
      now >= startDate &&
      now <= endDate &&
      participateNum < participateCapacity
    ) {
      return "모집 중";
    } else if (now > endDate || participateNum === participateCapacity) {
      return "모집 완료";
    }
  };

  let bgColorClass = "";
  switch (scheduleProgress(durationStart)) {
    case "진행예정":
      bgColorClass = "bg-amber-300";
      break;
    case "진행 중":
      bgColorClass = "bg-emerald-400";
      break;
    case "진행완료":
      bgColorClass = "bg-red-600";
      break;
    default:
      bgColorClass = "";
      break;
  }

  return scheduleType === "all" ? (
    <div
      className={`px-[6px] py-1 font-semibold text-center text-base text-white ${bgColorClass}`}
    >
      {scheduleProgress(durationStart)}
    </div>
  ) : scheduleType === "recruit" ? (
    <div
      className={`px-[6px] py-1 font-semibold text-center text-base text-white ${bgColorClass}`}
    >
      {recruitProgress(
        recruitStart,
        recruitEnd,
        participateNum,
        participateCapacity,
      )}
    </div>
  ) : scheduleType === "participate" ? (
    <div className="px-[6px] py-1 font-semibold text-center text-base text-white bg-emerald-400">
      {scheduleProgress(durationStart)}
    </div>
  ) : null;
};

export default CardStatus;
