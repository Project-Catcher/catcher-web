import { ScheduleCardSection } from "@shared/types";
import CurrentPage from "./CurrentPage";
import PageContent from "./PageContent";

interface PlanContentProps {
  remains: ScheduleCardSection[];
  templates: ScheduleCardSection[];
}

const PlanContent = ({ remains, templates }: PlanContentProps) => {
  return (
    <div className="absolute inline-block w-planContent h-planScrollbar px-[66px] py-[36px] overflow-FAQ">
      <CurrentPage />
      <PageContent remains={remains} templates={templates} />
    </div>
  );
};

export default PlanContent;
