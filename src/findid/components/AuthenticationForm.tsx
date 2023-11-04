import { useCallback, useMemo, useState } from "react";
import { InputWithLabel } from "@shared/components";
import { AuthFormAnswer, AuthType } from "@shared/types";
import {
  checkEmailValidation,
  checkNameValidation,
  checkPhoneValidation,
} from "@shared/utils";
import CaptchaAndAuth from "./CaptchaAndAuth";
import Instructions from "./Instructions";

interface AuthenticationFormProps {
  description: string;
  type: AuthType;
  handleCurrentProgress: () => void;
}

const AuthenticationForm = ({
  description,
  type,
  handleCurrentProgress,
}: AuthenticationFormProps) => {
  const [isDoneInput, setIsDoneInput] = useState(false);

  const handleDoneInput = useCallback(() => {
    setIsDoneInput(true);
  }, []);

  const [answer, setAnswer] = useState<AuthFormAnswer>({
    name: "",
    authOptionValue: "",
  });

  const handleAnswer = (answer: Partial<AuthFormAnswer>) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handleName = useCallback((name: string) => {
    handleAnswer({ name });
  }, []);

  const handleAuthOptionValue = useCallback((authOptionValue: string) => {
    handleAnswer({ authOptionValue });
  }, []);

  const isPhone = type === "phone";

  const isNameValidate = useMemo(
    () => checkNameValidation(answer.name),
    [answer.name],
  );
  const isAuthOptionValidate = useMemo(
    () =>
      isPhone
        ? checkPhoneValidation(answer.authOptionValue)
        : checkEmailValidation(answer.authOptionValue),
    [answer.authOptionValue, isPhone],
  );

  return (
    <>
      <div className="mt-[6px]">
        <div
          className={`${
            isPhone ? "w-[345px]" : "w-full"
          } text-[12px] text-[#8D8D8D] pl-[26px]`}
        >
          {description}
        </div>
      </div>
      <div className="w-full pl-[8px]">
        <div className="inline-block w-2/5 mr-[10px]">
          <InputWithLabel
            readOnly={isDoneInput}
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
            readOnly={isDoneInput}
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
          isDoneInput={isDoneInput}
          isValidate={isNameValidate && isAuthOptionValidate}
          handleCurrentProgress={handleCurrentProgress}
          handleDoneInput={handleDoneInput}
        />
      </div>
    </>
  );
};

export default AuthenticationForm;
