import { PlanContent, PlanSideBar } from "@makeplan/components";

const MakePlan = () => {
  return (
    <div className="w-full h-without-header mt-[78px]">
      <PlanSideBar />
      <PlanContent />
    </div>
  );
};

export default MakePlan;
