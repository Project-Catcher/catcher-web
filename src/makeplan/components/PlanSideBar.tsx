import BasicInfo from "./BasicInfo";
import FillPlan from "./FillPlan";
import FinishWriting from "./FinishWriting";
import SideBarIntro from "./SideBarIntro";
import TagNTemplate from "./TagNTemplate";

const PlanSideBar = () => {
  return (
    <div className="inline-block w-[241px] h-full border-r-2 border-[#F1F1F1]">
      <SideBarIntro />
      <BasicInfo />
      <TagNTemplate />
      <FillPlan />
      <FinishWriting />
    </div>
  );
};

export default PlanSideBar;
