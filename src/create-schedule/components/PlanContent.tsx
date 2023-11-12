import CurrentPage from "./CurrentPage";
import PageContent from "./PageContent";

const PlanContent = () => {
  return (
    <div className="absolute inline-block w-planContent h-planScrollbar px-[66px] py-[36px] overflow-FAQ">
      <CurrentPage />
      <PageContent />
    </div>
  );
};

export default PlanContent;
