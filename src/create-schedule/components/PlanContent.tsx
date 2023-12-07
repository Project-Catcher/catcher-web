import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentScheduleProgress } from "@shared/recoil";
import { TemplateSchedule, TemporarySchedule } from "@shared/types";
import CurrentPage from "./CurrentPage";
import PageContent from "./PageContent";

interface PlanContentProps {
  temporary: TemporarySchedule[];
  templates: TemplateSchedule[];
}

const PlanContent = ({ temporary, templates }: PlanContentProps) => {
  const [currentProgress, setCurrentProgress] = useRecoilState(
    currentScheduleProgress,
  );

  useEffect(() => {
    if (temporary.length === 0 && currentProgress !== 2) {
      setCurrentProgress(2);
    }
  }, [temporary]);

  return (
    <div className="absolute inline-block w-planContent h-planScrollbar px-[66px] py-[36px] overflow-FAQ">
      <CurrentPage currentProgress={currentProgress} />
      <PageContent
        currentProgress={currentProgress}
        temporary={temporary}
        templates={templates}
      />
    </div>
  );
};

export default PlanContent;
