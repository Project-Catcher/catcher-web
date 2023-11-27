import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { currentProgress } from "@shared/recoil";
import BasicInfo from "./BasicInfo";
import FillPlan from "./FillPlan";
import FinishWriting from "./FinishWriting";
import SideBarIntro from "./SideBarIntro";
import TagNTemplate from "./TagNTemplate";

const PlanSideBar = () => {
  const current = useRecoilValue(currentProgress);
  const [currentTab, setCurrentTab] = useState("일정 제목 입력");

  const handleTab = (value: string) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    switch (current) {
      case 2:
        return setCurrentTab("일정 제목 입력");
      case 3:
        return setCurrentTab("태그");
      case 5:
        return setCurrentTab("공개범위 설정");
      default:
        return setCurrentTab("");
    }
  }, [current]);

  return (
    <div className="inline-block w-[241px] h-full border-r-2 border-[#F1F1F1]">
      <SideBarIntro />
      <BasicInfo
        current={current}
        currentTab={currentTab}
        handleTab={handleTab}
      />
      <TagNTemplate
        current={current}
        currentTab={currentTab}
        handleTab={handleTab}
      />
      <FillPlan handleTab={handleTab} />
      <FinishWriting
        current={current}
        currentTab={currentTab}
        handleTab={handleTab}
      />
    </div>
  );
};

export default PlanSideBar;
