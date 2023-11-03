import { AuthErrorMessage, ValidateButton } from "@findid/components";
import { useRouter } from "next/router";
import { useState } from "react";
import { InputWithLabel, Instructions } from "@shared/components";
import { checkEmailValidation, checkPhoneValidation } from "@shared/utils";
import ImageWithNickname from "./ImageWithNickname";
import UpdateProfileButton from "./UpdateProfileButton";

export interface MyInfoModify {
  nickname: string;
  phone: string;
  email: string;
  birth: string;
  gender: string;
}

interface UpdateProfileProps {
  handleConfirm: (id: string, answer?: MyInfoModify) => void;
}

const UpdateProfile = ({ handleConfirm }: UpdateProfileProps) => {
  const { push } = useRouter();
  const [isDonePhoneInput, setIsDonePhoneInput] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);
  const [answer, setAnswer] = useState<MyInfoModify>({
    nickname: "",
    phone: "",
    email: "",
    birth: "",
    gender: "",
  });

  const validator = {
    isValidPhone: checkPhoneValidation(answer.phone),
    isValidEmail: checkEmailValidation(answer.email),
  };

  const handleAnswer = (answer: Partial<MyInfoModify>) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handleNickName = (nickname: string) => {
    handleAnswer({ nickname: nickname });
  };

  const handlePhone = (phone: string) => {
    handleAnswer({ phone: phone });
  };

  const handleEmail = (email: string) => {
    handleAnswer({ email: email });
  };

  const handleBirth = (birth: string) => {
    handleAnswer({ birth: birth });
  };

  const handleGender = (gender: string) => {
    handleAnswer({ gender: gender });
  };

  const handlePasswordChange = () => {
    push({
      pathname: "/findidpw",
      query: {
        type: "password",
        progress: 2,
      },
    });
  };

  return (
    <>
      <button
        id="changeProfileButton"
        className="float-right w-[76px] h-[33px] border border-[#D4D8E5] rounded-[5px] text-[14px] text-[#666666] bg-[#F4F5F8]"
        onClick={({ currentTarget: { id } }) => handleConfirm(id)}
      >
        정보수정
      </button>
      <div className="px-[128px] mt-[13px]">
        <ImageWithNickname />

        <div className="mb-[15px]">
          <InputWithLabel // TODO: add current nickname value
            label="닉네임"
            id="id"
            inputType="text"
            labelStyle="text-xs text-[#333333] font-medium mb-[8px]"
            inputStyle="w-full h-[57px] rounded-[9px] px-[26px]"
            placeholder="띄어쓰기 없이 영문과 숫자 6~15"
            onChange={({ target: { value } }) => handleNickName(value)}
          />
        </div>

        <Instructions type="phone" />
        <div className="flex justify-between items-end mb-[8px] gap-[4px]">
          <InputWithLabel
            readOnly={isDonePhoneInput}
            label="휴대폰 번호 변경"
            id="changePhone"
            inputType="tel"
            labelStyle="text-xs text-[#333333] font-medium mb-[8px]"
            inputStyle={`${
              isDonePhoneInput ? "bg-[#F5F5F5] " : ""
            }w-[287px] h-[46px] px-[15px]`}
            placeholder="휴대전화번호 (숫자만 입력)"
            onChange={({ target: { value } }) => handlePhone(value)}
          />
          <div>
            <ValidateButton
              type="phone"
              value="인증하기"
              isValidate={validator.isValidPhone}
              buttonColor="bg-[#00D179]"
              buttonColorDisabled="bg-[#BABABA]"
              extraClass="w-[113px] h-[46px] rounded-[0]"
              onClick={() => {
                setIsDonePhoneInput(true);
                // TODO: request auth api, timer here
              }}
            />
          </div>
        </div>

        <div className="flex w-full justify-between items-end mb-[5px]">
          <InputWithLabel // TODO: auth timer here
            label="휴대폰으로 전송된 인증코드를 입력해주세요."
            id="authNum"
            inputType="tel"
            labelStyle="text-[12px] text-[#333333] mb-[8px]"
            inputStyle="w-[287px] h-[46px] px-[15px]"
            placeholder="인증번호 6자리 입력"
          />
          <div>
            <ValidateButton
              type="phone"
              value="재발송"
              isValidate
              buttonColor="bg-[#FACD49]"
              buttonColorDisabled="bg-[#BABABA]"
              extraClass="w-[113px] h-[46px] rounded-[0]"
            />
          </div>
        </div>

        {isAuthError ? (
          <AuthErrorMessage /> // TODO: add text size, move shared/components
        ) : (
          <div className="h-[12px] invisible mb-[3px]"></div>
        )}

        <div className="mb-[15px]">
          <InputWithLabel // TODO: 이메일 있을 시 - 이메일 마스킹 readonly
            readOnly
            label="이메일"
            id="email"
            inputType="text"
            labelStyle="text-xs text-[#333333] font-medium mb-[8px]"
            inputStyle="w-full h-[57px] rounded-[9px] px-[26px] bg-[#F5F5F5]"
            placeholder="이메일을 입력해 주세요."
            onChange={({ target: { value } }) => handleEmail(value)}
          />
        </div>

        <div className="flex items-end mb-[15px]">
          <div className="grow">
            <InputWithLabel
              readOnly
              label="비밀번호"
              id="password"
              inputType="password"
              value="zzzzzz" // TODO: current pw length
              labelStyle="text-xs text-[#333333] font-medium mb-[8px]"
              inputStyle="w-full h-[57px] rounded-[9px_0_0_9px] px-[26px] bg-[#F5F5F5]"
            />
          </div>
          <button
            className="w-[114px] h-[57px] text-white font-medium rounded-[0_9px_9px_0] bg-[#BABABA]"
            onClick={handlePasswordChange}
          >
            변경하기
          </button>
        </div>

        <div className="mb-[15px]">
          <InputWithLabel
            label="생년월일"
            id="birth"
            inputType="text"
            labelStyle="text-xs text-[#333333] font-medium mb-[8px]"
            inputStyle="w-full h-[57px] rounded-[9px] px-[26px]"
            placeholder="생년월일을 입력해주세요 (YYYYMMDD)"
            onChange={({ target: { value } }) => handleBirth(value)}
          />
        </div>

        <div className="mb-[23px]">
          <InputWithLabel
            label="성별"
            id="gender"
            inputType="text"
            labelStyle="text-xs text-[#333333] font-medium mb-[8px]"
            inputStyle="w-full h-[57px] rounded-[9px] px-[26px]"
            placeholder="성별을 입력해주세요"
            onChange={({ target: { value } }) => handleGender(value)}
          />
        </div>

        <UpdateProfileButton
          validator={validator}
          answer={answer}
          handleConfirm={handleConfirm}
        />
      </div>
    </>
  );
};

export default UpdateProfile;
