import { useModal } from "@shared/hook";

interface DateCityHandlerProps {
  callType: "date_start" | "date_end" | "city_first" | "city_second";
}

const DateCityHandler = ({ callType }: DateCityHandlerProps) => {
  const { openModal } = useModal();
  const type = callType.includes("date") ? "date" : "city";

  const handleOpen = () => {
    openModal({
      title: `${type === "date" ? "일정 시작일 선택" : "장소 선택"}`,
      isHeaderCloseBtn: true,
      contentId: `${
        type === "date"
          ? callType === "date_start"
            ? "calendarSelector_start"
            : "calendarSelector_end"
          : callType === "city_first"
          ? "citySelector_first"
          : "citySelector_second"
      }`,
    });
  };

  return (
    <label
      className={`${
        type === "date"
          ? "bg-calender w-[18px] h-[18px] "
          : "bg-city w-[23px] h-[23px] "
      }inline-block absolute overflow-hidden text-[0px] leading-[0px] bg-no-repeat top-1/2 left-[264px] -translate-y-1/2 cursor-pointer`}
      onClick={handleOpen}
    >
      {type === "date" ? "날짜" : "장소"}
    </label>
  );
};

export default DateCityHandler;
