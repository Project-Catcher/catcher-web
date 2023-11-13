import { SCHEDULE_SUBTITLE, SCHEDULE_TITLE } from "@create-schedule/constants";
import DateCityInput from "./DateCityInput";
import ScheduleTitle from "./ScheduleTitle";

const SelectDate = () => {
  return (
    <div className="mb-[38px]">
      <ScheduleTitle
        hasSubTitle
        title={SCHEDULE_TITLE.date}
        subTitle={SCHEDULE_SUBTITLE.date}
      />
      <DateCityInput
        callType="date"
        answerType="startedAt"
        placeholder="일정 시작일(오늘 날짜 기준)"
      />
      <span className="inline-block relative w-[13px] h-[2px] border border-[#333333] bottom-[4px] mx-[5px]" />
      <DateCityInput
        callType="date"
        answerType="endedAt"
        placeholder="일정 종료일"
      />
    </div>
  );
};

export default SelectDate;
