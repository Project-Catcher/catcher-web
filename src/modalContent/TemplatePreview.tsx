import { CurrentDate, TimeTable } from "@create-schedule/components";
import { useModal } from "@shared/hook";

const TemplatePreview = () => {
  const { closeModal } = useModal();
  const currentDate = new Date(); // TODO: 날짜 받아오기

  return (
    <div className="w-[95%]">
      <div className="text-[18px] text-[#333333] font-medium -tracking-[0.5px] mb-[12px]">
        템플릿 미리 보기
      </div>
      <div>
        <CurrentDate currentDate={currentDate} />
      </div>
      <div className="w-full border border-[#ACBEFF] rounded-[5px] bg-[#FFF9FC] mb-[12px]">
        {/* TODO: initialData 받아오기 */}
        <TimeTable callType="template" />
      </div>
      <div className="text-center">
        <button
          className="w-[81px] h-[48px] text-[14px] text-white font-bold -tracking-[0.03em] bg-[#F864A1] rounded-[5px]"
          onClick={closeModal}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default TemplatePreview;
