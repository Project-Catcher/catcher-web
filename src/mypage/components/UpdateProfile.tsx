import { ValidateButton } from "@findid/components";
import { useState } from "react";
import { InputWithLabel } from "@shared/components";
import ImageWithNickname from "./ImageWithNickname";
import UpdateProfileButton from "./UpdateProfileButton";

export interface MyInfoModify {
  nickname: string;
  phone: string;
  email: string;
  password: string;
  checkPassword: string;
  birth: string;
  gender: string;
}

interface UpdateProfileProps {
  handleConfirm: (id: string, answer?: MyInfoModify) => void;
}

const UpdateProfile = ({ handleConfirm }: UpdateProfileProps) => {
  const [answer, setAnswer] = useState<MyInfoModify>({
    nickname: "",
    phone: "",
    email: "",
    password: "",
    checkPassword: "",
    birth: "",
    gender: "",
  });

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

  const handlePassword = (password: string) => {
    handleAnswer({ password: password });
  };

  const handleCheckPassword = (checkPassword: string) => {
    handleAnswer({ checkPassword: checkPassword });
  };

  const handleBirth = (birth: string) => {
    handleAnswer({ birth: birth });
  };

  const handleGender = (gender: string) => {
    handleAnswer({ gender: gender });
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
          <InputWithLabel
            label="닉네임"
            id="id"
            inputType="text"
            labelStyle="text-base text-[#333333] font-light mb-[8px]" // label initial style 수정 필요
            inputStyle="w-full h-[57px] rounded-[9px] px-[26px]"
            placeholder="띄어쓰기 없이 영문과 숫자 6~15"
            onChange={({ target: { value } }) => handleNickName(value)}
          />
        </div>

        <div className="flex justify-between mb-[8px] gap-[5px]">
          <InputWithLabel
            label="휴대폰 번호 변경"
            id="changePhone"
            inputType="tel"
            labelStyle="text-base text-[#333333] font-light mb-[8px]"
            inputStyle="w-[280px] h-[46px] px-[15px]"
            placeholder="휴대전화번호 (숫자만 입력)"
            onChange={({ target: { value } }) => handlePhone(value)}
          />
          <ValidateButton
            type="phone"
            value="인증하기"
            isValidate
            buttonColor="bg-[#00D179]"
            buttonColorDisabled="bg-[#BABABA]"
            extraClass="w-[113px] h-[46px] rounded-[0] self-end"
          />
        </div>

        <div className="flex justify-between mb-[10px] gap-[5px]">
          <InputWithLabel
            label="휴대폰으로 전송된 인증코드를 입력해주세요."
            id="authNum"
            inputType="tel"
            labelStyle="text-base text-[#333333] font-light mb-[8px]"
            inputStyle="w-[280px] h-[46px] px-[15px]"
            placeholder="인증번호 6자리 입력"
          />
          <ValidateButton
            type="phone"
            value="재발송"
            isValidate
            buttonColor="bg-[#FACD49]"
            buttonColorDisabled="bg-[#BABABA]"
            extraClass="w-[113px] h-[46px] rounded-[0] self-end"
          />
        </div>

        <div className="mb-[15px]">
          <InputWithLabel
            label="이메일"
            id="email"
            inputType="text"
            labelStyle="text-base text-[#333333] font-light mb-[8px]" // label initial style 수정 필요
            inputStyle="w-full h-[57px] rounded-[9px] px-[26px]"
            placeholder="이메일을 입력해 주세요."
            onChange={({ target: { value } }) => handleEmail(value)}
          />
        </div>

        <div className="mb-[15px]">
          <InputWithLabel
            label="비밀번호 변경"
            id="changePassword"
            inputType="password"
            labelStyle="text-base text-[#333333] font-light mb-[8px]" // label initial style 수정 필요
            inputStyle="w-full h-[57px] rounded-[9px] px-[26px]"
            placeholder="8~15자의 영문 대소문자, 숫자 또는 특수문자 조합"
            onChange={({ target: { value } }) => handlePassword(value)}
          />
        </div>

        <div className="mb-[15px]">
          <InputWithLabel
            label="비밀번호 확인"
            id="checkPassword"
            inputType="password"
            labelStyle="text-base text-[#333333] font-light mb-[8px]" // label initial style 수정 필요
            inputStyle="w-full h-[57px] rounded-[9px] px-[26px]"
            placeholder="비밀번호를 한번 더 입력해주세요"
            onChange={({ target: { value } }) => handleCheckPassword(value)}
          />
        </div>

        <div className="mb-[15px]">
          <InputWithLabel
            label="생년월일"
            id="birth"
            inputType="text"
            labelStyle="text-base text-[#333333] font-light mb-[8px]" // label initial style 수정 필요
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
            labelStyle="text-base text-[#333333] font-light mb-[8px]" // label initial style 수정 필요
            inputStyle="w-full h-[57px] rounded-[9px] px-[26px]"
            placeholder="성별을 입력해주세요"
            onChange={({ target: { value } }) => handleGender(value)}
          />
        </div>

        <UpdateProfileButton answer={answer} handleConfirm={handleConfirm} />
      </div>
    </>
  );
};

export default UpdateProfile;
