import { SCHEDULE_TITLE } from "@create-schedule/constants";
import ScheduleTagInput from "./ScheduleTagInput";
import ScheduleTitle from "./ScheduleTitle";
import TagRecommend from "./TagRecommend";

const ScheduleTagTemplate = () => {
  return (
    <>
      <ScheduleTitle title={SCHEDULE_TITLE.tag} />
      <ScheduleTagInput />
      <TagRecommend />
    </>
  );
};

export default ScheduleTagTemplate;
