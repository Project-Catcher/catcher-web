// 인증번호 입력 컴포넌트
import { useEffect, useState } from "react";
import { AuthTimer } from "@shared/components";
import useAuthTimer from "@shared/hook/useAuthTimer";
import { checkAuthNumValidation } from "@shared/utils";
import AuthErrorMessage from "./AuthErrorMessage";
import Button from "./Button";
import Input from "./Input";

interface CheckAuthProps {
  isDoneInput: boolean;
}

const CheckAuth = ({ isDoneInput }: CheckAuthProps) => {
  const [authNum, setAuthNum] = useState("");
  const [isCodeCorrect, setIsCodeCorrect] = useState(false); // 인증 성공 여부

  const {
    formattedMin,
    formattedSec,
    startTimer,
    stopTimer,
    resetTimer,
    isExpired,
    checkValidationNumber,
  } = useAuthTimer(180);

  useEffect(() => {
    if (isDoneInput) {
      startTimer();
    }
  }, [isDoneInput]);

  // 사용자의 인증 번호가 바뀔 때 마다 인증 성공 여부 확인
  useEffect(() => {
    if (checkAuthNumValidation(authNum)) {
      if (checkValidationNumber(authNum)) {
        setIsCodeCorrect(true);
        stopTimer();
      }
    } else {
      setIsCodeCorrect(false);
    }
  }, [authNum]);

  const handleAuthNum = (value: string) => {
    setAuthNum(value);
  };

  const onClickReset = () => {
    alert(
      "인증번호 발송 요청이 완료되었습니다.\n인증번호가 오지 않는 경우, 입력한 이름/휴대폰번호를 확인 후 다시 요청해주세요.",
    );
    resetTimer();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-end mt-[15px] relative">
        <div>
          <Input
            maxLength={6}
            pattern="\d*"
            label="인증번호"
            fieldName="phoneAuth"
            shape="normal"
            inputStyle="w-[333px] h-[46px] text-sm px-[14px] py-[8px]"
            placeholder="인증번호 입력"
            onChange={({ target: { value } }) => handleAuthNum(value)}
          />
        </div>
        <Button
          label="재발송"
          onClick={onClickReset}
          buttonStyle="w-[119px] h-[48px] bg-amber-300 ml-1"
        />

        {/* 인증하기 버튼 누를 시 나오는 Timer */}
        {isDoneInput && (
          <div className="absolute -top-2 right-32">
            <AuthTimer
              formattedMin={formattedMin}
              formattedSec={formattedSec}
            />
          </div>
        )}
      </div>

      {/* TODO: 인증번호 인증 로직 구현 (현재 인증번호는 123456이면 인증 성공) */}
      {isDoneInput ? (
        !isExpired && isCodeCorrect ? (
          <div className="text-[#00D179]  mt-[5px] mb-[12px]">인증 성공!</div>
        ) : (
          <AuthErrorMessage isExpired={isExpired} />
        )
      ) : (
        <div className="h-[16px] invisible mt-[5px] mb-[12px]" />
      )}
    </div>
  );
};

export default CheckAuth;
