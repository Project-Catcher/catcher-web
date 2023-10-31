import { AuthTimer } from "@shared/components";
import { useTimer } from "@shared/hook";
import AuthErrorMessage from "./AuthErrorMessage";

interface TimerWithButtonProps {
  isAuthNumValidate: boolean;
}

const TimerWithButton = ({ isAuthNumValidate }: TimerWithButtonProps) => {
  const { minutes, second, expired, resetTimer } = useTimer();

  const handleRetransmit = () => {
    alert(
      "인증번호 발송 요청이 완료되었습니다.\n인증번호가 오지 않는 경우, 입력한 이름/휴대폰번호를 확인 후 다시 요청해주세요.",
    );
    // TODO: re-request api
    resetTimer();
  };

  return (
    <>
      <button
        className="w-[95px] h-[36px] text-white bg-[#FACD49] ml-[7px] mr-[14px]"
        onClick={handleRetransmit}
      >
        재발송
      </button>
      <AuthTimer
        timerStyle="mb-[7px] text-base leading-[22px]"
        minutes={minutes}
        second={second}
        resetTimer={resetTimer}
      />
      {isAuthNumValidate ? (
        <div className="h-[16px] invisible mt-[5px] mb-[12px]"></div>
      ) : (
        <AuthErrorMessage expired={expired} />
      )}
    </>
  );
};

export default TimerWithButton;
