// 모든 일정
import { defaultCardList } from "@schedule/const";
import React, { useEffect, useState } from "react";
import ContentFilter from "./ContentFilter";
import ScheduleContent, { CardItemType, scheduleType } from "./ScheduleContent";
import ScheduleHeader from "./ScheduleHeader";
import ScheduleTab from "./ScheduleTab";

type TabType = "전체" | "진행 예정" | "진행중/완료 일정";
export interface DateProps {
  start: Date | undefined;
  end: Date | undefined;
}

const All = () => {
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

  // tab으로 필터링
  const filteredInTab = (tab: string, dataList: CardItemType[]) => {
    const currentDate = new Date();

    if (tab === "진행 예정") {
      return dataList.filter((item) => {
        return new Date(item.durationStart) > currentDate;
      });
    } else if (tab === "진행중/완료 일정") {
      return dataList.filter((item) => {
        return new Date(item.durationStart) <= currentDate;
      });
    } else {
      return dataList;
    }
  };

  useEffect(() => {
    setCardList(filteredInTab(tab, defaultCardList));
  }, [tab]);

  return (
    <div>
      <div className="flex justify-center">
        {/* 일정 탭 */}
        <div className="flex flex-col w-3/5 pt-10">
          <ScheduleTab
            tabTitle="모든 일정"
            tabItems={allTabItems}
            currentTab={tab}
            onClickTab={onClickTab}
          />
        </div>
      </div>

      <div className="flex flex-col items-center min-h-[660px] bg-slate-100 border-t">
        {/* 일정 필터*/}
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
          scheduleType={"all" as scheduleType}
          cardList={cardList}
          setCardList={setCardList}
        />
      </div>
    </div>
  );
};

export default All;

const allTabItems: Record<"title", TabType>[] = [
  { title: "전체" },
  { title: "진행 예정" },
  { title: "진행중/완료 일정" },
];
