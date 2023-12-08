import { SCHEDULE_TITLE } from "@create-schedule/constants";
import ScheduleTitle from "./ScheduleTitle";
import Template from "./Template";

const TemplateRecommend = () => {
  return (
    <>
      <ScheduleTitle
        title={SCHEDULE_TITLE.templateRecommend("명란마요")}
        textSize="text-[16px]"
      />
      <Template />
    </>
  );
};

export default TemplateRecommend;
