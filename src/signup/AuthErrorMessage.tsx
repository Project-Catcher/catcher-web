// 인증번호 에러 메시지

interface AuthErrorMessageProps {
  isExpired: boolean;
}

const AuthErrorMessage = ({ isExpired }: AuthErrorMessageProps) => {
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
