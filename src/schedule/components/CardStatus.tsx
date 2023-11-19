// 일정카드의 상태 뱃지
import { TabContext } from "@schedule/context/TabContext";
import React, { useContext, useEffect, useState } from "react";
import { getDaysDifference } from "@shared/utils";
import { scheduleType } from "./ScheduleContent";

interface CardStatusProps {
  scheduleType: scheduleType;
  durationStart: string;
  participateNum?: number;
  participateCapacity?: number;
  recruitStart?: string;
  recruitEnd?: string;
  approvalStatus?: number;
}

// TODO: 임시저장 데이터 관련 값 백에서 어떻게 넘겨주는지 확인 후 prop 수정
const CardStatus = ({
  scheduleType,
  durationStart,
  participateNum = 0,
  participateCapacity = 10,
  recruitStart = "2023-11-17",
  recruitEnd = "2023-11-17",
  approvalStatus = 0,
}: CardStatusProps) => {
  const tab = useContext(TabContext);
  const [status, setStatus] = useState("");
  const [bgColor, setBgColor] = useState("");

  const scheduleStatus = (inputDate: string) => {
    const dateStatus = getDaysDifference(inputDate);

    if (dateStatus < 0) {
      setBgColor("bg-amber-300");
      return "진행예정";
    } else if (dateStatus === 0) {
      setBgColor("bg-emerald-400");
      return "진행 중";
    } else if (dateStatus > 0) {
      setBgColor("bg-red-600");
      return "진행완료";
    }
    return "";
  };

  const recruitStatus = (
    recruitStart: string,
    recruitEnd: string,
    participateNum: number,
    participateCapacity: number,
  ) => {
    const now = new Date();
    const startDate = new Date(recruitStart);
    const endDate = new Date(recruitEnd);

    if (startDate > now) {
      setBgColor("bg-amber-300");
      return "모집 예정";
    } else if (
      now >= startDate &&
      now <= endDate &&
      participateNum < participateCapacity
    ) {
      setBgColor("bg-emerald-400");
      return "모집 중";
    } else if (now > endDate || participateNum === participateCapacity) {
      setBgColor("bg-red-600");
      return "모집 완료";
    }
    return "";
  };

  const participateStatus = (approvalStatus: number) => {
    if (approvalStatus === 0) {
      setBgColor("bg-amber-300");
      return "승인 대기 중";
    } else if (approvalStatus === 1) {
      setBgColor("bg-emerald-400");
      return "승인";
    } else if (approvalStatus === 2) {
      setBgColor("bg-red-600");
      return "승인 거절";
    }
    return "";
  };

  useEffect(() => {
    if (scheduleType === "all") {
      setStatus(scheduleStatus(durationStart));
    } else if (scheduleType === "recruit") {
      setStatus(
        recruitStatus(
          recruitStart,
          recruitEnd,
          participateNum,
          participateCapacity,
        ),
      );
    } else if (scheduleType === "participate") {
      console.log("approvalStatus", approvalStatus);
      setStatus(participateStatus(approvalStatus));
    }
  }, [tab]);

  return scheduleType === "all" ? (
    <div
      className={`px-[6px] py-1 font-semibold text-center text-base text-white ${bgColor}`}
    >
      {status}
    </div>
  ) : scheduleType === "recruit" ? (
    <div
      className={`px-[6px] py-1 font-semibold text-center text-base text-white ${bgColor}`}
    >
      {status}
    </div>
  ) : scheduleType === "participate" ? (
    <div
      className={`px-[6px] py-1 font-semibold text-center text-base text-white ${bgColor}`}
    >
      {status}
    </div>
  ) : null;
};

export default CardStatus;
