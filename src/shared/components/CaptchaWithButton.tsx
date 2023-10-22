import { ValidateButton } from "@findid/components";
import { AnswerType, AuthType } from "@shared/types";

interface CaptchaWithButtonProps {
  type: AuthType;
  isValidate: AnswerType;
  handleCaptcha: (captcha: AnswerType) => void;
  handleDoneCaptcha: () => void;
}

const CaptchaWithButton = ({
  type,
  isValidate,
  handleCaptcha,
  handleDoneCaptcha,
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
        isValidate={(isValidate[type] && isValidate.name) as boolean}
        buttonColor="bg-[#F864A1]"
        buttonColorDisabled="bg-[#FAC3DA]"
        extraClass="mt-[21px]"
        onClick={() => {
          if (type === "phone") {
            handleDoneCaptcha();
          } else alert("api here"); // email api
        }}
      />
    </>
  );
};

export default CaptchaWithButton;
