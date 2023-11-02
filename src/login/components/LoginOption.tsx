import LoginButton from "./LoginButton";

const LoginOption = () => {
  return (
    <div className="text-center">
      <LoginButton
        value="로그인"
        buttonStyle="bg-[#F864A1] text-lg text-white font-semibold"
      />
      <div className="text-[#ABABAB] my-[10px]">OR</div>
      <LoginButton
        value="카카오 로그인"
        buttonStyle="bg-kakao bg-no-repeat bg-[position:22.5px_center] bg-[#FEE500] text-[#000000D9] font-medium mb-[18px]"
      />
      <LoginButton
        value="네이버 로그인"
        buttonStyle="bg-naver bg-no-repeat bg-[position:22.5px_center] bg-[#03C75A] text-white font-medium"
      />
    </div>
  );
};

export default LoginOption;
