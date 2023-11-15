import { SCHEDULE_TITLE } from "@create-schedule/constants";
import ScheduleNextButton from "./ScheduleNextButton";
import ScheduleTagInput from "./ScheduleTagInput";
import ScheduleTitle from "./ScheduleTitle";
import TagRecommend from "./TagRecommend";
import TemplateButton from "./TemplateButton";
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
      <div className="w-full text-center mt-[60px]">
        <ScheduleNextButton value="다음으로 넘어갈까요?" callType="template" />
      </div>
    </>
  );
};

export default ScheduleTagTemplate;
