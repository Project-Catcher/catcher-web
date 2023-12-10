import React, { ChangeEvent } from "react";
import Card, { CardType } from "./Card";
import KeywordFilter, { keywordFilterType } from "./KeywordFilter";
import SortFilter from "./SortFilter";

interface ScheduleContentProps {
  cardList: CardType[];
  keywordFilter: keywordFilterType;
  handleKeywordChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  sortFilter: string;
  handleSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onClickSearch: VoidFunction;
}

const ScheduleContent = ({
  cardList,
  keywordFilter,
  handleKeywordChange,
  sortFilter,
  handleSortChange,
  onClickSearch,
}: ScheduleContentProps) => {
  return (
    <div className="w-full ml-8">
      <KeywordFilter
        keywordFilter={keywordFilter}
        handleKeywordChange={handleKeywordChange}
        onClickSearch={onClickSearch}
      />
      <div className="flex items-center justify-between px-2 mt-2">
        <div>
          <span className="text-sm font-medium">전체 </span>
          <span className="text-sm font-bold text-pink-400">
            {cardList.length}
          </span>
        </div>
        <SortFilter
          sortFilter={sortFilter}
          handleSortChange={handleSortChange}
        />
      </div>
      <div className="flex flex-wrap mt-2 gap-x-3 gap-y-6">
        {cardList.map((card, i) => (
          <Card
            key={`card-${i}`}
            img={card.img}
            title={card.title}
            content={card.content}
            dateStart={card.dateStart}
            dateEnd={card.dateEnd}
            expense={card.expense}
            tags={card.tags}
            like={card.like}
            comment={card.comment}
            scrap={card.scrap}
            participateNum={card.participateNum}
            participateCapacity={card.participateCapacity}
          />
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
