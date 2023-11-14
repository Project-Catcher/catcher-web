// 일정 작은 카드
import Image from "next/image";
import React from "react";
import { getDaysDifference, stringToDate } from "@shared/utils";

export type scheduleSmallCardType = "다가오는 일정" | "모집 중" | "참여 신청";

interface ScheduleSmallCardProps {
  type: scheduleSmallCardType;
  title: string;
  location: string;
  durationStart: string;
  durationEnd: string;
  participateNum: number;
  participateCapacity: number;
}

const ScheduleSmallCard = ({
  type,
  title,
  location,
  durationStart,
  durationEnd,
  participateNum,
  participateCapacity,
}: ScheduleSmallCardProps) => {
  return (
    <div className="w-[270px] bg-white rounded-[20px] border border-gray-300 px-6 py-5">
      <div className="text-base font-medium text-zinc-800 w-[210px] h-6 truncate-text">
        {title}
      </div>
      <div className="inline-flex items-start mt-1.5">
        <Image
          src="/assets/schedule/location.svg"
          alt="location"
          width={17}
          height={17}
        />
        <span className="ml-1 text-sm text-neutral-400">{location}</span>
      </div>
      <div className="flex items-end justify-between">
        <div className="mt-2 text-sm font-medium text-neutral-500">
          {stringToDate(durationStart)} ~ {stringToDate(durationEnd)}
        </div>

        {type === "다가오는 일정" ? (
          <div className="text-base font-medium text-pink-400">
            D
            {getDaysDifference(durationStart) === 0
              ? "-DAY"
              : getDaysDifference(durationStart)}
          </div>
        ) : (
          <div className="flex gap-x-1">
            <Image
              src="/assets/schedule/partying_face.svg"
              alt="emoji"
              width={21}
              height={21}
            />
            <div>
              <span className="text-pink-400">{participateNum}</span>
              <span className="text-gray-400">/{participateCapacity}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleSmallCard;
