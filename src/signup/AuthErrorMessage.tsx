import { useEffect, useState } from "react";
import { clearTimeout, setTimeout } from "timers";

const AuthErrorMessage = () => {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    setIsExpired(false);
    const timer = setTimeout(() => {
      setIsExpired(true);
    }, 180000);

    return () => clearTimeout(timer);
  }, []);

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
