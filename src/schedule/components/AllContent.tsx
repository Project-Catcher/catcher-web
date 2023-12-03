import React, { Dispatch, SetStateAction, useState } from "react";
import ScheduleCard from "./ScheduleCard";

interface AllContentProps {
  cardList: CardItemType[];
  setCardList: Dispatch<SetStateAction<CardItemType[]>>;
}

export interface CardItemType {
  theme: string;
  img?: string;
  title: string;
  content?: string;
  writer: string;
  status: boolean;
  location: string;
  durationStart: string;
  durationEnd: string;
  createdAt: string;
  like: number;
  comment: number;
  marked: number;
}

const AllContent = ({ cardList, setCardList }: AllContentProps) => {
  const [isMySchedule, setIsMySchedule] = useState(false);

  // TODO: 내가 만든 일정만 필터 로직 추가
  const onClickMySchedule = () => setIsMySchedule((prev) => !prev);

  // TODO: 삭제 요청 추가
  const onClickDelete = (i: number) => {
    const updatedCardList = [...cardList];
    updatedCardList.splice(i, 1);
    setCardList(updatedCardList);
  };
  return (
    <div className="w-3/5">
      <div className="flex justify-between mt-6 ">
        <div className="text-sm">
          전체 <span className="text-pink-400">{cardList.length}</span>개
        </div>
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
      </div>

      <div className="relative flex flex-wrap mt-2.5 gap-y-12 gap-x-20">
        {cardList.map((card, i) => (
          <ScheduleCard
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
    </div>
  );
};

export default AllContent;
