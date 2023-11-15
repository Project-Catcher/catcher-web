import { SCHEDULE_TITLE } from "@create-schedule/constants";
import ScheduleTagInput from "./ScheduleTagInput";
import ScheduleTitle from "./ScheduleTitle";
import TagRecommend from "./TagRecommend";
import TemplateRecommend from "./TemplateRecommend";

const ScheduleTagTemplate = () => {
  return (
    <>
      <ScheduleTitle title={SCHEDULE_TITLE.tag} />
      <ScheduleTagInput />
      <div className="mb-[38px]">
        <TagRecommend />
      </div>
      <TemplateRecommend />
    </>
  );
};

export default ScheduleTagTemplate;
