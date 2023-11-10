import { useRouter } from "next/router";
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
    if (answer.id === "" || answer.password === "") handleError(true);
    // TODO: API CALL
  };

  const onKakaoLogin = () => {
    const restApiKey = process.env.NEXT_PUBLIC_REST_API_KEY_KAKAO;
    const redirectURI = process.env.NEXT_PUBLIC_REDIRECT_URI_KAKAO;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectURI}&response_type=code`;
    const handleLogin = () => {
      push(`${kakaoURL}`);
    };

    handleLogin();
  };

  const onNaverLogin = () => {
    const restApiKey = process.env.NEXT_PUBLIC_REST_API_KEY_NAVER;
    const redirectURI = process.env.NEXT_PUBLIC_REDIRECT_URI_NAVER;
    const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${restApiKey}&state=test&redirect_uri=${redirectURI}`;
    const handleLogin = () => {
      push(`${naverURL}`);
    };

    handleLogin();
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
