import { useCallback, useState } from "react";
import { CaptchaWithButton } from "@shared/components";
import { AuthType } from "@shared/types";
import CheckAuth from "./CheckAuth";

interface CaptchaAndAuthProps {
  type: AuthType;
  isDoneInput: boolean;
  isValidate: boolean;
  handleCurrentProgress: () => void;
  handleDoneInput: () => void;
}

const CaptchaAndAuth = ({
  type,
  isDoneInput,
  isValidate,
  handleCurrentProgress,
  handleDoneInput,
}: CaptchaAndAuthProps) => {
  const [captcha, setCaptcha] = useState(""); // captcha 담아서 검증 요청해야함

  const handleCaptcha = useCallback((value: string) => {
    setCaptcha(value);
  }, []);

  return (
    <>
      {!isDoneInput ? (
        <CaptchaWithButton
          type={type}
          // 캡차 입력 완료 validate 추가(isDoneInput)
          isValidate={isValidate}
          handleDoneInput={handleDoneInput}
          handleCaptcha={handleCaptcha}
        />
      ) : (
        <CheckAuth
          type={type}
          handleDoneCaptcha={handleDoneInput} // 캡차 추가 후 삭제
          handleCurrentProgress={handleCurrentProgress}
        />
      )}
    </>
  );
};

export default CaptchaAndAuth;
