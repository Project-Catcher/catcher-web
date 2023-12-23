import { SCHEDULE_TITLE } from "@create-schedule/constants";
import ScheduleTitle from "./ScheduleTitle";
import Template from "./Template";

interface TemplateRecommendProps {
  isClicked: {
    template: boolean;
    custom: boolean;
  };
  onClick: (key: "template" | "custom") => void;
}

const TemplateRecommend = ({ isClicked, onClick }: TemplateRecommendProps) => {
  return (
    <>
      <ScheduleTitle
        title={SCHEDULE_TITLE.templateRecommend("명란마요")}
        textSize="text-[16px]"
      />
      <Template isClicked={isClicked} onClick={onClick} />
    </>
  );
};

export default TemplateRecommend;
