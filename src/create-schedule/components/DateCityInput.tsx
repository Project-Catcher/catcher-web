import { handleDateFormat } from "@create-schedule/util";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { scheduleAnswers } from "@shared/recoil";
import DateCityHandler from "./DateCityHandler";

interface DateCityInputProps {
  callType: "date_start" | "date_end" | "city";
  answerType?: "startedAt" | "endedAt";
  placeholder: string;
}

const DateCityInput = ({
  callType,
  answerType,
  placeholder,
}: DateCityInputProps) => {
  const answer = useRecoilValue(scheduleAnswers);

  const startDate = useMemo(() => {
    if (answer.startedAt) {
      return handleDateFormat(answer.startedAt);
    }
  }, [answer.startedAt]);

  const endDate = useMemo(() => {
    if (answer.endedAt) {
      return handleDateFormat(answer.endedAt);
    }
  }, [answer.endedAt]);

  return (
    <div className="relative inline-block">
      <DateCityHandler callType={callType} />
      <input
        readOnly
        className="w-[301px] h-[55px] border border-[#E0E0E0] rounded-[5px] px-[19px]"
        type="text"
        placeholder={placeholder}
        value={
          answerType && callType.includes("date")
            ? callType === "date_start"
              ? startDate
              : endDate
            : answer.city
        }
      />
    </div>
  );
};

export default DateCityInput;
