// 모집 일정
import { defaultCardList } from "@schedule/const";
import React, { useEffect, useState } from "react";
import ContentFilter from "./ContentFilter";
import ScheduleContent, { CardItemType, scheduleType } from "./ScheduleContent";
import ScheduleHeader from "./ScheduleHeader";
import ScheduleTab from "./ScheduleTab";

type TabType = "전체" | "모집 중/예정" | "모집 완료";

interface DateProps {
  start: Date | undefined;
  end: Date | undefined;
}

const Recruit = () => {
  const [tab, setTab] = useState("전체");
  const [cardList, setCardList] = useState<CardItemType[]>(defaultCardList);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<DateProps>({
    start: undefined,
    end: undefined,
  });
  const [showCalendar, setShowCalendar] = useState({
    start: false,
    end: false,
  });

  const handleCalendarClick = (type: "start" | "end") => {
    setShowCalendar((prev) => ({
      start: type === "start" ? !prev.start : false,
      end: type === "end" ? !prev.end : false,
    }));
  };

  const handleStartDateChange = (newDate: Date) => {
    setDate((prevDate) => ({
      ...prevDate,
      start: newDate,
    }));
    handleCalendarClick("start");
  };

  const handleEndDateChange = (newDate: Date) => {
    setDate((prevDate) => ({
      ...prevDate,
      end: newDate,
    }));
    handleCalendarClick("end");
  };

  const onClickTab = (tab: string) => {
    setTab(tab);
    setShowCalendar({
      start: false,
      end: false,
    });
    setDate({ start: undefined, end: undefined });
  };

  const onClickSearch = () => {
    const searchData = {
      title: title,
      startDate: date.start,
      endDate: date.end ?? new Date(),
    };

    console.log("searchData", searchData);
    // TODO: API 요청 추가 ??? 아님 프론트에서 다시 필터 ??? <- 확인해야 함
  };

  const filteredInTab = (tab: string, dataList: CardItemType[]) => {
    const currentDate = new Date();

    switch (tab) {
      case "모집 중/예정":
        return dataList.filter(
          (item) =>
            new Date(item.recruitStart) > currentDate ||
            (new Date(item.recruitStart) <= currentDate &&
              new Date(item.recruitEnd) >= currentDate &&
              item.participateNum < item.participateCapacity),
        );

      case "모집 완료":
        return dataList.filter(
          (item) =>
            new Date(item.recruitEnd) < currentDate ||
            item.participateNum === item.participateCapacity,
        );

      default:
        return dataList;
    }
  };

  useEffect(() => {
    setCardList(filteredInTab(tab as TabType, defaultCardList));
  }, [tab, defaultCardList]);

  return (
    <div>
      <div className="flex justify-center pt-32">
        {/* 탭 */}
        <ScheduleHeader />
      </div>

      <div className="flex justify-center">
        {/* 일정 탭 */}
        <div className="flex flex-col w-3/5 pt-10">
          <ScheduleTab
            tabTitle="모집 일정"
            tabItems={recruitTabItems}
            currentTab={tab}
            onClickTab={onClickTab}
          />
        </div>
      </div>

      <div className="flex flex-col items-center min-h-[640px] bg-slate-100 border-t">
        <ContentFilter
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          showCalendar={showCalendar}
          handleCalendarClick={handleCalendarClick}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          onClickSearch={onClickSearch}
        />
        {/* 일정 카드*/}
        <ScheduleContent
          scheduleType={"recruit" as scheduleType}
          cardList={cardList}
          setCardList={setCardList}
        />
      </div>
    </div>
  );
};

export default Recruit;

const recruitTabItems: Record<"title", TabType>[] = [
  { title: "전체" },
  { title: "모집 중/예정" },
  { title: "모집 완료" },
];
