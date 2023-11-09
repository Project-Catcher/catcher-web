interface AuthErrorMessageProps {
  isExpired: boolean;
  messageStyle: string;
}

const AuthErrorMessage = ({
  isExpired,
  messageStyle,
}: AuthErrorMessageProps) => {
  return (
    <>
      {isExpired ? (
        <div className={`${messageStyle} text-[#FF2330] mt-[5px] mb-[5px]`}>
          인증번호를 다시 요청해주세요.
        </div>
      ) : (
        <div className={`${messageStyle} text-[#FF2330] mt-[5px] mb-[5px]`}>
          발송된 인증번호를 확인해주세요.
        </div>
      )}
    </>
  );
};

export default AuthErrorMessage;
