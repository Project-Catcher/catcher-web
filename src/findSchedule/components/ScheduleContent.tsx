import React from "react";
import Card, { CardType } from "./Card";

interface ScheduleContentProps {
  cardList: CardType[];
}

const ScheduleContent = ({ cardList }: ScheduleContentProps) => {
  return (
    <div className="inline-block w-full mt-[90px] ml-8">
      <div className="flex flex-wrap mt-2 gap-x-3 gap-y-6">
        {cardList.map((card, i) => (
          <Card key={`card-${i}`} {...card} />
        ))}

        {/* 카드 구조를 위해 빈 카드 추가 */}
        <div className="w-[260px] h-[420px] m-auto"></div>
        <div className="w-[260px] h-[420px] m-auto"></div>
        <div className="w-[260px] h-[420px] m-auto"></div>
        <div className="w-[260px] h-[420px] m-auto"></div>
      </div>
    </div>
  );
};

export default ScheduleContent;
