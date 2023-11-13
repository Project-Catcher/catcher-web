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
    if (
      answer.city === "" ||
      answer.endedAt === "" ||
      answer.imageSrc === "" ||
      answer.startedAt === "" ||
      answer.title === ""
    ) {
      openAlert({
        title: "입력이 완료되지 않은 부분이 있어요.",
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
