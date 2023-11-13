import { useModal } from "@shared/hook";

const CalendarHandler = () => {
  const { openModal } = useModal();

  const handleOpen = () => {
    openModal({
      title: "일정 시작일 선택",
      isHeaderCloseBtn: true,
      contentId: "calendarSelector",
    });
  };

  return (
    <label
      className="inline-block absolute overflow-hidden text-[0px] leading-[0px] w-[18px] h-[18px] bg-calender bg-no-repeat top-1/2 left-[264px] -translate-y-1/2 cursor-pointer"
      onClick={handleOpen}
    >
      캘린더
    </label>
  );
};

export default CalendarHandler;
