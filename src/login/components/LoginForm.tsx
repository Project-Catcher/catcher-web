import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { IdInput, PasswordInput, WhiteBox } from "@shared/components";
import { LoginFormType, LoginValue } from "@shared/types";

const LoginForm = () => {
  const [isError, setIsError] = useState(false);
  const [answer, setAnswer] = useState<LoginFormType>({
    id: "",
    password: "",
    isChecked: false,
  });
  const { push } = useRouter();

  const handleRouting = (type: LoginValue) => {
    push(
      {
        pathname: "/findidpw",
        query: { type },
      },
      "/findidpw",
    );
  };

  const handleAnswer = (answer: Partial<LoginFormType>) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handleId = useCallback((id: string) => {
    handleAnswer({ id });
  }, []);

  const handlePassword = useCallback((password: string) => {
    handleAnswer({ password });
  }, []);

  const handleLoginPersistence = useCallback((isChecked: boolean) => {
    handleAnswer({ isChecked });
  }, []);

  return (
    <WhiteBox boxStyle="w-[539px] h-[692px] px-[44px] py-[42px] shadow-[0_4px_35px_0_rgba(0,0,0,0.08)]">
      <div className="mb-[29px]">
        <div className="float-right text-right text-[#8D8D8D]">
          아직 캐쳐 회원이 <br /> 아니라면?
          <div className="text-[#F864A1] cursor-pointer">Sign Up</div>
        </div>
        <p className="text-xl">Welcome to Catcher</p>
        <p className="text-[55px] font-medium">Log In</p>
      </div>
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
      <div className="flex w-full h-[22px] items-center justify-between mt-[3px] mb-[37px]">
        <div className="flex items-center">
          <label
            className={`${
              answer.isChecked ? "bg-blue-400 " : ""
            }inline-block w-[18px] h-[18px] rounded-[50%] bg-stayLoggedIn bg-no-repeat cursor-pointer`}
          >
            <input
              className="hidden"
              type="checkbox"
              onClick={({ currentTarget: { checked } }) =>
                handleLoginPersistence(checked)
              }
            />
          </label>
          <div className="inline-block text-[15px] font-light ml-[6px]">
            로그인 상태 유지
          </div>
        </div>
        <div className="leading-[13px]">
          <div
            className="inline-block text-[13px] border-r border-[#BCBBBB] pr-2 cursor-pointer"
            onClick={() => handleRouting("id")}
          >
            아이디 찾기
          </div>
          <div
            className="inline-block text-[13px] pl-2 cursor-pointer"
            onClick={() => handleRouting("password")}
          >
            비밀번호 재설정
          </div>
        </div>
      </div>
      {isError ? (
        <div className="text-xs text-[#FF2330] font-[350]">
          아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시
          확인해주세요.
        </div>
      ) : (
        <div className="h-[16px] invisible"></div>
      )}
      <div className="text-center">
        <button className="button-full button-semi-rounded button-shadow bg-[#F864A1] text-lg text-white font-semibold mb-[14px]">
          로그인
        </button>
        <div className="text-[#ABABAB] mb-[9px]">OR</div>
        <button className="button-full button-semi-rounded button-shadow bg-kakao bg-no-repeat bg-[position:22.5px_center] bg-[#FEE500] text-[#000000D9] font-medium mb-[12px]">
          카카오 로그인
        </button>
        <button className="button-full button-semi-rounded button-shadow bg-naver bg-no-repeat bg-[position:22.5px_center] bg-[#03C75A] text-white font-medium">
          네이버 로그인
        </button>
      </div>
    </WhiteBox>
  );
};

export default LoginForm;
