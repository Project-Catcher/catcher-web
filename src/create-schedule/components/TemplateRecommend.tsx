import { SCHEDULE_TITLE } from "@create-schedule/constants";
import { TemplateSchedule } from "@shared/types";
import ScheduleTitle from "./ScheduleTitle";
import Template from "./Template";

interface TemplateRecommendProps {
  templates: TemplateSchedule[];
}

const TemplateRecommend = ({ templates }: TemplateRecommendProps) => {
  return (
    <div id="일정 템플릿">
      <ScheduleTitle
        title={SCHEDULE_TITLE.templateRecommend("명란마요")}
        textSize="text-[16px]"
      />
      <Template templates={templates} />
    </div>
  );
};

export default TemplateRecommend;
