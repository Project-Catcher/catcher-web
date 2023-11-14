// 내 일정 목록
import { defaultCardList, temporaryCardList } from "@schedule/const";
import React, { useState } from "react";
import { CardItemType } from "./AllContent";
import ScheduleCard, { scheduleCardType } from "./ScheduleCard";
import TitleCardContainer from "./TitleCardContainer";

const MyScheduleContent = () => {
  const [cardList, setCardList] = useState<CardItemType[]>(defaultCardList);

  // TODO: 삭제 요청 추가
  const onClickDelete = (i: number) => {
    const updatedCardList = [...cardList];
    updatedCardList.splice(i, 1);
    setCardList(updatedCardList);
  };

  return (
    <div className="w-3/5 pt-10">
      <TitleCardContainer title="다가오는 일정" cardList={cardList} />
      <div className="text-neutral-700 text-[28px] font-bold pb-3">
        작성 중인 일정
      </div>
      <div className="relative flex flex-wrap mb-10 gap-y-12 gap-x-20">
        {temporaryCardList.map((card, i) => (
          <ScheduleCard
            type={"temporary" as scheduleCardType}
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

      <TitleCardContainer title="모집 중" cardList={cardList} />
      <TitleCardContainer title="참여 신청" cardList={[]} />
    </div>
  );
};

export default MyScheduleContent;
