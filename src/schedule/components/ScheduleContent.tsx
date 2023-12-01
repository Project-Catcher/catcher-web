// 일정 목록
import React, { Dispatch, SetStateAction, useState } from "react";
import ScheduleCard, { cardType } from "./ScheduleCard";

export type scheduleType =
  | "main"
  | "all"
  | "recruit"
  | "participate"
  | "my"
  | "temporary"
  | "scrap";

interface ScheduleContentProps {
  scheduleType: scheduleType;
  cardList?: CardItemType[];
  setCardList: Dispatch<SetStateAction<CardItemType[] | undefined>>;
}

export interface CardItemType {
  id: number;
  theme: string;
  img: string;
  title: string;
  content: string;
  writer: string;
  location: string;
  durationStart: string;
  durationEnd: string;
  createdAt: string;
  participateNum: number;
  participateCapacity: number;
  recruitStart: string;
  recruitEnd: string;
  like: number;
  comment: number;
  marked: number;
  status: boolean;
  approvalStatus?: number;
}

const ScheduleContent = ({
  scheduleType,
  cardList,
  setCardList,
}: ScheduleContentProps) => {
  const [isMySchedule, setIsMySchedule] = useState(false);

  // TODO: 내가 만든 일정만 필터 로직 추가
  const onClickMySchedule = () => setIsMySchedule((prev) => !prev);

  // TODO: 삭제 요청 추가
  const onClickDelete = (i: number) => {
    // const updatedCardList = [...(cardList ?? [])];
    // updatedCardList.splice(i, 1);
    // setCardList(updatedCardList);
  };

  return (
    <div className="w-3/5">
      <div className="flex justify-between h-6 px-4 mt-6">
        <div className="text-sm">
          전체 <span className="text-pink-400">{cardList?.length}</span>개
        </div>
        {scheduleType === "all" && (
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="w-5 h-5 border-4 accent-pink-500"
                checked={isMySchedule}
                onChange={onClickMySchedule}
              />
              <div
                className={`ml-2 text-sm ${
                  isMySchedule ? "text-pink-500" : "text-neutral-400"
                }`}
              >
                내가 만든 일정만 보기
              </div>
            </label>
          </div>
        )}
      </div>

      {/* TODO: 무한 스크롤 추가 */}
      <div className="relative flex flex-wrap mt-2.5 gap-y-12 gap-x-20">
        {cardList?.map((card, i) => (
          <ScheduleCard
            cardType={
              scheduleType === "temporary"
                ? ("temporary" as cardType)
                : ("complete" as cardType)
            }
            scheduleType={scheduleType}
            key={`card-${i}`}
            onClickDelete={onClickDelete}
            {...card}
          />
        ))}
        {/* 카드 구조를 위해 빈 카드 추가 */}
        <div className="w-[260px] h-[454px] m-auto" />
        <div className="w-[260px] h-[454px] m-auto" />
        <div className="w-[260px] h-[454px] m-auto" />
      </div>
    </div>
  );
};

export default ScheduleContent;
