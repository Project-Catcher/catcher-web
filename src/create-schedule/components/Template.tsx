import { ScheduleCard } from "@shared/components";
import { TemplateSchedule } from "@shared/types";

interface TemplateProps {
  templates: TemplateSchedule[];
}

const Template = ({ templates }: TemplateProps) => {
  return <ScheduleCard content={templates} callType="template" />;
};

export default Template;
