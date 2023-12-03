import { SCHEDULE_SUBTITLE, SCHEDULE_TITLE } from "@create-schedule/constants";
import ScheduleTitle from "./ScheduleTitle";
import SelectMainImageBox from "./SelectMainImageBox";

const PlanMainImage = () => {
  return (
    <div className="mb-[38px]">
      <ScheduleTitle
        hasSubTitle
        title={SCHEDULE_TITLE.mainImage}
        subTitle={SCHEDULE_SUBTITLE.mainImage}
      />
      <SelectMainImageBox />
    </div>
  );
};

export default PlanMainImage;
