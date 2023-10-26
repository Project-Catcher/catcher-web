import {
  checkAuthNumValidation,
  checkEmailValidation,
  checkNameValidation,
  checkPhoneValidation,
} from "@shared/utils";
import { useCallback, useMemo } from "react";
import {
  AuthTimer,
  CaptchaWithButton,
  InputWithLabel,
} from "@shared/components";
import AuthErrorMessage from "./AuthErrorMessage";
import ValidateButton from "./ValidateButton";
import { AuthFormAnswer, AuthType, Captcha } from "@shared/types";

interface CaptchaAndAuthProps {
  type: AuthType;
  answer: AuthFormAnswer;
  captcha: Captcha;
  handleCaptcha: (answer: Partial<Captcha>) => void;
  handleAuthNum: (authNum: string) => void;
}

const CaptchaAndAuth = ({
  type,
  answer,
  captcha,
  handleCaptcha,
  handleAuthNum,
}: CaptchaAndAuthProps) => {
  const isPhone = type === "phone";

  const isAuthOptionValidate = useMemo(
    () =>
      isPhone
        ? checkPhoneValidation(answer.authOptionValue)
        : checkEmailValidation(answer.authOptionValue),
    [answer.authOptionValue, isPhone],
  );
  const isNameValidate = useMemo(
    () => checkNameValidation(answer.name),
    [answer.name],
  );
  const isAuthNumValidate = useMemo(
    () => checkAuthNumValidation(answer.authNum),
    [answer.authNum],
  );

  const handleCaptchaValue = useCallback(
    (captchaValue: string) => {
      handleCaptcha({ captchaValue });
    },
    [handleCaptcha],
  );

  const handleDoneCaptcha = useCallback(() => {
    handleCaptcha({ doneCaptcha: true });
    alert(
      "인증번호 발송 요청이 완료되었습니다.\n인증번호가 오지 않는 경우, 입력한 이름/휴대폰번호를 확인 후 다시 요청해주세요.",
    );
    // request api function here
  }, [handleCaptcha]);

  return (
    <>
      {!captcha.doneCaptcha ? (
        <CaptchaWithButton
          type={type}
          // 캡차 완료 validate 추가
          isValidate={
            captcha.doneCaptcha &&
            isNameValidate &&
            (isPhone ? isAuthOptionValidate : isAuthOptionValidate)
          }
          handleDoneCaptcha={handleDoneCaptcha}
          handleCaptchaValue={handleCaptchaValue}
        />
      ) : (
        <div className="text-xs font-medium mt-[15px] mb-[5px]">
          <div className="flex items-end">
            <InputWithLabel
              maxLength={6}
              pattern="\d*"
              label="인증번호"
              id="phoneAuth"
              inputType="text"
              inputStyle="w-[281px] h-[36px] text-xs leading-[24px] px-[14px] py-[6px]"
              placeholder="인증번호 입력"
              onChange={({ target: { value } }) => handleAuthNum(value)}
            />
            <button
              className="w-[95px] h-[36px] text-white bg-[#FACD49] ml-[7px] mr-[14px]"
              onClick={
                () =>
                  alert(
                    "인증번호 발송 요청이 완료되었습니다.\n인증번호가 오지 않는 경우, 입력한 이름/휴대폰번호를 확인 후 다시 요청해주세요.",
                  )
                // re-request api here
              }
            >
              재발송
            </button>
            <AuthTimer />
          </div>
          {isAuthNumValidate ? (
            <div className="h-[16px] invisible mt-[5px] mb-[12px]"></div>
          ) : (
            <AuthErrorMessage />
          )}
          <ValidateButton
            type="beforePhoneAuth"
            value="아이디 찾기"
            isValidate={isAuthNumValidate}
            buttonColor="bg-[#A564F8]"
            buttonColorDisabled="bg-[#A564F875]"
            extraClass="mt-[21px]"
            onClick={() => {
              if (isPhone) {
                handleDoneCaptcha();
              } else alert("api here");
            }}
          />
        </div>
      )}
    </>
  );
};

export default CaptchaAndAuth;
