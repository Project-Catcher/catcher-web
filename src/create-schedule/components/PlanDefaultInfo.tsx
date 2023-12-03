import PlanMainImage from "./PlanMainImage";
import PlanTitleInput from "./PlanTitleInput";
import ScheduleNextButton from "./ScheduleNextButton";
import SelectCity from "./SelectCity";
import SelectDate from "./SelectDate";

const PlanDefaultInfo = () => {
  return (
    <>
      <PlanTitleInput />
      <PlanMainImage />
      <SelectDate />
      <SelectCity />
      <div className="w-[628px] text-center">
        <ScheduleNextButton value="다음으로 넘어갈까요?" callType="basicInfo" />
      </div>
    </>
  );
};

export default PlanDefaultInfo;
