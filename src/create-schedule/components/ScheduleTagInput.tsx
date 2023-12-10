import React from "react";
import { useRecoilValue } from "recoil";
import { Tag } from "@shared/components";
import { scheduleAnswers } from "@shared/recoil";
import TagInput from "./TagInput";

const ScheduleTagInput = () => {
  const { tag } = useRecoilValue(scheduleAnswers);

  return (
    <div
      id="태그"
      className="w-[628px] border border-[#E0E0E0] rounded-[5px] px-[8px] mb-[20px] focus-within:border-[#4285F4]"
    >
      <div className="w-full h-fit">
        <TagInput tag={tag} />
        <Tag tag={tag} hasRemoveIcon />
      </div>
    </div>
  );
};

export default ScheduleTagInput;
