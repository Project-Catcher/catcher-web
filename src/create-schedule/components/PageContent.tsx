import { SUBTITLE, TITLE } from "@create-schedule/constants";
import { useRecoilValue } from "recoil";
import { currentProgress } from "@shared/recoil";
import PlanDefaultInfo from "./PlanDefaultInfo";
import Remains from "./Remains";
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
    </>
  );
};

export default PageContent;
