import Image from "next/image";
import React from "react";
import { getDaysDifference, stringToDate } from "@shared/utils";

interface ScheduleSmallCardProps {
  title: string;
  location: string;
  durationStart: string;
  durationEnd: string;
}

const ScheduleSmallCard = ({
  title,
  location,
  durationStart,
  durationEnd,
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
        <div className="text-base font-medium text-pink-400">
          D
          {getDaysDifference(durationStart) === 0
            ? "-DAY"
            : getDaysDifference(durationStart)}
        </div>
      </div>
    </div>
  );
};

export default ScheduleSmallCard;
