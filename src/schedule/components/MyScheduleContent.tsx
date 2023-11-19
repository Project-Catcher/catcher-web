// 내 일정 목록
import {
  defaultCardList,
  defaultParticipateList,
  defaultTemporaryCardList,
} from "@schedule/const";
import React, { useState } from "react";
import ScheduleCard, { cardType } from "./ScheduleCard";
import { CardItemType, scheduleType } from "./ScheduleContent";
import TitleCardContainer from "./TitleCardContainer";

const MyScheduleContent = () => {
  const [onComingCardList, setOnComingCardList] =
    useState<CardItemType[]>(defaultCardList);
  const [temporaryCardList, setTemporarayCardList] = useState<CardItemType[]>(
    defaultTemporaryCardList,
  );
  const [recruitCardList, setRecruitCardList] =
    useState<CardItemType[]>(defaultCardList);
  const [participateCardList, setParticipateCardList] = useState<
    CardItemType[]
  >(defaultParticipateList);

  // TODO: 삭제 요청 추가
  const onClickDelete = (i: number) => {
    const updatedCardList = [...temporaryCardList];
    updatedCardList.splice(i, 1);
    setTemporarayCardList(updatedCardList);
  };

  return (
    <div className="w-3/5 pt-10">
      <TitleCardContainer title="다가오는 일정" cardList={onComingCardList} />
      <div className="text-neutral-700 text-[28px] font-bold pb-3">
        작성 중인 일정
      </div>
      <div className="relative flex flex-wrap mb-10 gap-y-12 gap-x-20">
        {temporaryCardList.map((card, i) => (
          <ScheduleCard
            cardType={"temporary" as cardType}
            scheduleType={"my" as scheduleType}
            key={`card-${i}`}
            idx={i}
            theme={card.theme}
            img={card.img}
            title={card.title}
            content={card.content}
            writer={card.writer}
            status={card.status}
            location={card.location}
            durationStart={card.durationStart}
            durationEnd={card.durationEnd}
            createdAt={card.createdAt}
            like={card.like}
            comment={card.comment}
            marked={card.marked}
            onClickDelete={onClickDelete}
          />
        ))}
      </div>

      <TitleCardContainer title="모집 중" cardList={recruitCardList} />
      <TitleCardContainer title="참여 신청" cardList={participateCardList} />
    </div>
  );
};

export default MyScheduleContent;
