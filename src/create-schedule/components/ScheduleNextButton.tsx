import { useRecoilValue, useSetRecoilState } from "recoil";
import { useModal } from "@shared/hook";
import { currentScheduleProgress, scheduleAnswers } from "@shared/recoil";

interface ScheduleNextButtonProps {
  value: string;
  callType: "basicInfo" | "template";
}

const ScheduleNextButton = ({ value, callType }: ScheduleNextButtonProps) => {
  const { openAlert } = useModal();
  const answer = useRecoilValue(scheduleAnswers);
  const setCurrentProgress = useSetRecoilState(currentScheduleProgress);

  const handleInputCheck = () => {
    const startDate = parseInt(answer.startedAt.replace(/\./g, ""));
    const endDate = parseInt(answer.endedAt.replace(/\./g, ""));

    if (endDate - startDate < 0) {
      openAlert({
        title: "종료일은 시작일보다 전일 수 없어요.",
        isHeaderCloseBtn: true,
      });

      return false;
    }

    return true;
  };

  const handleCurrentProgress = () => {
    if (callType === "basicInfo" && handleInputCheck()) {
      setCurrentProgress((prev) => prev + 1);
    } else if (callType === "template") {
      setCurrentProgress((prev) => prev + 1);
    }
  };

  return (
    <>
      <button
        className="w-[423px] h-[48px] text-[14px] text-white font-bold -tracking-[0.03em] bg-[#F864A1] rounded-[5px] mb-[9px]"
        onClick={handleCurrentProgress}
      >
        {value}
      </button>
      <div className="w-fit text-[14px] text-[#F864A1] -tracking-[0.03em] mx-auto">
        언제든 수정할 수 있습니다
      </div>
    </>
  );
};

export default ScheduleNextButton;
