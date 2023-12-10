import { SCHEDULE_SUBTITLE, SCHEDULE_TITLE } from "@create-schedule/constants";
import DateCityInput from "./DateCityInput";
import ScheduleTitle from "./ScheduleTitle";

const SelectCity = () => {
  return (
    <div id="장소 선택" className="mb-[60px]">
      <ScheduleTitle
        hasSubTitle
        title={SCHEDULE_TITLE.location}
        subTitle={SCHEDULE_SUBTITLE.location}
      />
      <DateCityInput callType="city_first" placeholder="대한민국" />
      <span className="inline-block relative invisible w-[13px] h-[2px] border border-[#333333] bottom-[4px] mx-[5px]" />
      <DateCityInput callType="city_second" placeholder="시군구" />
    </div>
  );
};

export default SelectCity;
