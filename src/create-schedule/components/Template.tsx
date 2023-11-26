import { templateContent } from "@create-schedule/constants";
import { ScheduleCard } from "@shared/components";

interface TemplateProps {
  isClicked: {
    template: boolean;
    custom: boolean;
  };
  onClick: (key: "template" | "custom") => void;
}

const Template = ({ isClicked, onClick }: TemplateProps) => {
  return (
    <ScheduleCard
      content={templateContent}
      callType="template"
      isClicked={isClicked}
      onClick={onClick}
    />
  );
};

export default Template;
