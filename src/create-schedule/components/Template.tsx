import { ScheduleCard } from "@shared/components";
import { ScheduleCardSection } from "@shared/types";

interface TemplateProps {
  templates: ScheduleCardSection[];
}

const Template = ({ templates }: TemplateProps) => {
  return <ScheduleCard content={templates} callType="template" />;
};

export default Template;
