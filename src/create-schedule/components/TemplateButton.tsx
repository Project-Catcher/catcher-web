import MakeScheduleButton from "./MakeScheduleButton";

const TemplateButton = () => {
  return (
    <div className="w-full text-center mt-[16px]">
      <MakeScheduleButton
        value="선택한 템플릿 바로가기"
        buttonStyle="text-[#00D179] border-[#00D179] mr-[9px]"
      />
      <MakeScheduleButton
        value="직접 만들기"
        buttonStyle="text-[#666666] border-[#E0E0E0]"
      />
    </div>
  );
};

export default TemplateButton;
