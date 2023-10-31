import { useEffect, useState } from "react";

interface AuthErrorMessageProps {
  expired: boolean;
}

const AuthErrorMessage = ({ expired }: AuthErrorMessageProps) => {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    setIsExpired(expired);
  }, [expired]);

  return (
    <>
      {isExpired ? (
        <div className="text-[#FF2330] mt-[5px] mb-[12px]">
          인증번호를 다시 요청해주세요.
        </div>
      ) : (
        <div className="text-[#FF2330] mt-[5px] mb-[12px]">
          발송된 인증번호를 확인해주세요.
        </div>
      )}
    </>
  );
};

export default AuthErrorMessage;
