// 모든 일정
import { defaultCardList } from "@schedule/const";
import React, { useEffect, useState } from "react";
import AllContent, { CardItemType } from "./AllContent";
import InputCalender from "./InputCalender";
import ScheduleHeader from "./ScheduleHeader";
import ScheduleTab from "./ScheduleTab";

type TabType = "전체" | "진행 예정" | "진행중/완료 일정";
interface DateProps {
  start: Date | undefined;
  end: Date | undefined;
}

const All = () => {
  const [tab, setTab] = useState("전체");
  const [cardList, setCardList] = useState<CardItemType[]>(defaultCardList);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<DateProps>({
    // TODO: 초기값을 undefined로 설정하면 warning이 발생
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
    <>
      <div className="flex justify-center pt-32">
        {/* 탭 */}
        <ScheduleHeader />
      </div>

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

      {/* 일정 */}
      <div className="flex flex-col items-center min-h-[660px] bg-slate-100 border-t-[1px]">
        {/* 필터링 */}
        <div className="flex items-center justify-center w-full py-3 bg-white">
          <div className="mr-2 text-sm font-light text-zinc-800">일정 제목</div>
          <div className="w-[280px] h-[38px] bg-white rounded-[5px] border border-neutral-200 flex items-center mr-6">
            <input
              className="w-full px-2 py-1 text-sm font-normal text-zinc-500 focus:outline-none"
              placeholder="일정 제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="ml-6 mr-2 text-sm font-light text-zinc-800">
            모집 기간
          </div>
          <InputCalender
            date={date.start}
            visible={showCalendar.start}
            placeholder={"모집 시작일"}
            handleCalendarClick={() => handleCalendarClick("start")}
            handleDateChange={handleStartDateChange}
          />
          <div className="px-2">-</div>
          <InputCalender
            date={date.end}
            visible={showCalendar.end}
            placeholder={"모집 종료일"}
            handleCalendarClick={() => handleCalendarClick("end")}
            handleDateChange={handleEndDateChange}
          />
          <button
            className="ml-3 w-[90px] h-10 bg-pink-400 rounded-[5px] text-white text-sm font-bold"
            onClick={onClickSearch}
          >
            찾기
          </button>
        </div>

        <AllContent cardList={cardList} setCardList={setCardList} />
      </div>
    </>
  );
};

export default All;

const allTabItems: Record<"title", TabType>[] = [
  { title: "전체" },
  { title: "진행 예정" },
  { title: "진행중/완료 일정" },
];
