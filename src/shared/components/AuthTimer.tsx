import { useEffect } from "react";

interface AuthTimerProps {
  timerStyle: string;
  minutes: string;
  second: string;
  resetTimer: () => void;
}

const AuthTimer = ({
  timerStyle,
  minutes,
  second,
  resetTimer,
}: AuthTimerProps) => {
  useEffect(() => {
    resetTimer();
  }, [resetTimer]);

  return (
    <div className={`${timerStyle} inline-block text-[#00D179]`}>
      {minutes}분 {second}초
    </div>
  );
};

export default AuthTimer;
