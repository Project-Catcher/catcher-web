import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardItemType } from "./AllContent";
import EmptyContent from "./EmptyContent";
import ScheduleSmallCard from "./ScheduleSmallCard";

interface MyScheduleContentProps {
  cardList: CardItemType[];
}

const MyScheduleContent = ({ cardList }: MyScheduleContentProps) => {
  const [current, setCurrent] = useState(0);
  const [onComing, setOnComing] = useState(cardList);
  const [carouselTransition, setCarouselTransition] = useState("");

  useEffect(() => {
    if (onComing.length >= 4)
      setOnComing([
        ...onComing.slice(-4),
        ...onComing,
        ...onComing.slice(0, 4),
      ]);
    setCurrent(4);
  }, [cardList]);

  const handleSlide = (direction: string) => {
    direction === "prev"
      ? setCurrent((current) => current - 1)
      : setCurrent((current) => current + 1);
    setCarouselTransition("transition 300ms ease-in-out");
  };

  const getMoveStyle = (number: number): string => {
    if (!(onComing.length >= 4)) {
      return "0";
    }
    const translateX = 272 * number;
    return translateX.toString();
  };

  const handleOriginSlide = (index: number) => {
    setTimeout(() => {
      setCurrent(index);
      setCarouselTransition("");
    }, 300);
  };

  useEffect(() => {
    if (onComing.length >= 4) {
      if (current === onComing.length - 4) handleOriginSlide(4);
      else if (current === 0) handleOriginSlide(onComing.length - 8);
    }
  }, [current, onComing]);

  return (
    <div className="w-3/5 pt-10">
      <div className="flex justify-between pb-3">
        <div className="text-neutral-700 text-[28px] font-bold">
          다가오는 일정
        </div>

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
      {onComing.length !== 0 ? (
        <div className="overflow-hidden">
          <div
            className={`flex gap-x-3 ${carouselTransition}
            translate-x-[-${getMoveStyle(current)}px]`}
          >
            {onComing.map((card, i) => (
              <ScheduleSmallCard
                key={`small card-${i}`}
                title={card.title}
                location={card.location}
                durationStart={card.durationStart}
                durationEnd={card.durationEnd}
              />
            ))}
          </div>
        </div>
      ) : (
        <EmptyContent
          title="다가오는 일정"
          content="진행예정 일정이 없어요. 지금 일정을 만들어 보세요."
          link="일정 만들러 가기"
        />
      )}

      <div className="text-neutral-700 text-[28px] font-bold pb-3 mt-7">
        모집 중
      </div>

      <EmptyContent
        title="모집 중"
        content="기획서 참고"
        link="모집형 일정 만들기"
      />
      <EmptyContent
        title="참여 신청"
        content="참여 신청 일정이 없어요.\n 지금 일정을 만들어보세요."
        link="일정 만들러 가기"
      />
    </div>
  );
};

export default MyScheduleContent;
