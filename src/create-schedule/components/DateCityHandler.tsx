import { useModal } from "@shared/hook";

interface DateCityHandlerProps {
  callType: "date" | "city";
}

const DateCityHandler = ({ callType }: DateCityHandlerProps) => {
  const { openModal } = useModal();

  const handleOpen = () => {
    openModal({
      title: `${callType === "date" ? "일정 시작일 선택" : "장소 선택"}`,
      isHeaderCloseBtn: true,
      contentId: `${
        callType === "date" ? "calendarSelector" : "calendarSelector" // TODO: citySelector
      }`,
    });
  };

  return (
    <label
      className={`${
        callType === "date"
          ? "bg-calendar w-[18px] h-[18px] "
          : "bg-city w-[23px] h-[23px] "
      }inline-block absolute overflow-hidden text-[0px] leading-[0px] bg-no-repeat top-1/2 left-[264px] -translate-y-1/2 cursor-pointer`}
      onClick={handleOpen}
    >
      장소
    </label>
  );
};

export default DateCityHandler;
