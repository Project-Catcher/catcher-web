// 일정 작은 카드
import Image from "next/image";
import React, { useState } from "react";
import { getDaysDifference, stringToDate } from "@shared/utils";
import cardToggle from "/public/assets/schedule/card_toggle.svg";

export type scheduleSmallCardType = "다가오는 일정" | "모집 중" | "참여 신청";

interface ScheduleSmallCardProps {
  type: scheduleSmallCardType;
  idx: number;
  title: string;
  location: string;
  durationStart: string;
  durationEnd: string;
  participateNum: number;
  participateCapacity: number;
  onClickDelete: (i: number) => void;
}

const ScheduleSmallCard = ({
  type,
  idx,
  title,
  location,
  durationStart,
  durationEnd,
  participateNum,
  participateCapacity,
  onClickDelete,
}: ScheduleSmallCardProps) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleClickToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsToggle((prev) => !prev);
  };

  const handleClickShare = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // TODO: 공유 로직 추가
  };

  const handleClickUpdate = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // TODO: 일정 수정으로 라우팅
  };

  const handleClickSettingChange = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // TODO: 설정 변경으로 라우팅
  };

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsToggle((prev) => !prev);
    onClickDelete(idx);
  };

  const smallCardToggleItems = [
    {
      title: "공유",
      onClick: handleClickShare,
    },
    {
      title: "일정 수정",
      onClick: handleClickUpdate,
    },
    {
      title: "설정 변경",
      onClick: handleClickSettingChange,
    },
    {
      title: "삭제하기",
      onClick: handleDelete,
    },
  ];

  return (
    <div className="w-[260px] bg-white rounded-[20px] border border-gray-300 px-6 py-5 relative">
      {isToggle && (
        <div
          className="w-[260px] rounded-[20px] left-0 top-0 bottom-0 bg-black bg-opacity-60 absolute z-20"
          onClick={handleClickToggle}
        >
          <div className="relative left-[160px] top-[12px] inline-block">
            {smallCardToggleItems.map((item, i) => (
              <div
                key={`toggleItem-${i}`}
                className="rounded-t-md w-[67px] h-[24px] bg-white cursor-pointer flex justify-center hover:bg-gray-100"
                onClick={item.onClick}
              >
                <div className="w-[55px] p-1 text-[12px] font-semibold text-center text-zinc-800 border-b border-gray-200">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        className="absolute cursor-pointer top-[22px] right-5"
        onClick={handleClickToggle}
      >
        <Image src={cardToggle} alt="location" width={3} height={16} />
      </div>
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
