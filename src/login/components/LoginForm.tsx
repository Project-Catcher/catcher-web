import Image from "next/image";
import { useState } from "react";
import { WhiteBox } from "../../shared/components";
import { AnswerType } from "../../shared/types";

const LoginForm = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);
  const [answer, setAnswer] = useState<AnswerType>({});

  const handleAnswer = (answer: AnswerType) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handleId = (id: AnswerType) => {
    handleAnswer({ ...id });
  };

  const handlePassword = (password: AnswerType) => {
    handleAnswer({ ...password });
  };

  const handleLoginPersistence = (isChecked: AnswerType) => {
    handleAnswer({ ...isChecked });
  };

  return (
    <WhiteBox
      boxWidth="w-[539px]"
      boxHeight="h-[692px]"
      paddingX="px-[44px]"
      paddingY="py-[42px]"
      shadow="shadow-[0_4px_35px_0_rgba(0,0,0,0.08)]"
    >
      <div className="mb-[41px]">
        <div className="float-right text-right text-[#8D8D8D]">
          아직 캐쳐 회원이 <br /> 아니라면?
          <div className="text-[#F864A1] cursor-pointer">Sign Up</div>
        </div>
        <p className="text-xl">Welcome to Catcher</p>
        <p className="text-[55px] font-medium">Log In</p>
      </div>
      <input
        className="w-full h-[57px] rounded-[9px] input-login mb-[12px] bg-idLabel bg-no-repeat bg-[position:21px_center]"
        type="text"
        placeholder="아이디"
        onChange={({ target: { value } }) => handleId({ id: value })}
      />
      <input
        className="w-full h-[57px] rounded-[9px] input-login mb-[15px] bg-pwLabel bg-no-repeat bg-[position:21px_center]"
        type={`${preview ? "text" : "password"}`}
        placeholder="비밀번호"
        onChange={({ target: { value } }) =>
          handlePassword({ password: value })
        }
      />
      <button className="absolute -translate-x-[35px] translate-y-[20px]">
        <Image
          src="/images/samples/eye.svg"
          alt="eye"
          width={22}
          height={19}
          onMouseDown={() => setPreview(true)}
          onMouseUp={() => setPreview(false)}
        />
      </button>
      <div className="flex w-full h-[22px] items-center justify-between mb-[16px]">
        <div className="flex items-center">
          <label
            className={`inline-block w-[18px] h-[18px] rounded-[50%] bg-stayLoggedIn bg-no-repeat cursor-pointer ${
              answer.isChecked ? "bg-blue-400" : ""
            }`}
          >
            <input
              className="hidden"
              type="checkbox"
              onClick={({ target }) => {
                if (target instanceof HTMLInputElement)
                  handleLoginPersistence({ isChecked: target.checked });
              }}
            />
          </label>
          <div className="inline-block text-[15px] font-light ml-[6px]">
            로그인 상태 유지
          </div>
        </div>
        <div className="leading-[13px]">
          <div className="inline-block text-[13px] border-r border-[#BCBBBB] pr-2 cursor-pointer">
            아이디 찾기
          </div>
          <div className="inline-block text-[13px] pl-2 cursor-pointer">
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
      <div className="text-center mt-[21px]">
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
