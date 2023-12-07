import Tag from "@findSchedule/components/Tag";
import React from "react";
import DateWithLocation from "./DateWithLocation";
import ImageWithTitle from "./ImageWithTitle";
import ParticipationStatus, {
  participateInfoType,
} from "./ParticipationStatus";

interface DetailIntroduceProps {
  img: string;
  title: string;
  createdAt: string;
  dateStart: string;
  dateEnd: string;
  recruitEnd: string;
  location: string;
  participateNum: number;
  participateCapacity: number;
  applicantNum: number;
  participateInfos: participateInfoType[];
  expense: number;
  tags: string[];
}

const DetailIntroduce = ({
  img,
  title,
  createdAt,
  dateStart,
  dateEnd,
  recruitEnd,
  location,
  participateNum,
  participateCapacity,
  applicantNum,
  participateInfos,
  expense,
  tags,
}: DetailIntroduceProps) => {
  return (
    <>
      <ImageWithTitle img={img} title={title} createdAt={createdAt} />
      <div className="flex gap-3 mt-6">
        <DateWithLocation
          dateStart={dateStart}
          dateEnd={dateEnd}
          location={location}
        />
        <ParticipationStatus
          participateNum={participateNum}
          participateCapacity={participateCapacity}
          applicantNum={applicantNum}
          participateInfos={participateInfos}
        />
      </div>

      <div className="flex mt-3">
        <div className="text-center text-pink-400">
          <span className="text-2xl font-semibold">{recruitEnd}</span>
          <span className="text-base font-normal"> 마감</span>
        </div>
        <div className="px-2 py-1 ml-4 text-center text-pink-400 bg-red-100 rounded-md">
          {daysUntil(recruitEnd)}일 남음
        </div>
      </div>

      <div className="mt-2">
        <span className="text-stone-500 text-[22px] font-normal">
          예상경비 :{" "}
        </span>
        <span className="text-2xl font-semibold text-zinc-800">
          {expense.toLocaleString()}원
        </span>
      </div>

      <div className="flex flex-wrap my-4 overflow-hidden gap-x-2 gap-y-1">
        {tags.map((tag: string, i: number) => (
          <Tag tag={tag} key={`tag-${i}`} />
        ))}
      </div>
    </>
  );
};

export default DetailIntroduce;

function daysUntil(dateStr: string): number {
  const futureDate = new Date(dateStr);
  const currentDate = new Date();

  const diff = futureDate.getTime() - currentDate.getTime();

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
