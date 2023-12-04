import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentScheduleProgress } from "@shared/recoil";
import { ScheduleCardSection } from "@shared/types";
import CurrentPage from "./CurrentPage";
import PageContent from "./PageContent";

interface PlanContentProps {
  remains: ScheduleCardSection[];
  templates: ScheduleCardSection[];
}

const PlanContent = ({ remains, templates }: PlanContentProps) => {
  const [currentProgress, setCurrentProgress] = useRecoilState(
    currentScheduleProgress,
  );

  useEffect(() => {
    if (remains.length === 0 && currentProgress !== 2) {
      setCurrentProgress(2);
    }
  }, [remains]);

  return (
    <div className="absolute inline-block w-planContent h-planScrollbar px-[66px] py-[36px] overflow-FAQ">
      <CurrentPage currentProgress={currentProgress} />
      <PageContent
        currentProgress={currentProgress}
        remains={remains}
        templates={templates}
      />
    </div>
  );
};

export default PlanContent;
