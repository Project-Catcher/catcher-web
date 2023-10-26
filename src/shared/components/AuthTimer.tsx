import { useEffect, useState } from "react";
import { clearInterval, setInterval } from "timers";

const AuthTimer = () => {
  const MINUTES_IN_MS = 3 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState(MINUTES_IN_MS);
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2);
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("다시하세요");
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="inline-block mb-[7px] text-base text-[#00D179] leading-[22px]">
      {minutes}분 {second}초
    </div>
  );
};

export default AuthTimer;
