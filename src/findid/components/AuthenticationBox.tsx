import { AuthType } from "@shared/types";
import AuthenticationForm from "./AuthenticationForm";
import ValidateButton from "./ValidateButton";
import {
  AuthTimer,
  CaptchaWithButton,
  InputWithLabel,
} from "@shared/components";
import SelectAuthMethod from "./SelectAuthMethod";

interface AuthenticationBoxProps {
  type: AuthType;
  isChecked: boolean;
  handleChecked: (key: AuthType) => void;
}

const AuthenticationBox = ({
  type,
  isChecked,
  handleChecked,
}: AuthenticationBoxProps) => {
  const isPhone = type === "phone";

  return (
    <div
      className={`flex flex-wrap items-center w-[542px] button-semi-rounded text-[#2C2C2E] leading-[24px] border-2 ${
        isChecked ? "h-fit border-[#F864A1]" : "h-[64px] border-[#EBEBEB]"
      } px-[28.35px] py-[20px] mx-auto mb-[11.74px]`}
    >
      <SelectAuthMethod
        label={`${
          isPhone ? "휴대전화로 인증하여 찾기" : "이메일로 인증하여 찾기"
        }`}
        type={type}
        isChecked={isChecked}
        handleChecked={handleChecked}
      />
      {isChecked && (
        <AuthenticationForm
          type={type}
          description={`${
            isPhone
              ? "회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야 인증번호를 받을 수 있습니다."
              : "본인확인 이메일 주소와 입력한 이메일 주소가 같아야, 인증번호를 받을 수 있습니다."
          }`}
        >
          {({
            isDoneCaptcha,
            isValidate,
            handleCaptcha,
            handleDoneCaptcha,
            checkAuthNumValidation,
          }) => {
            return (
              <>
                {!isDoneCaptcha ? (
                  <CaptchaWithButton
                    type={type}
                    isValidate={isValidate}
                    handleCaptcha={handleCaptcha}
                    handleDoneCaptcha={handleDoneCaptcha}
                  />
                ) : (
                  <div className="text-xs font-medium mt-[15px] mb-[5px]">
                    <div className="flex items-end">
                      <InputWithLabel
                        // readonly 추가, 아임포트 api 추가 후 정리 필요할듯
                        maxLength={6}
                        pattern="\d*"
                        label="인증번호"
                        id="phoneAuth"
                        inputType="text"
                        inputStyle="w-[281px] h-[36px] text-xs leading-[24px] px-[14px] py-[6px]"
                        placeholder="인증번호 입력"
                        onChange={({ target: { value } }) =>
                          checkAuthNumValidation(value)
                        }
                      />
                      <button className="w-[95px] h-[36px] text-white bg-[#FACD49] ml-[7px] mr-[14px]">
                        재발송
                      </button>
                      <AuthTimer />
                    </div>
                    <div className="text-[#00D179] mt-[5px] mb-[12px]">
                      인증 성공!
                    </div>
                    {/* <div className="h-[16px] invisible mt-[5px] mb-[12px]"></div> */}
                    <ValidateButton
                      // 인증 전 isValidate 상태 추가
                      type="beforePhoneAuth"
                      value="아이디 찾기"
                      isValidate={isValidate.authNum as boolean}
                      buttonColor="bg-[#A564F8]"
                      buttonColorDisabled="bg-[#A564F875]"
                      extraClass="mt-[21px]"
                      onClick={() => {
                        if (isPhone) {
                          handleDoneCaptcha();
                        } else alert("api here");
                      }}
                    />
                  </div>
                )}
              </>
            );
          }}
        </AuthenticationForm>
      )}
    </div>
  );
};

export default AuthenticationBox;
