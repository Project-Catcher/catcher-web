import { postBasicInfo, setButtonDisabled } from "@create-schedule/util";
import { useMemo } from "react";
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
  const disabled = useMemo(() => setButtonDisabled(callType, answer), [answer]);

  const handleInputCheck = () => {
    const startDate = parseInt(answer.startAt.replace(/\./g, ""));
    const endDate = parseInt(answer.endAt.replace(/\./g, ""));

    if (endDate - startDate < 0) {
      openAlert({
        title: "종료일은 시작일보다 전일 수 없어요.",
        isHeaderCloseBtn: true,
      });

      return false;
    }

    return true;
  };

  const handleCurrentProgress = async () => {
    if (callType === "basicInfo" && handleInputCheck()) {
      try {
        const res = await postBasicInfo(answer);

        if (res) {
          sessionStorage.setItem("postId", res.data.id);
          setCurrentProgress((prev) => prev + 1);
        }
      } catch (error) {
        console.log(error);
        return;
      }
    } else if (callType === "template") {
      setCurrentProgress((prev) => prev + 1);
    }
  };

  return (
    <>
      <button
        disabled={disabled}
        className={`${
          disabled
            ? "text-[#B1B1B1] bg-[#E9ECEF] cursor-not-allowed "
            : "text-white bg-[#F864A1] "
        }w-[423px] h-[48px] text-[14px] font-bold -tracking-[0.03em] rounded-[5px] mb-[9px]`}
        onClick={handleCurrentProgress}
      >
        {value}
      </button>
      <div className="w-fit text-[14px] text-[#F864A1] -tracking-[0.03em] mx-auto">
        {callType === "basicInfo" && disabled
          ? "기본정보는 반드시 입력해주세요"
          : "언제든 수정할 수 있습니다"}
      </div>
    </>
  );
};

export default ScheduleNextButton;
