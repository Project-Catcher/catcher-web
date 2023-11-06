import { AuthTimer } from "@shared/components";
import { useAuthTimer } from "@shared/hook";
import AuthErrorMessage from "./AuthErrorMessage";

interface TimerWithButtonProps {
  isDonePhoneInput: boolean;
  isAuthNumValidate: boolean;
  callType: "signup" | "findidpw";
  buttonStyle: string;
}

const TimerWithButton = ({
  isDonePhoneInput,
  isAuthNumValidate,
  callType,
  buttonStyle,
}: TimerWithButtonProps) => {
  const { formattedMin, formattedSec, isExpired, startTimer, resetTimer } =
    useAuthTimer(180);

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
        className={`${
          callType === "findidpw" ? "h-[36px]" : "h-[46px]"
        } ${buttonStyle} text-white bg-[#FACD49]`}
        onClick={handleRetransmit}
      >
        재발송
      </button>

      {callType === "findidpw" ? (
        <AuthTimer
          isDonePhoneInput={isDonePhoneInput}
          timerStyle="mb-[7px] text-base leading-[22px]"
          formattedMin={formattedMin}
          formattedSec={formattedSec}
          startTimer={startTimer}
        />
      ) : (
        <div className="relative">
          <AuthTimer
            isDonePhoneInput={isDonePhoneInput}
            timerStyle="absolute -top-[65px] right-0 text-[12px] leading-[22px]"
            formattedMin={formattedMin}
            formattedSec={formattedSec}
            startTimer={startTimer}
          />
        </div>
      )}

      {isDonePhoneInput ? (
        <>
          {!isAuthNumValidate && (
            <AuthErrorMessage
              messageStyle="text-[12px]"
              isExpired={isExpired}
            />
          )}
        </>
      ) : (
        <div className="h-[18px] invisible mt-[5px] mb-[5px]"></div>
      )}
    </>
  );
};

export default TimerWithButton;
