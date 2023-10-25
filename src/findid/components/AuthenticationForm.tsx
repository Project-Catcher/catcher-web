import { useCallback, useEffect, useState } from "react";
import Instructions from "./Instructions";
import { AuthType } from "@shared/types";
import { useRegex } from "@shared/hooks/useRegex";
import {
  AuthTimer,
  CaptchaWithButton,
  InputWithLabel,
} from "@shared/components";
import ValidateButton from "./ValidateButton";
import AuthErrorMessage from "./AuthErrorMessage";

interface AuthenticationFormProps {
  description: string;
  type: AuthType;
}

interface AuthFormAnswer {
  name: string;
  authOptionValue: string;
}

export interface Captcha {
  captchaValue: string;
  doneCaptcha: boolean;
}

const AuthenticationForm = ({ description, type }: AuthenticationFormProps) => {
  const [isDoneAuth, setIsDoneAuth] = useState(false); // 캡차까지 완료
  const [answer, setAnswer] = useState<AuthFormAnswer>({
    name: "",
    authOptionValue: "",
  });
  const [captcha, setCaptcha] = useState<Captcha>({
    captchaValue: "",
    doneCaptcha: false,
  });
  const {
    isValidate,
    checkAuthNumValidation,
    checkNameValidation,
    checkPhoneValidation,
    checkEmailValidation,
  } = useRegex();
  const isPhone = type === "phone";
  console.log(answer);

  const handleAnswer = (answer: Partial<AuthFormAnswer>) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handleName = useCallback((name: string) => {
    handleAnswer({ name });
  }, []);

  const handleAuthOptionValue = useCallback((authOptionValue: string) => {
    handleAnswer({ authOptionValue });
  }, []);

  const handleCaptcha = (answer: Partial<Captcha>) => {
    setCaptcha((prev) => ({ ...prev, ...answer }));
  };

  const handleCaptchaValue = useCallback((captchaValue: string) => {
    handleCaptcha({ captchaValue });
  }, []);

  const handleDoneCaptcha = useCallback(() => {
    handleCaptcha({ doneCaptcha: true });
    alert(
      "인증번호 발송 요청이 완료되었습니다.\n인증번호가 오지 않는 경우, 입력한 이름/휴대폰번호를 확인 후 다시 요청해주세요.",
    );
    // request api function here
  }, []);

  useEffect(() => {
    if (type === "phone") checkPhoneValidation(answer.authOptionValue);
    else if (type === "email") checkEmailValidation(answer.authOptionValue);
    checkNameValidation(answer.name);
  }, [
    answer.authOptionValue,
    answer.name,
    checkEmailValidation,
    checkNameValidation,
    checkPhoneValidation,
    type,
  ]);

  return (
    <>
      <div className="mt-[6px]">
        <div
          className={`${
            type === "phone" ? "w-[345px]" : "w-full"
          } text-[12px] text-[#8D8D8D] pl-[26px]`}
        >
          {description}
        </div>
      </div>
      <div className="w-full pl-[8px]">
        <div className="inline-block w-2/5 mr-[10px]">
          <InputWithLabel
            readOnly={captcha.doneCaptcha}
            label="이름"
            id="name"
            inputType="text"
            inputStyle="w-full h-full text-sm px-[14px] py-[8px]"
            placeholder="이름을 입력해 주세요."
            onChange={({ currentTarget: { value } }) => handleName(value)}
          />
        </div>
        <div className="inline-block w-3/5-10">
          <Instructions type={type} />
          <InputWithLabel
            readOnly={captcha.doneCaptcha}
            label={isPhone ? "휴대전화" : "이메일 주소"}
            id={isPhone ? "phoneInput" : "emailInput"}
            inputType={isPhone ? "tel" : "email"}
            placeholder={`${
              isPhone ? "휴대전화번호 (숫자만 입력)" : "이메일 주소 입력"
            }`}
            inputStyle="w-full h-full text-sm px-[14px] py-[8px]"
            onChange={({ currentTarget: { value } }) =>
              handleAuthOptionValue(value)
            }
          />
        </div>
        {!captcha.doneCaptcha ? (
          <CaptchaWithButton
            type={type}
            // 캡차 완료 validate 추가
            isValidate={isValidate[type] && isValidate.name}
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
                onChange={({ target: { value } }) =>
                  checkAuthNumValidation(value)
                }
              />
              <button
                className="w-[95px] h-[36px] text-white bg-[#FACD49] ml-[7px] mr-[14px]"
                onClick={() =>
                  alert(
                    "인증번호 발송 요청이 완료되었습니다.\n인증번호가 오지 않는 경우, 입력한 이름/휴대폰번호를 확인 후 다시 요청해주세요.",
                  )
                }
              >
                재발송
              </button>
              <AuthTimer />
            </div>
            {isValidate.authNum ? (
              <div className="h-[16px] invisible mt-[5px] mb-[12px]"></div>
            ) : (
              <AuthErrorMessage />
            )}
            <ValidateButton
              type="beforePhoneAuth"
              value="아이디 찾기"
              isValidate={isValidate.authNum}
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
      </div>
    </>
  );
};

export default AuthenticationForm;
