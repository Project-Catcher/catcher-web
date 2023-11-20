import React, { useState } from "react";
import ScheduleContent from "./ScheduleContent";
import ScheduleFilter from "./ScheduleFilter";

const Page = () => {
  const [theme, setTheme] = useState("전체");
  return (
    <div className="w-4/5 min-h-[90vh]">
      <ScheduleFilter theme={theme} setTheme={setTheme} />
      <ScheduleContent />
    </div>
  );
};

export default Page;
