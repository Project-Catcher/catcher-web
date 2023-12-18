// 일정 찾기 페이지 필터
import { ChangeEvent, useState } from "react";
import { findSchedule } from "@pages/api/findSchedule";
import { useModal } from "@shared/hook";
import { CardType } from "./Card";
import DurationTab from "./DurationTab";
import ExpenseTab from "./ExpenseTab";
import FilterTab from "./FilterTab";
import KeywordFilter from "./KeywordFilter";
import LocationTab from "./LocationTab";
import PersonnelTab from "./PersonnelTab";
import SortFilter from "./SortFilter";
import ThemeTab from "./ThemeTab";

interface ScheduleFilterProps {
  updateCardList: (newCardList: CardType[]) => void;
  defaultCardCount: number;
}

const ScheduleFilter = ({
  updateCardList,
  defaultCardCount,
}: ScheduleFilterProps) => {
  const { openAlert } = useModal();

  const initialFilter = {
    theme: "전체",
    date: { start: undefined, end: undefined },
    showCalendar: { start: false, end: false },
    expense: undefined,
    location: "",
    personnel: undefined,
  };

  const [filter, setFilter] = useState(initialFilter);
  const [sortFilter, setSortFilter] = useState("최신순");
  const [cardCount, setCardCount] = useState(defaultCardCount);

  const onFilterApply = () => {
    const params = {
      theme: filter.theme,
      dateStart: filter.date.start ?? "",
      dateEnd: filter.date.end ?? "",
      expense: filter.expense,
      location: filter.location,
      personnel: filter.personnel,
    };

    findSchedule(params).then((res) => {
      updateCardList(res);
      handleCardCount(res.length);
    });
  };

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

  // TODO: API 요청 추가
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSortFilter(value);
  };

  const handleCardCount = (count: number) => {
    setCardCount(count);
  };

  return (
    <>
      <div className="inline-block min-w-[280px] max-w-[280px] h-[970px] bg-neutral-50">
        <FilterTab onFilterApply={onFilterApply} handleReset={handleReset} />
        <ThemeTab theme={filter.theme} handleTab={handleTab} />
        <DurationTab
          date={filter.date}
          showCalendar={filter.showCalendar}
          handleCalendarClick={handleCalendarClick}
          handleDateChange={handleDateChange}
        />
        <ExpenseTab
          expense={filter.expense}
          handleExpenseChange={handleRadioChange}
        />
        <LocationTab
          location={filter.location}
          handleLocationChange={handleLocationChange}
        />
        <PersonnelTab
          personnel={filter.personnel}
          handlePersonnelChange={handleRadioChange}
        />
      </div>
      <div className="absolute right-0 pl-8 w-full-280">
        <KeywordFilter
          {...filter}
          updateCardList={updateCardList}
          handleCardCount={handleCardCount}
        />
        <div className="flex items-center justify-between px-2 mt-2">
          <div>
            <span className="text-sm font-medium">전체 </span>
            <span className="text-sm font-bold text-pink-400">{cardCount}</span>
          </div>
          <SortFilter
            sortFilter={sortFilter}
            handleSortChange={handleSortChange}
          />
        </div>
      </div>
    </>
  );
};

export default ScheduleFilter;
