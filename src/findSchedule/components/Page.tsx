import { useState } from "react";
import { CardType } from "./Card";
import ScheduleContent from "./ScheduleContent";
import ScheduleFilter from "./ScheduleFilter";

interface FindScheduleProps {
  defaultCardList: CardType[];
}

export interface ShowCalendarType {
  start: boolean;
  end: boolean;
}

const Page = ({ defaultCardList }: FindScheduleProps) => {
  const [cardList, setCardList] = useState(defaultCardList);

  const updateCardList = (newCardList: CardType[]) => {
    setCardList(newCardList);
  };

  return (
    <div className="relative flex w-4/5">
      <ScheduleFilter
        updateCardList={updateCardList}
        defaultCardCount={defaultCardList.length}
      />
      <ScheduleContent cardList={cardList} />
    </div>
  );
};

export default Page;
