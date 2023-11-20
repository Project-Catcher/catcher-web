import { useState, useEffect, useCallback } from "react";
import { clearInterval, setInterval } from "timers";

let getVerificationNumber: number;

const useAuthTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const formattedMin = Math.floor(time / 60);
  const formattedSec = time % 60;

  const startTimer = useCallback(() => {
    setIsRunning(true);

    // TODO: 서버에서 인증번호 받아오는 로직 추가
    getVerificationNumber = 123456;
  }, []);

  const stopTimer = () => {
    setIsRunning(false);
  };

  // 재시작 함수
  const resetTimer = (newTime = initialTime) => {
    setIsRunning(false);
    setIsExpired(false);
    setTime(newTime);
    startTimer();
  };

  useEffect(() => {
    if (isRunning && time > 0) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (time <= 0) {
      setIsExpired(true);
    }
  }, [isRunning, time]);

  // 인증 성공 여부 확인
  const checkValidationNumber = (authNumber: string) => {
    if (getVerificationNumber?.toString() === authNumber) {
      return true;
    }
    return false;
  };

  return {
    time,
    formattedMin,
    formattedSec,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
    isExpired,
    checkValidationNumber,
  };
};

export default useAuthTimer;
