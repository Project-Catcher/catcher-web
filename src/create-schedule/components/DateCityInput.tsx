import { useRecoilValue } from "recoil";
import { scheduleAnswers } from "@shared/recoil";
import DateCityHandler from "./DateCityHandler";

interface DateCityInputProps {
  callType: "date_start" | "date_end" | "city_first" | "city_second";
  answerType?: "startAt" | "endAt";
  placeholder: string;
}

const DateCityInput = ({
  callType,
  answerType,
  placeholder,
}: DateCityInputProps) => {
  const answer = useRecoilValue(scheduleAnswers);

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
            ? answer[answerType]
            : callType === "city_first"
            ? answer.location.split(" ")[0]
            : answer.location.split(" ")[1] ?? ""
        }
      />
    </div>
  );
};

export default DateCityInput;
