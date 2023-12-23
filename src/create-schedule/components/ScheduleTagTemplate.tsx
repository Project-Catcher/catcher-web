import { SCHEDULE_TITLE } from "@create-schedule/constants";
import { useState } from "react";
import ScheduleNextButton from "./ScheduleNextButton";
import ScheduleTagInput from "./ScheduleTagInput";
import ScheduleTitle from "./ScheduleTitle";
import TagRecommend from "./TagRecommend";
import TemplateRecommend from "./TemplateRecommend";

const ScheduleTagTemplate = () => {
  const [isClicked, setIsClicked] = useState({
    template: false,
    custom: false,
  });

  const onClick = (key: "template" | "custom") => {
    setIsClicked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <ScheduleTitle title={SCHEDULE_TITLE.tag} />
      <ScheduleTagInput />
      <div className="mb-[38px]">
        <TagRecommend />
      </div>
      <TemplateRecommend isClicked={isClicked} onClick={onClick} />
      <div className="w-full text-center mt-[60px]">
        <ScheduleNextButton
          disabled={!isClicked.custom}
          value="다음으로 넘어갈까요?"
          callType="template"
        />
      </div>
    </>
  );
};

export default ScheduleTagTemplate;
