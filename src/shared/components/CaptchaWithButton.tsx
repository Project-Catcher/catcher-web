import { ValidateButton } from "@findid/components";
import { AuthType } from "@shared/types";

interface CaptchaWithButtonProps {
  type: AuthType;
  isValidate: boolean;
  handleDoneInput: () => void;
  handleCaptcha: (value: string) => void;
}

const CaptchaWithButton = ({
  type,
  isValidate,
  handleDoneInput,
  handleCaptcha,
}: CaptchaWithButtonProps) => {
  return (
    <>
      <div className="text-xs font-medium mt-[15px] mb-[5px]">
        개인정보 보호를 위해 아래 자동입력 방지 문자를 입력해주세요.
      </div>
      <div onChange={() => handleCaptcha}>CAPTCHA HERE</div>
      <ValidateButton
        type={type}
        value="인증번호 받기"
        isValidate={isValidate}
        buttonColor="bg-[#F864A1]"
        buttonColorDisabled="bg-[#FAC3DA]"
        extraClass="mt-[21px]"
        onClick={() => {
          // 캡차 검증 로직 추가 필요
          if (type === "phone") {
            handleDoneInput(); // add import api
          } else handleDoneInput(); // email api
        }}
      />
    </>
  );
};

export default CaptchaWithButton;
