import { useEffect } from "react";

interface AuthTimerProps {
  isDonePhoneInput: boolean;
  timerStyle: string;
  formattedMin: number;
  formattedSec: number;
  startTimer: () => void;
}

const AuthTimer = ({
  isDonePhoneInput,
  timerStyle,
  formattedMin,
  formattedSec,
  startTimer,
}: AuthTimerProps) => {
  useEffect(() => {
    if (isDonePhoneInput) {
      alert("요청 성공");
      startTimer();
    }
  }, [isDonePhoneInput, startTimer]);

  return (
    <>
      {isDonePhoneInput && (
        <div className={`${timerStyle} inline-block text-[#00D179]`}>
          {formattedMin}분 {formattedSec}초
        </div>
      )}
    </>
  );
};

export default AuthTimer;
