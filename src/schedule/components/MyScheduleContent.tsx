// 내 일정 목록
import React, { useEffect, useState } from "react";
import { getMainSchedule } from "@pages/api/mySchedule";
import ScheduleCard, { cardType } from "./ScheduleCard";
import { CardItemType, scheduleType } from "./ScheduleContent";
import TitleCardContainer from "./TitleCardContainer";

const MyScheduleContent = () => {
  const [onComingCardList, setOnComingCardList] = useState<CardItemType[]>([]);
  const [temporaryCardList, setTemporarayCardList] = useState<CardItemType[]>(
    [],
  );
  const [recruitCardList, setRecruitCardList] = useState<CardItemType[]>([]);
  const [participateCardList, setParticipateCardList] = useState<
    CardItemType[]
  >([]);

  const onClickDelete = (i: number) => {
    // TODO: 삭제 요청 추가
    // const updatedCardList = [...temporaryCardList];
    // updatedCardList.splice(i, 1);
    // setTemporarayCardList(updatedCardList);
  };

  useEffect(() => {
    try {
      getMainSchedule().then((res) => {
        setOnComingCardList(res.allSchedule);
        setRecruitCardList(res.recruitSchedule);
        setParticipateCardList(res.participateSchedule);
        setTemporarayCardList(res.temporarySchedule);
      });
    } catch (error) {
      console.error("API 호출 오류", error);
    }
  }, []);

  return (
    <div className="w-3/5 pt-10">
      <TitleCardContainer title="다가오는 일정" cardList={onComingCardList} />
      <TitleCardContainer
        title="작성 중인 일정"
        cardList={temporaryCardList}
        cardType={"temporary"}
      />
      <TitleCardContainer title="모집 중" cardList={recruitCardList} />
      <TitleCardContainer title="참여 신청" cardList={participateCardList} />
    </div>
  );
};

export default MyScheduleContent;
