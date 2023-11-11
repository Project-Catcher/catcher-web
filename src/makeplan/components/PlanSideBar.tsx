import BasicInfo from "./BasicInfo";
import FillPlan from "./FillPlan";
import FinishWriting from "./FinishWriting";
import SideBarIntro from "./SideBarIntro";
import StartMakePlan from "./StartMakePlan";

const PlanSideBar = () => {
  return (
    <div className="w-[241px] h-full border-r-2 border-[#F1F1F1]">
      <SideBarIntro />
      <StartMakePlan />
      <BasicInfo />
      <FillPlan />
      <FinishWriting />
    </div>
  );
};

export default PlanSideBar;
