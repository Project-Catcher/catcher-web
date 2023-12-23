import { handleDateFormat } from "@create-schedule/util";
import { ButtonHTMLAttributes } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useModal } from "@shared/hook";
import { currentProgress, scheduleAnswers } from "@shared/recoil";

interface ScheduleNextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  callType: "basicInfo" | "template";
}

const ScheduleNextButton = ({
  value,
  callType,
  ...props
}: ScheduleNextButtonProps) => {
  const { openAlert } = useModal();
  const answer = useRecoilValue(scheduleAnswers);
  const setCurrentProgress = useSetRecoilState(currentProgress);

  const handleInputCheck = () => {
    if (answer.startedAt && answer.endedAt) {
      const startDate = parseInt(
        handleDateFormat(answer.startedAt).replace(/\./g, ""),
      );
      const endDate = parseInt(
        handleDateFormat(answer.endedAt).replace(/\./g, ""),
      );

      if (endDate - startDate < 0) {
        openAlert({
          title: "종료일은 시작일보다 전일 수 없어요.",
          isHeaderCloseBtn: true,
        });

        return false;
      }
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
        className={`${
          props.disabled
            ? "text-[#B1B1B1] bg-[#E9ECEF] "
            : "text-white bg-[#F864A1] "
        }w-[423px] h-[48px] text-[14px] font-bold -tracking-[0.03em] rounded-[5px] mb-[9px]`}
        onClick={handleCurrentProgress}
        {...props}
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
