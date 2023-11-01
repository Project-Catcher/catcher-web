// 인증번호 타이머 hook
import { useState, useEffect } from "react";

const useAuthTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const formattedMin = Math.floor(time / 60);
  const formattedSec = time % 60;

  const startTimer = () => {
    setIsRunning(true);
  };

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

  // TODO: 서버에서 인증번호 받아오는 로직으로 수정
  const verificationNumber = 123456;

  // 인증 성공 여부 확인
  const checkValidationNumber = (authNumber: string) => {
    if (verificationNumber.toString() === authNumber) {
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
