import React from "react";
import ScheduleContent from "./ScheduleContent";
import ScheduleFilter from "./ScheduleFilter";

const Page = () => {
  return (
    <div className="w-4/5 min-h-[90vh]">
      <ScheduleFilter />
      <ScheduleContent />
    </div>
  );
};

export default Page;
