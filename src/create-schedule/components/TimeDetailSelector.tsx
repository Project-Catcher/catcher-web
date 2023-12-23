import { useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedScheduleItem } from "@shared/recoil";
import ScheduleRegisterButton from "./ScheduleRegisterButton";
import ScheduleTimeSelect from "./ScheduleTimeSelect";

const TimeDetailSelector = () => {
  const selectedItem = useRecoilValue(selectedScheduleItem);
  const [time, setTime] = useState({
    start: { hour: `${selectedItem?.selectedTime}시`, minute: "0분" },
    end: { hour: `${selectedItem?.selectedTime}시`, minute: "15분" },
  });

  const handleTime = (
    key: "start" | "end",
    time: "hour" | "minute",
    value: number,
  ) => {
    setTime((prev) => ({ ...prev, [key]: { ...prev[key], [time]: value } }));
  };

  return (
    <>
      <div className="flex items-center mt-[23px]">
        <div className="min-w-[80px] text-[#333333]">시간 설정</div>
        <ScheduleTimeSelect
          selectedItem={selectedItem}
          handleTime={handleTime}
        />
      </div>
      <div className="text-[12px] text-[#8D8D8D] font-medium -tracking-[0.01em] ml-[80px] mt-[2px] mb-[15px]">
        15분 단위로 선택이 가능합니다.
      </div>
      <div className="mb-[47px]">
        <div className="min-w-[80px] text-[#333333] mb-[5px]">
          세부내용(선택)
        </div>
        <div className="h-[78px] border border-[#ADADAD] rounded-[9px] px-[16px] py-[10px] focus-within:border-[#4285F4]">
          <textarea className="w-full resize-none outline-0" />
        </div>
      </div>
      <div className="flex gap-[10px] justify-center">
        <ScheduleRegisterButton time={time} selectedItem={selectedItem} />
      </div>
    </>
  );
};

export default TimeDetailSelector;
