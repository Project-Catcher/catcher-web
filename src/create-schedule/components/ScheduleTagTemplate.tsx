import { SCHEDULE_TITLE } from "@create-schedule/constants";
import { TemplateSchedule } from "@shared/types";
import ScheduleNextButton from "./ScheduleNextButton";
import ScheduleTagInput from "./ScheduleTagInput";
import ScheduleTitle from "./ScheduleTitle";
import TagRecommend from "./TagRecommend";
import TemplateRecommend from "./TemplateRecommend";

interface ScheduleTagTemplateProps {
  templates: TemplateSchedule[];
}

const ScheduleTagTemplate = ({ templates }: ScheduleTagTemplateProps) => {
  return (
    <>
      <ScheduleTitle title={SCHEDULE_TITLE.tag} />
      <ScheduleTagInput />
      <div className="mb-[38px]">
        <TagRecommend />
      </div>
      <TemplateRecommend templates={templates} />
      <div className="w-full text-center mt-[60px]">
        <ScheduleNextButton value="다음으로 넘어갈까요?" callType="template" />
      </div>
    </>
  );
};

export default ScheduleTagTemplate;
