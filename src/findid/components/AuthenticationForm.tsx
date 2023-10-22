import { ReactNode, useEffect, useState } from "react";
import Instructions from "./Instructions";
import { AnswerType, AuthType } from "@shared/types";
import { useRegex } from "@shared/hooks/useRegex";
import { InputWithLabel } from "@shared/components";

interface ChildrenProps {
  isDoneAuth: boolean;
  isValidate: AnswerType;
  handleCaptcha: (captcha: AnswerType) => void;
  handleDoneAuth: () => void;
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
  const [isDoneAuth, setIsDoneAuth] = useState<boolean>(false); // 캡차까지 완료
  const [isHover, setIsHover] = useState<boolean>(false);
  const [answer, setAnswer] = useState<AnswerType>({});
  const { isValidate, checkPhoneValidation, checkEmailValidation } = useRegex();
  const isPhone = type === "phone";

  const handleAnswer = (answer: AnswerType) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handleName = (name: AnswerType) => {
    handleAnswer({ ...name });
  };

  const handlePhone = (phone: AnswerType) => {
    handleAnswer({ ...phone });
  };

  const handleEmail = (email: AnswerType) => {
    handleAnswer({ ...email });
  };

  const handleCaptcha = (captcha: AnswerType) => {
    handleAnswer({ ...captcha });
  };

  const handleDoneAuth = () => {
    setIsDoneAuth(true);
  };

  useEffect(() => {
    isPhone
      ? checkPhoneValidation(answer.phone as string)
      : checkEmailValidation(answer.email as string);
  }, [
    answer.email,
    answer.phone,
    checkEmailValidation,
    checkPhoneValidation,
    isPhone,
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
            label="이름"
            id="name"
            inputType="text"
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
            label={isPhone ? "휴대전화" : "이메일 주소"}
            id="phone"
            inputType={isPhone ? "tel" : "email"}
            placeholder={`${
              isPhone ? "휴대전화번호 (숫자만 입력)" : "이메일 주소 입력"
            }`}
            onChange={({ currentTarget: { value } }) => {
              isPhone
                ? handlePhone({ phone: value })
                : handleEmail({ email: value });
            }}
          />
        </div>
        {children({ isDoneAuth, isValidate, handleCaptcha, handleDoneAuth })}
      </div>
    </>
  );
};

export default AuthenticationForm;
