import { SelectedCategoryItem } from "@shared/types";

interface ScheduleTimeSelectProps {
  selectedItem: SelectedCategoryItem | null;
  handleTime: (
    key: "start" | "end",
    time: "hour" | "minute",
    value: number,
  ) => void;
}

const ScheduleTimeSelect = ({
  selectedItem,
  handleTime,
}: ScheduleTimeSelectProps) => {
  const hourArray = Array.from({ length: 25 }, (_, index) => index);
  const minuteArray = Array.from({ length: 4 }, (_, index) => index * 15);

  return (
    <>
      <select
        defaultValue={`${selectedItem?.selectedTime}시`}
        className="h-[29px] text-[12px] text-[#727578] -tracking-[0.01em] border border-[#E0E0E0] rounded-[5px] px-[9px] outline-0 mr-[4px]"
        onChange={({ target: { value } }) =>
          handleTime("start", "hour", parseInt(value, 10))
        }
      >
        {hourArray.map((hour) => (
          <option key={hour}>{hour}시</option>
        ))}
      </select>
      <select
        className="h-[29px] text-[12px] text-[#727578] -tracking-[0.01em] border border-[#E0E0E0] rounded-[5px] px-[9px] outline-0 mr-[4px]"
        onChange={({ target: { value } }) =>
          handleTime("start", "minute", parseInt(value, 10))
        }
      >
        {minuteArray.map((minute) => (
          <option key={minute}>{minute}분</option>
        ))}
      </select>
      <span className="w-[8px] border border-[#333333] mr-[4px]"></span>
      <select
        defaultValue={`${selectedItem?.selectedTime}시`}
        className="h-[29px] text-[12px] text-[#727578] -tracking-[0.01em] border border-[#E0E0E0] rounded-[5px] px-[9px] outline-0 mr-[4px]"
        onChange={({ target: { value } }) =>
          handleTime("end", "hour", parseInt(value, 10))
        }
      >
        {hourArray.map((hour) => (
          <option key={hour}>{hour}시</option>
        ))}
      </select>
      <select
        defaultValue={"15분"}
        className="h-[29px] text-[12px] text-[#727578] -tracking-[0.01em] border border-[#E0E0E0] rounded-[5px] px-[9px] outline-0"
        onChange={({ target: { value } }) =>
          handleTime("end", "minute", parseInt(value, 10))
        }
      >
        {minuteArray.map((minute) => (
          <option key={minute}>{minute}분</option>
        ))}
      </select>
    </>
  );
};

export default ScheduleTimeSelect;
