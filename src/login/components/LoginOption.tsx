import { useRouter } from "next/router";
import { KAKAO_CODE_URL, NAVER_CODE_URL } from "@shared/constants";
import { LoginFormType } from "@shared/types";
import { logout } from "@shared/utils";
import LoginButton from "./LoginButton";

interface LoginOptionProps {
  answer: LoginFormType;
  handleError: (value: boolean) => void;
}

const LoginOption = ({ answer, handleError }: LoginOptionProps) => {
  const { push } = useRouter();
  const onLogin = () => {
    if (answer.id.trim() === "" || answer.password.trim() === "")
      handleError(true);
    // TODO: API CALL
  };

  const onKakaoLogin = () => {
    push(KAKAO_CODE_URL);
  };

  const onNaverLogin = () => {
    push(NAVER_CODE_URL);
  };

  return (
    <div className="text-center">
      <LoginButton
        value="로그인"
        buttonStyle="bg-[#F864A1] text-lg text-white font-semibold"
        onClick={onLogin}
      />
      <div className="text-[#ABABAB] my-[10px]">OR</div>
      <LoginButton
        value="카카오 로그인"
        buttonStyle="bg-kakao bg-no-repeat bg-[position:22.5px_center] bg-[#FEE500] text-[#000000D9] font-medium mb-[18px]"
        onClick={onKakaoLogin}
      />
      <LoginButton
        value="네이버 로그인"
        buttonStyle="bg-naver bg-no-repeat bg-[position:22.5px_center] bg-[#03C75A] text-white font-medium"
        onClick={onNaverLogin}
      />
      {/* 테스트용 임시 로그아웃 버튼 */}
      <LoginButton
        value="kakaologout"
        buttonStyle="bg-yellow-400"
        onClick={() => logout("kakao")}
      />
      <LoginButton
        value="naverlogout"
        buttonStyle="bg-green-400"
        onClick={() => logout("naver")}
      />
    </div>
  );
};

export default LoginOption;
