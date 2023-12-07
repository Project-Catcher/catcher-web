import { SUBTITLE, TITLE } from "@create-schedule/constants";
import { TemplateSchedule, TemporarySchedule } from "@shared/types";
import PlanDefaultInfo from "./PlanDefaultInfo";
import Remains from "./Remains";
import ScheduleTagTemplate from "./ScheduleTagTemplate";
import Title from "./Title";

interface PageContentProps {
  currentProgress: number;
  temporary: TemporarySchedule[];
  templates: TemplateSchedule[];
}

const PageContent = ({
  currentProgress,
  temporary,
  templates,
}: PageContentProps) => {
  return (
    <>
      {currentProgress === 1 && (
        <>
          <Title
            title={TITLE.temporary}
            subTitle={SUBTITLE.fighting("명란마요")}
          />
          <Remains temporary={temporary} />
        </>
      )}
      {currentProgress === 2 && (
        <div className="w-[628px]">
          <Title
            title={TITLE.nthPlan("명란마요", 5)}
            subTitle={SUBTITLE.withyou}
          />
          <PlanDefaultInfo />
        </div>
      )}
      {currentProgress === 3 && (
        <div className="w-[628px]">
          <Title title={TITLE.tag} subTitle={SUBTITLE.withyou} />
          <ScheduleTagTemplate templates={templates} />
        </div>
      )}
    </>
  );
};

export default PageContent;
