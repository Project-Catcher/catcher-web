import { SUBTITLE, TITLE } from "@makeplan/constants";
import { useRecoilValue } from "recoil";
import { currentProgress } from "@shared/recoil";
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
    </>
  );
};

export default PageContent;
