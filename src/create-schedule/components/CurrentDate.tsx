import { useRecoilValue } from "recoil";
import { scheduleAnswers } from "@shared/recoil";

const CurrentDate = () => {
  const { startedAt, endedAt } = useRecoilValue(scheduleAnswers);

  return (
    <div className="w-full h-[32px] bg-[#ACBEFF] rounded-[5px] text-center leading-[32px] mb-[10px]">
      <p className="text-[18px] text-white font-semibold">{startedAt}</p>
    </div>
  );
};

export default CurrentDate;
