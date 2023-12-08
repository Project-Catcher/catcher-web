import { PlanContent, PlanSideBar } from "@create-schedule/components";

const CreateSchedule = () => {
  return (
    <div className="w-full h-without-header mt-[78px]">
      <PlanSideBar />
      <PlanContent />
    </div>
  );
};

export default CreateSchedule;
