import { ReactNode, useEffect, useState } from "react";
import Instructions from "./Instructions";
import { AnswerType, AuthType } from "@shared/types";
import { useRegex } from "@shared/hooks/useRegex";
import { InputWithLabel } from "@shared/components";

interface ChildrenProps {
  isDoneCaptcha: boolean;
  isValidate: AnswerType;
  handleCaptcha: (captcha: AnswerType) => void;
  handleDoneCaptcha: () => void;
}

interface AuthenticationFormProps {
  children(props: ChildrenProps): ReactNode;
  description: string;
  type: AuthType;
}

const AuthenticationForm = ({
  children,
  description,
  type,
}: AuthenticationFormProps) => {
  const [isDoneCaptcha, setIsDoneAuth] = useState<boolean>(false); // 캡차까지 완료
  const [isHover, setIsHover] = useState<boolean>(false);
  const [answer, setAnswer] = useState<AnswerType>({});
  const {
    isValidate,
    checkNameValidation,
    checkPhoneValidation,
    checkEmailValidation,
  } = useRegex();
  const isPhone = type === "phone";

  const handleAnswer = (answer: AnswerType) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handleName = (name: AnswerType) => {
    handleAnswer({ ...name });
  };

  const handleAnswerInput = (answerInput: AnswerType) => {
    handleAnswer({ ...answerInput });
  };

  const handleCaptcha = (captcha: AnswerType) => {
    handleAnswer({ ...captcha });
  };

  const handleDoneCaptcha = () => {
    setIsDoneAuth(true);
  };

  useEffect(() => {
    if (type === "phone") checkPhoneValidation(answer.phone as string);
    else if (type === "email") checkEmailValidation(answer.email as string);
    checkNameValidation(answer.name as string);
  }, [
    answer.email,
    answer.name,
    answer.phone,
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
            readOnly={isDoneCaptcha}
            label="이름"
            id="name"
            inputType="text"
            inputStyle="w-full text-sm px-[14px] py-[8px]"
            placeholder="이름을 입력해 주세요."
            onChange={({ currentTarget: { value } }) =>
              handleName({ name: value })
            }
          />
        </div>
        <div className="inline-block w-3/5-10">
          <div className="flex items-center relative float-right text-[10px] text-[#8D8D8D]">
            인증번호가 오지 않나요
            <button
              className="inline-block w-[22px] h-[22px] bg-question bg-no-repeat"
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
            />
            {isHover && <Instructions type={type} />}
          </div>
          <InputWithLabel
            readOnly={isDoneCaptcha}
            label={isPhone ? "휴대전화" : "이메일 주소"}
            id={isPhone ? "phoneInput" : "emailInput"}
            inputType={isPhone ? "tel" : "email"}
            placeholder={`${
              isPhone ? "휴대전화번호 (숫자만 입력)" : "이메일 주소 입력"
            }`}
            inputStyle="w-full text-sm px-[14px] py-[8px]"
            onChange={({ currentTarget: { value } }) =>
              handleAnswerInput({ [type]: value })
            }
          />
        </div>
        {children({
          isDoneCaptcha,
          isValidate,
          handleCaptcha,
          handleDoneCaptcha,
        })}
      </div>
    </>
  );
};

export default AuthenticationForm;
