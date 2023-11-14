import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface InputCalenderProps {
  date: Date | undefined;
  visible: boolean;
  placeholder: string;
  handleCalendarClick: () => void;
  handleDateChange: (newDate: Date) => void;
}

const InputCalender = ({
  date,
  visible,
  placeholder,
  handleCalendarClick,
  handleDateChange,
}: InputCalenderProps) => {
  return (
    <div className="w-[145px] h-[38px] bg-white rounded-[5px] border border-neutral-200  relative cursor-pointer">
      <div className="h-full flex-center" onClick={handleCalendarClick}>
        <input
          className="w-full px-2 py-1 text-sm font-normal cursor-pointer text-zinc-500 focus:outline-none"
          placeholder={placeholder}
          defaultValue={date?.toLocaleDateString()}
          readOnly
        />
        <div className="pr-2">
          <Image
            src="/assets/schedule/calender.svg"
            alt="calender"
            width={13}
            height={13}
          />
        </div>
      </div>
      {visible && (
        <div className="absolute top-[38px] left-0 z-30">
          <Calendar value={date || undefined} onClickDay={handleDateChange} />
        </div>
      )}
    </div>
  );
};

export default InputCalender;
