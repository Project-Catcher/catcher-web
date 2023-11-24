import { SCHEDULE_TITLE } from "@create-schedule/constants";
import CurrentRecommendTag from "./CurrentRecommendTag";
import ScheduleTitle from "./ScheduleTitle";

const TagRecommend = () => {
  return (
    <>
      <ScheduleTitle
        title={SCHEDULE_TITLE.tagRecommend}
        textSize="text-[16px]"
        hasSubTitle
        subTitle="클릭해서 추가가 가능해요."
      />
      <CurrentRecommendTag />
    </>
  );
};

export default TagRecommend;
