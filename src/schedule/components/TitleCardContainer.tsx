// 제목, 작은 카드 목록
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EmptyContent from "./EmptyContent";
import { CardItemType } from "./ScheduleContent";
import ScheduleSmallCard, { scheduleSmallCardType } from "./ScheduleSmallCard";

interface TitleCardContainerProps {
  title: string;
  cardList: CardItemType[];
}

const TitleCardContainer = ({ title, cardList }: TitleCardContainerProps) => {
  // TODO: cardList prop은 필터된 것(다가오는, 모집 중인, 참여하는 카드만)
  const [filteredList, setFilteredList] = useState(cardList);
  const [current, setCurrent] = useState(4);
  const [carouselTransition, setCarouselTransition] = useState("");
  const infiniteCarousel = cardList?.length >= 4;

  useEffect(() => {
    if (infiniteCarousel) {
      setFilteredList([
        ...cardList.slice(-4),
        ...cardList,
        ...cardList.slice(0, 4),
      ]);
    } else {
      setFilteredList(cardList);
      setCurrent(0);
    }
  }, [cardList]);

  const handleSlide = (direction: string) => {
    if (direction === "prev") setCurrent((current) => current - 1);
    else if (direction === "next") setCurrent((current) => current + 1);
    setCarouselTransition("transition 300ms ease-in-out");
  };

  const handleOriginSlide = (index: number) => {
    setTimeout(() => {
      setCurrent(index);
      setCarouselTransition("");
    }, 300);
  };

  useEffect(() => {
    if (infiniteCarousel) {
      if (current === filteredList.length - 4) handleOriginSlide(4);
      else if (current === 0) handleOriginSlide(filteredList.length - 8);
    }
  }, [handleSlide]);

  // TODO: 삭제 요청 추가
  const onClickDelete = (i: number) => {
    const updatedCardList = [...filteredList];
    updatedCardList.splice(i, 1);
    setFilteredList(updatedCardList);
  };

  return (
    <>
      <div className="flex justify-between pb-3">
        <div className="text-neutral-700 text-[28px] font-bold">{title}</div>

        <div className="flex gap-3">
          <button
            className="w-[40px] h-[40px] flex-center bg-white rounded-[100px] border border-gray-900 border-opacity-10"
            onClick={() => handleSlide("prev")}
          >
            <Image
              src="/assets/schedule/arrow-left.svg"
              alt="arrow left"
              width={16}
              height={15}
            />
          </button>
          <button
            className="w-[40px] h-[40px] flex-center bg-neutral-700 rounded-[100px] border border-gray-900 border-opacity-10"
            onClick={() => handleSlide("next")}
          >
            <Image
              src="/assets/schedule/arrow-right.svg"
              alt="arrow right"
              width={16}
              height={15}
            />
          </button>
        </div>
      </div>
      {filteredList.length !== 0 ? (
        <div className="mb-10 overflow-hidden">
          <div
            className={`flex gap-x-3 ${carouselTransition}`}
            style={{
              transform: infiniteCarousel
                ? `translateX(-${272 * current}px)`
                : "",
            }}
          >
            {filteredList.map((card, i) => (
              <ScheduleSmallCard
                idx={i}
                key={`small card-${i}`}
                type={title as scheduleSmallCardType}
                title={card.title}
                location={card.location}
                durationStart={card.durationStart}
                durationEnd={card.durationEnd}
                participateNum={card.participateNum}
                participateCapacity={card.participateCapacity}
                onClickDelete={onClickDelete}
              />
            ))}
          </div>
        </div>
      ) : (
        <EmptyContent
          title={title}
          content={`${title} 일정이 없어요.\n 지금 일정을 만들어 보세요.`}
          link="일정 만들러 가기"
        />
      )}
    </>
  );
};

export default TitleCardContainer;
