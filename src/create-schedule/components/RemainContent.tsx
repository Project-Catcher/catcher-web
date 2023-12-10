import React from "react";
import { ScheduleCard } from "@shared/components";
import { TemporarySchedule } from "@shared/types";

interface RemainContentProps {
  temporary: TemporarySchedule[];
}

const RemainContent = ({ temporary }: RemainContentProps) => {
  return <ScheduleCard content={temporary} callType="temporary" />;
};

export default RemainContent;
