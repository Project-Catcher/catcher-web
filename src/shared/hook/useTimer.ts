import { useCallback, useEffect, useRef, useState } from "react";
import { clearInterval, setInterval } from "timers";

export const useTimer = () => {
  const MINUTES_IN_MS = 3 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState(MINUTES_IN_MS);
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(1);
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");
  const expired = minutes === "0" && second === "00";
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(intervalRef.current as NodeJS.Timeout);
          return 0;
        }
        return prev - INTERVAL;
      });
    }, INTERVAL);
  }, []);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeLeft(MINUTES_IN_MS);
    startTimer();
  }, [MINUTES_IN_MS, startTimer]);

  useEffect(() => {
    startTimer();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTimer]);

  return { minutes, second, expired, resetTimer };
};
