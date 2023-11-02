import { useState } from "react";

const LoginError = () => {
  const [isError, setIsError] = useState(false); // TODO: api 호출 이후 error state 세팅

  return (
    <div className="mb-[15px]">
      {isError ? (
        <div className="text-xs text-[#FF2330] font-[350]">
          아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시
          확인해주세요.
        </div>
      ) : (
        <div className="h-[16px] invisible"></div>
      )}
    </div>
  );
};

export default LoginError;
