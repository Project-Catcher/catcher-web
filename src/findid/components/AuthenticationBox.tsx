import { AuthType } from "@shared/types";
import AuthenticationForm from "./AuthenticationForm";
import ValidateButton from "./ValidateButton";
import { AuthTimer, InputWithLabel } from "@shared/components";

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
      <input
        readOnly
        id={type}
        className={`w-[20px] h-[20px] mr-[6px] ${
          isChecked ? "opacity-100" : "opacity-30"
        }`}
        type="radio"
        checked={isChecked}
        onClick={({ target }) => {
          if (target instanceof HTMLInputElement)
            handleChecked(target.id as AuthType);
        }}
      />
      <label htmlFor={type} className="w-4/5">
        {`${isPhone ? "휴대전화로 인증하여 찾기" : "이메일로 인증하여 찾기"}`}
      </label>
      {isChecked && (
        <AuthenticationForm
          type={type}
          description={`${
            isPhone
              ? "회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야 인증번호를 받을 수 있습니다."
              : "본인확인 이메일 주소와 입력한 이메일 주소가 같아야, 인증번호를 받을 수 있습니다."
          }`}
        >
          {({ isDoneAuth, isValidate, handleCaptcha, handleDoneAuth }) => {
            console.log(isValidate);

            return (
              <>
                {!isDoneAuth ? (
                  <>
                    <div className="text-xs font-medium mt-[15px] mb-[5px]">
                      개인정보 보호를 위해 아래 자동입력 방지 문자를
                      입력해주세요.
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
                        if (isPhone) {
                          handleDoneAuth();
                        } else alert("api here");
                      }}
                    />
                  </>
                ) : (
                  <div className="text-xs font-medium mt-[15px] mb-[5px]">
                    <InputWithLabel
                      label="인증번호"
                      id="phoneAuth"
                      inputType="tel"
                      inputStyle="w-[281px] text-xs leading-[24px] px-[14px] py-[5px]"
                      placeholder="인증번호 입력"
                    />
                    <button className="inline-block w-[95px] h-[36px] text-white bg-[#FACD49] ml-[7px] mr-[14px]">
                      재발송
                    </button>
                    <AuthTimer />
                    <div className="text-[#00D179] mt-[5px] mb-[12px]">
                      인증 성공!
                    </div>
                    {/* <div className="h-[16px] invisible mt-[5px] mb-[12px]"></div> */}
                    <ValidateButton
                      type="beforePhoneAuth"
                      value="아이디 찾기"
                      isValidate={isValidate}
                      buttonColor="bg-[#A564F8]"
                      buttonColorDisabled="bg-[#D0B3F5]"
                      extraClass="mt-[21px]"
                      onClick={() => {
                        if (isPhone) {
                          handleDoneAuth();
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
