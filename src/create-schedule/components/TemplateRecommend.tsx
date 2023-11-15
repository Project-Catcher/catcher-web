import { SCHEDULE_TITLE } from "@create-schedule/constants";
import ScheduleNextButton from "./ScheduleNextButton";
import ScheduleTitle from "./ScheduleTitle";
import Template from "./Template";
import TemplateButton from "./TemplateButton";

const TemplateRecommend = () => {
  return (
    <>
      <ScheduleTitle
        title={SCHEDULE_TITLE.templateRecommend("명란마요")}
        textSize="text-[16px]"
      />
      <div className="flex flex-nowrap gap-[8px] w-full">
        <Template />
      </div>
      <TemplateButton />
      <div className="w-full text-center mt-[60px]">
        <ScheduleNextButton value="다음으로 넘어갈까요?" callType="template" />
      </div>
    </>
  );
};

export default TemplateRecommend;
