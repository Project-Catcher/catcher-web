import { useSetRecoilState } from "recoil";
import { currentPageName, currentProgress } from "@shared/recoil";
import SideBarMenuBox from "./SideBarMenuBox";

interface FillPlanProps {
  handleTab: (value: string) => void;
}

const FillPlan = ({ handleTab }: FillPlanProps) => {
  const setCurrentPage = useSetRecoilState(currentPageName);
  const setCurrentProgress = useSetRecoilState(currentProgress);

  return (
    <div
      className="border-b-2 border-[#F1F1F1]"
      onClick={() => {
        handleTab("일정 채우기");
        setCurrentPage("일정 채우기");
        setCurrentProgress(4);
      }}
    >
      <SideBarMenuBox title="일정 채우기" />
    </div>
  );
};

export default FillPlan;
