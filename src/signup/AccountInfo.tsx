// 회원가입 페이지 - 아이디, 비밀번호 등 계정 입력 컴포넌트
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { TimerWithButton } from "@shared/components";
import { signupPageState } from "@shared/recoil/signup";
import { checkAuthNumValidation, checkPhoneValidation } from "@shared/utils";
import Button from "./Button";
import CheckAuth from "./CheckAuth";
import Input from "./Input";
import Instructions from "./Instructions";

type FormKey = "id" | "password" | "checkPassword" | "phone";
type FormValue = { essential: boolean; value: string };
type FormData = Record<FormKey, FormValue>;

const AccountInfo = () => {
  const setCurrentPage = useSetRecoilState(signupPageState);

  const [isSubmit, setIsSubmit] = useState(false);
  const [isDonePhoneInput, setIsDonePhoneInput] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    id: { essential: true, value: "" },
    password: { essential: true, value: "" },
    checkPassword: { essential: true, value: "" },
    phone: { essential: true, value: "" },
  });
  const [authNum, setAuthNum] = useState("");

  const validator = {
    isValidPhone: checkPhoneValidation(formData.phone.value),
    isValidAuthNum: checkAuthNumValidation(authNum),
  };

  // 필수 데이터 입력 확인
  const isDataComplete = Object.values(formData).every(
    ({ essential, value }: FormValue) => !essential || value.trim() !== "",
  );

  // TODO: 휴대폰 인증번호 확인 로직 추가
  // TODO: 아이디, 비밀번호 validation 추가
  useEffect(() => {
    setIsSubmit(isDataComplete);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { ...prevFormData[name as FormKey], value },
    }));
  };

  const handleAuthClick = () => {
    if (validator.isValidPhone) {
      setIsDonePhoneInput(true);
      alert(
        "인증번호 발송 요청이 완료되었습니다.\n인증번호가 오지 않는 경우, 입력한 이름/휴대폰번호를 확인 후 다시 요청해주세요.",
      ); // TODO: 아임포트 API와 연결하여 휴대폰 인증 로직
    } else {
      alert("휴대폰 번호를 정확히 입력해주세요!");
    }
  };

  const handleFormSubmit = () => {
    if (isDataComplete) {
      console.log("계정 정보", formData);
      setCurrentPage((prev) => prev + 1);
    } else {
      // TODO: 공통 Alert
      alert("필수 데이터를 모두 입력하세요.");
    }
  };

  return (
    <div>
      <div className="w-[844.67px] h-[988px] bg-white rounded-[40px] shadow flex flex-col p-8">
        <div className="text-black text-[55px] font-medium font-['Poppins']">
          Sign up
        </div>
        <div className="text-black text-xl font-normal font-['Poppins']">
          아래 정보를 모두 입력하시면 가입이 완료 됩니다.
        </div>

        <div className="flex flex-col items-center">
          <div className="mt-4">
            <Input
              label="아이디"
              fieldName="id"
              essential={true}
              placeholder="띄어쓰기 없이 영문과 숫자 6~15자"
              shape="semi-round"
              inputStyle="w-full h-full outline-0 px-[30px]"
              divStyle="w-[450px] h-[57px] mb-[12px]"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Input
              label="비밀번호"
              fieldName="password"
              type="password"
              essential={true}
              placeholder="8~15자의 영문 대소문자, 숫자 또는 특수문자 조합"
              shape="semi-round"
              inputStyle="w-full h-full outline-0 px-[30px]"
              divStyle="w-[450px] h-[57px] mb-[12px]"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Input
              label="비밀번호 확인"
              fieldName="checkPassword"
              type="password"
              essential={true}
              placeholder="비밀번호를 한번 더 입력해주세요"
              shape="semi-round"
              inputStyle="w-full h-full outline-0 px-[30px]"
              divStyle="w-[451px] h-[57px] mb-[12px]"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-end">
            <div>
              <Instructions type="phone" />
              <Input
                readOnly={isDonePhoneInput}
                label="휴대폰 인증"
                fieldName="phone"
                shape="normal"
                placeholder="휴대전화번호 (숫자만 입력)"
                divStyle="w-[333px] h-[46px]"
                inputStyle="w-full h-full text-sm px-[14px] py-[8px]"
                onChange={handleInputChange}
              />
            </div>
            <Button
              label="인증하기"
              disabled={!validator.isValidPhone || isDonePhoneInput}
              onClick={handleAuthClick}
              buttonStyle={`w-[113px] h-[46px] ml-1 
              ${
                !validator.isValidPhone || isDonePhoneInput
                  ? "bg-zinc-400"
                  : "bg-emerald-500"
              }`}
            />
          </div>

          <div className="mt-2">
            <div className="inline-block w-[333px]">
              <Input
                label="인증번호"
                fieldName="authNum"
                placeholder="띄어쓰기 없이 영문과 숫자 6~15자"
                shape="normal"
                divStyle="w-[333px] h-[46px]"
                inputStyle="w-full h-full text-sm px-[14px] py-[8px]"
                onChange={({ target: { value } }) => setAuthNum(value)}
              />
            </div>
            <TimerWithButton
              isDonePhoneInput={isDonePhoneInput}
              isAuthNumValidate={validator.isValidAuthNum}
              callType="signup"
              buttonStyle="w-[113px] ml-[4px]"
            />
          </div>

          <Button
            label="다음"
            onClick={handleFormSubmit}
            buttonStyle={`w-[451px] h-[54px]  rounded-[10px] shadow ${
              isSubmit ? "bg-amber-300" : "bg-zinc-400"
            }`}
          />

          {/* TODO: SNS 회원가입 */}
          <div className="mt-6 text-base font-normal text-center text-neutral-400">
            SNS 계정으로 간편하게 회원가입
          </div>
          <div className="flex gap-3 mt-4">
            <div className="w-[54px] h-[54px] bg-green-500 rounded-full flex-center">
              <Image
                className="cursor-pointer"
                src="/assets/signup/naver.png"
                alt="kakao"
                width={20}
                height={20}
              />
            </div>
            <div className="w-[54px] h-[54px] bg-yellow-400 rounded-full border border-yellow-400 flex-center">
              <Image
                className="cursor-pointer"
                src="/assets/signup/kakao.png"
                alt="kakao"
                width={30}
                height={28}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
