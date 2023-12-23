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
  const [theme, setTheme] = useState("전체");
  const [date, setDate] = useState<DateProps>({
    start: undefined,
    end: undefined,
  });
  const [showCalendar, setShowCalendar] = useState({
    start: false,
    end: false,
  });
  const [expense, setExpense] = useState("");
  const [personnel, setPersonnel] = useState("");
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
          theme,
          dateStart: date.start,
          dateEnd: date.end,
          expense,
          personnel,
        },
      })
      .then((res) => {
        console.log("cardList", res.data);
        setCardList(res.data);
      });
  }, [theme, date, expense, personnel]);

  const handleReset = () => {
    setTheme("전체");
    setDate({
      start: undefined,
      end: undefined,
    });
    setShowCalendar({
      start: false,
      end: false,
    });
    setExpense("");
    setPersonnel("");
  };

  const handleCalendarClick = (type: "start" | "end") => {
    setShowCalendar((prev) => ({
      start: type === "start" ? !prev.start : false,
      end: type === "end" ? !prev.end : false,
    }));
  };

  const handleStartDateChange = (newDate: Date) => {
    const endDate = date.end;

    if (endDate && newDate > endDate) {
      openAlert({
        text: "시작 날짜는 종료 날짜보다 늦을 수 없습니다.",
        isHeaderCloseBtn: true,
      });
      return;
    }

    setDate((prevDate) => ({
      ...prevDate,
      start: newDate,
    }));

    handleCalendarClick("start");
  };

  const handleEndDateChange = (newDate: Date) => {
    const startDate = date.start;

    if (startDate && newDate < startDate) {
      openAlert({
        text: "종료 날짜는 시작 날짜보다 이전일 수 없습니다.",
        isHeaderCloseBtn: true,
      });
      return;
    }

    setDate((prevDate) => ({
      ...prevDate,
      end: newDate,
    }));

    handleCalendarClick("end");
  };

  const handleExpenseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense(e.target.value);
  };

  const handlePersonnelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonnel(e.target.value);
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
          theme,
          dateStart: date.start,
          dateEnd: date.end,
          expense,
          personnel,
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
        handleReset={handleReset}
        theme={theme}
        setTheme={setTheme}
        date={date}
        showCalendar={showCalendar}
        handleCalendarClick={handleCalendarClick}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        expense={expense}
        handleExpenseChange={handleExpenseChange}
        personnel={personnel}
        handlePersonnelChange={handlePersonnelChange}
      />
      <ScheduleContent
        keywordFilter={keywordFilter}
        handleKeywordChange={handleKeywordChange}
        cardList={cardList}
        sortFilter={sortFilter}
        handleSortChange={handleSortChange}
        onClickSearch={onClickSearch}
      />
    </div>
  );
};

export default Page;
