// 일정 만들기 1
import React, { useState } from "react";
import ScheduleCard from "./ScheduleCard";
import Tab from "./Tab";

export type TabType = "전체" | "진행 중인 일정" | "완료된 일정";

const Create = () => {
  const [tab, setTab] = useState<TabType>("전체");
  const [CardList, setCardList] = useState(DefaultCardList);

  // TODO: 탭 클릭시 마다 일정 필터링 혹은 데이터 다시 요청 로직으로 수정
  const onClickTab = (tab: TabType) => {
    setTab(tab);
  };

  // TODO: 삭제 요청 추가
  const onClickDelete = (i: number) => {
    const updatedCardList = [...CardList];
    updatedCardList.splice(i, 1);
    setCardList(updatedCardList);
  };

  return (
    <>
      <div className="flex justify-center">
        {/* 탭 */}
        <div className="flex flex-col w-3/5">
          <Tab currentTab={tab} onClickTab={onClickTab} />
        </div>
      </div>

      {/* 일정 */}
      <div className="flex justify-center min-h-[660px] bg-slate-100">
        <div className="relative flex flex-wrap w-3/5 mt-4 gap-y-12 gap-x-16">
          {CardList.map((card, i) => (
            <ScheduleCard
              key={`card-${i}`}
              idx={i}
              theme={card.theme}
              img={card.img}
              title={card.title}
              writer={card.writer}
              status={card.status}
              content={card.content}
              duration={card.duration}
              onClickDelete={onClickDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Create;

const DefaultCardList = [
  {
    theme: "캠핑 레져",
    img: "/assets/schedule/sample_img.png",
    title: "단풍구경 관악산 등반 하실 분?",
    writer: "명란마요",
    status: true,
    content: ` 관악산으로 토요일 오전 10시에 등산 일정

  연주대 12시 도착 및 12시부터 30분간 사진촬영 예정 / 2시에 서울대
  방향으로 하산`,
    duration: "23.10.28 ~ 23.10.28",
  },
  {
    theme: "캠핑 레져",
    title: "제목을 입력해주세요",
    writer: "명란마요",
    status: false,
    duration: "23.10.28 ~ 23.10.28",
  },
  {
    theme: "캠핑 레져",
    title: "제목을 입력해주세요2",
    writer: "명란마요",
    status: false,
    duration: "23.10.28 ~ 23.10.28",
  },
  {
    theme: "캠핑 레져",
    title: "제목을 입력해주세요3",
    writer: "명란마요",
    status: false,
    duration: "23.10.28 ~ 23.10.28",
  },
];
