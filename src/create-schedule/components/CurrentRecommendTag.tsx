import { useRecoilState } from "recoil";
import { Tag } from "@shared/components";
import { scheduleAnswers } from "@shared/recoil";
import { checkTagDuplication } from "@shared/utils";

const CurrentRecommendTag = () => {
  const [answer, setAnswer] = useRecoilState(scheduleAnswers);

  const recommendTag = [
    "여럿이 함께",
    "접근이 쉬움",
    "색다른",
    "인기 있는 장소",
    "친구랑",
    "혼자 즐기는",
  ];

  const handleClick = (index: number) => {
    if (answer.tag.length < 7) {
      try {
        checkTagDuplication(answer.tag, recommendTag[index]);
        const newTag = [...answer.tag];
        newTag.push(recommendTag[index]);
        setAnswer((prev) => ({ ...prev, tag: newTag }));
      } catch (error) {
        return;
      }
    }
  };

  return (
    <Tag
      tag={recommendTag}
      tagStyle="text-[#666666] bg-[#E6EDFF]"
      handleClick={handleClick}
    />
  );
};

export default CurrentRecommendTag;
