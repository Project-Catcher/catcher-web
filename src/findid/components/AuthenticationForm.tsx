import { useCallback, useState } from "react";
import Instructions from "./Instructions";
import { AuthFormAnswer, AuthType, Captcha } from "@shared/types";
import { InputWithLabel } from "@shared/components";
import CaptchaAndAuth from "./CaptchaAndAuth";

interface AuthenticationFormProps {
  description: string;
  type: AuthType;
}

const AuthenticationForm = ({ description, type }: AuthenticationFormProps) => {
  const [answer, setAnswer] = useState<AuthFormAnswer>({
    name: "",
    authOptionValue: "",
    authNum: "",
  });
  const [captcha, setCaptcha] = useState<Captcha>({
    captchaValue: "",
    doneCaptcha: false,
  });
  const isPhone = type === "phone";

  const handleAnswer = (answer: Partial<AuthFormAnswer>) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handleName = useCallback((name: string) => {
    handleAnswer({ name });
  }, []);

  const handleAuthOptionValue = useCallback((authOptionValue: string) => {
    handleAnswer({ authOptionValue });
  }, []);

  const handleCaptcha = useCallback((answer: Partial<Captcha>) => {
    setCaptcha((prev) => ({ ...prev, ...answer }));
  }, []);

  const handleAuthNum = useCallback((authNum: string) => {
    handleAnswer({ authNum });
  }, []);

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
        <CaptchaAndAuth
          type={type}
          answer={answer}
          captcha={captcha}
          handleCaptcha={handleCaptcha}
          handleAuthNum={handleAuthNum}
        />
      </div>
    </>
  );
};

export default AuthenticationForm;
