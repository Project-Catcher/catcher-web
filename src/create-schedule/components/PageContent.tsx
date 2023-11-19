import { SUBTITLE, TITLE } from "@create-schedule/constants";
import { useRecoilValue } from "recoil";
import { currentProgress } from "@shared/recoil";
import DragnDropContainer from "./DragnDropContainer";
import PlanDefaultInfo from "./PlanDefaultInfo";
import Remains from "./Remains";
import ScheduleTagTemplate from "./ScheduleTagTemplate";
import TimeTableContainer from "./TimeTableContainer";
import Title from "./Title";

const PageContent = () => {
  const current = useRecoilValue(currentProgress);

  return (
    <>
      {current === 1 && (
        <>
          <Title
            title={TITLE.remains}
            subTitle={SUBTITLE.fighting("명란마요")}
          />
          <Remains />
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
          <ScheduleTagTemplate />
        </div>
      )}
      {current === 4 && (
        <>
          <div className="inline-block">
            <Title
              title={TITLE.fill}
              subTitle={SUBTITLE.fillyourplan("명란마요")}
            />
          </div>
          <div className="flex">
            <TimeTableContainer />
            <DragnDropContainer />
          </div>
        </>
      )}
    </>
  );
};

export default PageContent;
