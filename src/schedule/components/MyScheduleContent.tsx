// 내 일정 목록
import { defaultCardList } from "@schedule/const";
import React, { useState } from "react";
import { CardItemType } from "./AllContent";
import TitleCardContainer from "./TitleCardContainer";

const MyScheduleContent = () => {
  const [cardList, setCardList] = useState<CardItemType[]>(defaultCardList);

  return (
    <div className="w-3/5 pt-10">
      <TitleCardContainer title="다가오는 일정" cardList={cardList} />
      {/* <div className="text-neutral-700 text-[28px] font-bold pb-3 mt-7">
        작성 중인 일정
      </div>
      <TitleCardContainer title="모집 중" cardList={cardList} />
      <TitleCardContainer title="참여 신청" cardList={[]} /> */}
    </div>
  );
};

export default MyScheduleContent;
