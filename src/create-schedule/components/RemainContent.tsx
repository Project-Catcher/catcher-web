import React from "react";
import { ScheduleCard } from "@shared/components";
import { ScheduleCardSection } from "@shared/types";

interface RemainContentProps {
  remains: ScheduleCardSection[];
}

const RemainContent = ({ remains }: RemainContentProps) => {
  return <ScheduleCard content={remains} callType="remain" />;
};

export default RemainContent;
