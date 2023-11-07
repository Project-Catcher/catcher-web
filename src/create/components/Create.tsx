// 일정 만들기 1
import { defaultCardList } from "@create/const";
import React, { useEffect, useState } from "react";
import InputCalender from "./InputCalender";
import ScheduleCard from "./ScheduleCard";
import ScheduleTab from "./ScheduleTab";
import Tab from "./Tab";

export type TabType = "전체" | "진행 중인 일정" | "완료된 일정" | "임시 저장";

interface DateProps {
  start: Date | undefined;
  end: Date | undefined;
}

interface CardItemType {
  theme: string;
  img?: string;
  title: string;
  writer: string;
  status: boolean;
  content?: string;
  durationStart: string;
  durationEnd: string;
}

const Create = () => {
  const [tab, setTab] = useState<TabType>("전체");
  const [CardList, setCardList] = useState<CardItemType[]>(defaultCardList);
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
  const [isMySchedule, setIsMySchedule] = useState(false);

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

  const onClickTab = (tab: TabType) => {
    setTab(tab);
    setShowCalendar({
      start: false,
      end: false,
    });
  };

  const onClickSearch = () => {
    const searchData = {
      title: title, // title 변수에 저장된 검색어
      startDate: date.start, // date.start 변수에 저장된 시작 날짜
      endDate: date.end, // date.end 변수에 저장된 종료 날짜
    };

    console.log("searchData", searchData);
    // TODO: API 요청 추가
  };

  // TODO: 내가 만든 일정만 필터 로직 추가
  const onClickMySchedule = () => setIsMySchedule((prev) => !prev);

  // TODO: 삭제 요청 추가
  const onClickDelete = (i: number) => {
    const updatedCardList = [...CardList];
    updatedCardList.splice(i, 1);
    setCardList(updatedCardList);
  };

  // tab으로 필터링
  const filteredInTab = (tab: string, dataList: CardItemType[]) => {
    const currentDate = new Date();

    if (tab === "임시 저장") {
      return dataList.filter((item) => !item.status);
    } else if (tab === "진행 중인 일정") {
      return dataList.filter((item) => {
        const cardStartDate = new Date(item.durationStart);
        const cardEndDate = new Date(item.durationEnd);
        return (
          !item.status &&
          cardStartDate <= currentDate &&
          cardEndDate >= currentDate
        );
      });
    } else if (tab === "완료된 일정") {
      return dataList.filter((item) => {
        const cardEndDate = new Date(item.durationEnd);
        return !item.status && cardEndDate < currentDate;
      });
    } else {
      return dataList;
    }
  };

  return (
    <>
      <div className="flex justify-center pt-32">
        {/* 탭 */}
        <Tab />
      </div>

      <div className="flex justify-center">
        {/* 일정 탭 */}
        <div className="flex flex-col w-3/5 pt-10">
          <ScheduleTab currentTab={tab} onClickTab={onClickTab} />
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

        <div className="w-3/5">
          <div className="flex justify-between mt-6 ">
            <div className="text-sm">
              전체 <span className="text-pink-400">{CardList.length}</span>개
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
            {CardList.map((card, i) => (
              <ScheduleCard
                key={`card-${i}`}
                idx={i}
                theme={card.theme}
                img={card.img}
                title={card.title}
                writer={card.writer}
                status={card.status}
                content={card.content}
                durationStart={card.durationStart}
                durationEnd={card.durationEnd}
                onClickDelete={onClickDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
