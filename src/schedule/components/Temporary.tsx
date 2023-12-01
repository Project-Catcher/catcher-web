// import { allSchedule } from "@schedule/const";
import React, { useEffect, useState } from "react";
import { getTemporarySchedule } from "@pages/api/mySchedule";
import { DateProps } from "./All";
import ContentFilter from "./ContentFilter";
import ScheduleContent, { CardItemType, scheduleType } from "./ScheduleContent";
import ScheduleTab from "./ScheduleTab";

type TabType = "전체";

const Temporary = () => {
  const [tab, setTab] = useState("전체");
  const [cardList, setCardList] = useState<CardItemType[]>();
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
    setTab(tab as TabType);
    setShowCalendar({
      start: false,
      end: false,
    });
    setTitle("");
    setDate({ start: undefined, end: undefined });
  };

  const onClickSearch = () => {
    getTemporarySchedule(title, date.start, date.end).then((res) =>
      setCardList(res.data),
    );
  };

  useEffect(() => {
    try {
      getTemporarySchedule().then((res) => {
        setCardList(res.data);
      });
    } catch (error) {
      console.error("API 호출 오류", error);
    }
  }, [tab]);

  return (
    <div>
      <div className="flex justify-center">
        {/* 일정 탭 */}
        <div className="flex flex-col w-3/5 pt-10">
          <ScheduleTab
            tabTitle="임시저장"
            tabItems={temporaryTabItems}
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
          scheduleType={"temporary" as scheduleType}
          cardList={cardList}
          setCardList={setCardList}
        />
      </div>
    </div>
  );
};

export default Temporary;

const temporaryTabItems: Record<"title", TabType>[] = [{ title: "전체" }];
