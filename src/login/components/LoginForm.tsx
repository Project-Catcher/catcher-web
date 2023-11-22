import { useCallback, useState } from "react";
import { IdInput, PasswordInput, WhiteBox } from "@shared/components";
import { LoginFormType } from "@shared/types";
import LoginError from "./LoginError";
import LoginOption from "./LoginOption";
import LoginSubMenu from "./LoginSubMenu";
import LoginTitle from "./LoginTitle";

const LoginForm = () => {
  const [isError, setIsError] = useState(false); // TODO: api call 이후 isError 세팅
  const [answer, setAnswer] = useState<LoginFormType>({
    id: "",
    password: "",
    isAutoLoginChecked: false,
  });

  const handleAnswer = (answer: Partial<LoginFormType>) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handleId = useCallback((id: string) => {
    handleAnswer({ id });
  }, []);

  const handlePassword = useCallback((password: string) => {
    handleAnswer({ password });
  }, []);

  const handleLoginPersistence = useCallback((isAutoLoginChecked: boolean) => {
    handleAnswer({ isAutoLoginChecked });
  }, []);

  const handleError = (value: boolean) => {
    setIsError(value);
  };

  return (
    <WhiteBox boxStyle="w-[539px] h-[692px] px-[44px] py-[42px] rounded-[40px] bg-white shadow-[0_4px_35px_0_rgba(0,0,0,0.08)]">
      <LoginTitle />

      <IdInput handleId={handleId} />

      <PasswordInput
        isPasswordIcon
        placeholder="비밀번호"
        type="password"
        shape="semi-round"
        extraDivStyle="h-[57px] pl-[25px] pr-[19px] mb-[12px]"
        extraInputStyle="pl-[25px]"
        handlePassword={handlePassword}
      />

      <LoginSubMenu
        isAutoLoginChecked={answer.isAutoLoginChecked}
        handleLoginPersistence={handleLoginPersistence}
      />

      <LoginError isError={isError} />

      <LoginOption answer={answer} handleError={handleError} />
    </WhiteBox>
  );
};

export default LoginForm;
