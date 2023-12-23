import { useSetRecoilState } from "recoil";
import { currentProgress } from "@shared/recoil";
import MakeScheduleButton from "./MakeScheduleButton";

interface TemplateButtonProps {
  clickedContent: number | null;
  template: boolean;
  custom: boolean;
  onClick: (key: "template" | "custom") => void;
}

const TemplateButton = ({
  template,
  custom,
  clickedContent,
  onClick,
}: TemplateButtonProps) => {
  const setCurrentProgress = useSetRecoilState(currentProgress);

  const handleSelectTemplate = () => {
    if (clickedContent) {
      setCurrentProgress((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full text-center mt-[16px]">
      <MakeScheduleButton
        disabled={!template}
        value="선택한 템플릿 바로가기"
        buttonStyle={`${
          !template
            ? "text-[#666666] border-[#E0E0E0] cursor-not-allowed"
            : "text-[#00D179] border-[#00D179] cursor-pointer"
        } mr-[9px]`}
        onClick={handleSelectTemplate}
      />
      <MakeScheduleButton
        value="직접 만들기"
        buttonStyle={`${
          !custom
            ? "text-[#666666] border-[#E0E0E0]"
            : "text-[#00D179] bg-[#E7F9EE]"
        }`}
        onClick={() => onClick("custom")}
      />
    </div>
  );
};

export default TemplateButton;
