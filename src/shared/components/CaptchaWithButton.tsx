import { ValidateButton } from "@findid/components";
import { AuthType } from "@shared/types";

interface CaptchaWithButtonProps {
  type: AuthType;
  isValidate: boolean;
  handleDoneCaptcha: () => void;
  handleCaptchaValue: (captchaValue: string) => void;
}

const CaptchaWithButton = ({
  type,
  isValidate,
  handleDoneCaptcha,
  handleCaptchaValue,
}: CaptchaWithButtonProps) => {
  return (
    <>
      <div className="text-xs font-medium mt-[15px] mb-[5px]">
        개인정보 보호를 위해 아래 자동입력 방지 문자를 입력해주세요.
      </div>
      <div onChange={() => handleCaptchaValue}>CAPTCHA HERE</div>
      <ValidateButton
        type={type}
        value="인증번호 받기"
        isValidate={isValidate}
        buttonColor="bg-[#F864A1]"
        buttonColorDisabled="bg-[#FAC3DA]"
        extraClass="mt-[21px]"
        onClick={() => {
          if (type === "phone") {
            handleDoneCaptcha(); // add import api
          } else alert("api here"); // email api
        }}
      />
    </>
  );
};

export default CaptchaWithButton;
