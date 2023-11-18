import React from "react";
import ScheduleHeader from "./ScheduleHeader";

interface ScheduleWrapperProps {
  children: React.ReactNode;
}

const ScheduleWrapper = ({ children }: ScheduleWrapperProps) => {
  return (
    <div>
      <div className="flex justify-center pt-32">
        {/* header */}
        <ScheduleHeader />
      </div>
      {children}
    </div>
  );
};

export default ScheduleWrapper;
