import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useModal } from "@shared/hook";
import { CardType } from "./Card";
import ScheduleContent from "./ScheduleContent";
import ScheduleFilter from "./ScheduleFilter";

interface FindScheduleProps {
  defaultCardList: CardType[];
}
export interface DateProps {
  start: Date | undefined;
  end: Date | undefined;
}

export interface ShowCalendarType {
  start: boolean;
  end: boolean;
}

const Page = ({ defaultCardList }: FindScheduleProps) => {
  const { openAlert } = useModal();
  const initialFilter = {
    theme: "전체",
    date: { start: undefined, end: undefined },
    showCalendar: { start: false, end: false },
    expense: "",
    location: "",
    personnel: "",
  };
  const [filter, setFilter] = useState(initialFilter);

  const [keywordFilter, setKeywordFilter] = useState({
    option: "전체",
    keyword: "",
  });
  const [sortFilter, setSortFilter] = useState("최신순");
  const [cardList, setCardList] = useState(defaultCardList);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/getFindCard`, {
        params: {
          theme: filter.theme,
          dateStart: filter.date.start,
          dateEnd: filter.date.end,
          expense: filter.expense,
          location: filter.location,
          personnel: filter.personnel,
        },
      })
      .then((res) => {
        console.log("cardList", res.data);
        setCardList(res.data);
      });
  }, [filter]);

  const handleReset = () => {
    setFilter(initialFilter);
  };

  const handleTab = (theme: string) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      theme: theme,
    }));
  };

  const handleCalendarClick = (type: "start" | "end") => {
    setFilter((prev) => ({
      ...prev,
      showCalendar: {
        ...prev.showCalendar,
        start:
          type === "start" ? !prev.showCalendar.start : prev.showCalendar.start,
        end: type === "end" ? !prev.showCalendar.end : prev.showCalendar.end,
      },
    }));
  };

  const handleDateChange = (type: "start" | "end", newDate: Date) => {
    const { start, end } = filter.date;

    if (
      type === "start" &&
      end &&
      newDate.getTime() > new Date(end).getTime()
    ) {
      openAlert({
        text: "시작 날짜는 종료 날짜보다 늦을 수 없습니다.",
        isHeaderCloseBtn: true,
      });
      return;
    }

    if (
      type === "end" &&
      start &&
      newDate.getTime() < new Date(start).getTime()
    ) {
      openAlert({
        text: "종료 날짜는 시작 날짜보다 이전일 수 없습니다.",
        isHeaderCloseBtn: true,
      });
      return;
    }

    setFilter((prevFilter) => ({
      ...prevFilter,
      date: {
        ...prevFilter.date,
        [type]: newDate,
      },
    }));

    handleCalendarClick(type);
  };

  // TODO: 모달 띄우고, 수정 필요
  const handleLocationChange = (callType: string, value: string) => {
    if (callType === "first") {
      setFilter((prevFilter) => ({ ...prevFilter, location: value }));
    } else {
      setFilter((prevFilter) => ({
        ...prevFilter,
        location: `${prevFilter.location.split(" ")[0]} ${value}`,
      }));
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleKeywordChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setKeywordFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClickSearch = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/getFindCard`, {
        params: {
          theme: filter.theme,
          dateStart: filter.date.start,
          dateEnd: filter.date.end,
          expense: filter.expense,
          personnel: filter.personnel,
          keywordOption: keywordFilter.option,
          keyword: keywordFilter.keyword,
        },
      })
      .then((res) => {
        console.log("cardList", res.data);
        setCardList(res.data);
        setKeywordFilter((prev) => ({
          ...prev,
          keyword: "",
        }));
      });
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSortFilter(value);
  };

  return (
    <div className="w-4/5 min-h-[90vh] flex">
      <ScheduleFilter
        handleTab={handleTab}
        handleCalendarClick={handleCalendarClick}
        handleDateChange={handleDateChange}
        handleLocationChange={handleLocationChange}
        handleRadioChange={handleRadioChange}
        handleReset={handleReset}
        {...filter}
      />
      <ScheduleContent
        cardList={cardList}
        keywordFilter={keywordFilter}
        handleKeywordChange={handleKeywordChange}
        sortFilter={sortFilter}
        handleSortChange={handleSortChange}
        onClickSearch={onClickSearch}
      />
    </div>
  );
};

export default Page;
