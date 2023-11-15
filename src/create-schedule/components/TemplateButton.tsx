import { useSetRecoilState } from "recoil";
import { currentProgress } from "@shared/recoil";
import MakeScheduleButton from "./MakeScheduleButton";

interface TemplateButtonProps {
  clickedContent: number | null;
}

const TemplateButton = ({ clickedContent }: TemplateButtonProps) => {
  const setCurrentProgress = useSetRecoilState(currentProgress);

  const handleCurrentProgress = () => {
    setCurrentProgress((prev) => prev + 1);
  };

  const handleSelectTemplate = () => {
    if (clickedContent) {
      setCurrentProgress((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full text-center mt-[16px]">
      <MakeScheduleButton
        value="선택한 템플릿 바로가기"
        buttonStyle="text-[#00D179] border-[#00D179] mr-[9px]"
        onClick={handleSelectTemplate}
      />
      <MakeScheduleButton
        value="직접 만들기"
        buttonStyle="text-[#666666] border-[#E0E0E0] hover:bg-[#E7F9EE] hover:text-[#00D179]"
        onClick={handleCurrentProgress}
      />
    </div>
  );
};

export default TemplateButton;
