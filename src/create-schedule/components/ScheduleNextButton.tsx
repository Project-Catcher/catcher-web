import { useRecoilValue, useSetRecoilState } from "recoil";
import { useModal } from "@shared/hook";
import { currentProgress, scheduleAnswers } from "@shared/recoil";

interface ScheduleNextButtonProps {
  value: string;
}

const ScheduleNextButton = ({ value }: ScheduleNextButtonProps) => {
  const { openAlert } = useModal();
  const answer = useRecoilValue(scheduleAnswers);
  const setCurrentProgress = useSetRecoilState(currentProgress);

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
    if (handleInputCheck()) {
      setCurrentProgress((prev) => prev + 1);
    }
  };

  return (
    <button
      className="w-[423px] h-[48px] text-[14px] text-white font-bold -tracking-[0.03em] bg-[#F864A1] rounded-[5px]"
      onClick={handleCurrentProgress}
    >
      {value}
    </button>
  );
};

export default ScheduleNextButton;
