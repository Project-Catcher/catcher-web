import { SUBTITLE, TITLE } from "@create-schedule/constants";
import { useRecoilValue } from "recoil";
import { currentProgress } from "@shared/recoil";
import { ScheduleCardSection } from "@shared/types";
import PlanDefaultInfo from "./PlanDefaultInfo";
import Remains from "./Remains";
import ScheduleTagTemplate from "./ScheduleTagTemplate";
import Title from "./Title";

interface PageContentProps {
  remains: ScheduleCardSection[];
  templates: ScheduleCardSection[];
}

const PageContent = ({ remains, templates }: PageContentProps) => {
  const current = useRecoilValue(currentProgress);

  return (
    <>
      {current === 1 && (
        <>
          <Title
            title={TITLE.remains}
            subTitle={SUBTITLE.fighting("명란마요")}
          />
          <Remains remains={remains} />
        </>
      )}
      {current === 2 && (
        <div className="w-[628px]">
          <Title
            title={TITLE.nthPlan("명란마요", 5)}
            subTitle={SUBTITLE.withyou}
          />
          <PlanDefaultInfo />
        </div>
      )}
      {current === 3 && (
        <div className="w-[628px]">
          <Title title={TITLE.tag} subTitle={SUBTITLE.withyou} />
          <ScheduleTagTemplate templates={templates} />
        </div>
      )}
    </>
  );
};

export default PageContent;
