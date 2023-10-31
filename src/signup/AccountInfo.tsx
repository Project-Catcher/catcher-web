// 회원가입 페이지 - 아이디, 비밀번호 등 계정 입력 컴포넌트
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { signupPageState } from "@shared/recoil/signup";
import Button from "./Button";
import CheckAuth from "./CheckAuth";
import Input from "./Input";
import Instructions from "./Instructions";

export interface FormItem {
  essential: boolean;
  value: string;
}

interface FormData {
  id: FormItem;
  password: FormItem;
  checkPassword: FormItem;
  phone: FormItem;
}

const AccountInfo = () => {
  const setCurrentPage = useSetRecoilState(signupPageState);

  const [isSubmit, setIsSubmit] = useState(false);
  const [isDoneInput, setIsDoneInput] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    id: { essential: true, value: "" },
    password: { essential: true, value: "" },
    checkPassword: { essential: true, value: "" },
    phone: { essential: true, value: "" },
  });

  // 필수 데이터 입력 확인
  const isDataComplete = Object.values(formData).every(
    ({ essential, value }: FormItem) => !essential || value.trim() !== "",
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
      [name]: { ...prevFormData[name], value },
    }));
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
          <div className="w-[451px] mt-4">
            <Input
              label="아이디"
              fieldName="id"
              essential={true}
              placeholder="띄어쓰기 없이 영문과 숫자 6~15자"
              shape="semi-round"
              inputStyle="w-full h-full outline-0"
              divStyle="h-[57px] px-[30px] mb-[12px]"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-[451px]">
            <Input
              label="비밀번호"
              fieldName="password"
              type="password"
              essential={true}
              placeholder="8~15자의 영문 대소문자, 숫자 또는 특수문자 조합"
              shape="semi-round"
              inputStyle="w-full h-full outline-0"
              divStyle="h-[57px] px-[30px] mb-[12px]"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-[451px]">
            <Input
              label="비밀번호 확인"
              fieldName="checkPassword"
              type="password"
              essential={true}
              placeholder="비밀번호를 한번 더 입력해주세요"
              shape="semi-round"
              inputStyle="w-full h-full outline-0"
              divStyle="h-[57px] px-[30px] mb-[12px]"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-end">
            <div className="">
              <Instructions type="phone" />
              <Input
                readOnly={isDoneInput}
                label="휴대폰 인증"
                fieldName="phone"
                shape="normal"
                placeholder="휴대전화번호 (숫자만 입력)"
                inputStyle="w-[333px] h-[46px] text-sm px-[14px] py-[8px]"
                onChange={handleInputChange}
              />
            </div>
            <Button
              label="인증하기"
              disabled={isDoneInput}
              onClick={() => {
                setIsDoneInput(true);
                alert(
                  "인증번호 발송 요청이 완료되었습니다.\n인증번호가 오지 않는 경우, 입력한 이름/휴대폰번호를 확인 후 다시 요청해주세요.",
                ); // TODO: 아임포트 API와 연결하여 휴대폰 인증 로직
              }}
              buttonStyle={`w-[119px] h-[48px] ml-1  ${
                isDoneInput ? "bg-zinc-400" : "bg-emerald-500"
              }`}
            />
          </div>
          <CheckAuth isDoneInput={isDoneInput} />
          <Button
            label="다음"
            onClick={handleFormSubmit}
            buttonStyle={`w-[451px] h-[54px]  rounded-[10px] shadow ${
              isSubmit ? "bg-amber-300" : "bg-zinc-400"
            }`}
          />

          {/* TODO: SNS 회원가입 */}
          <div className="mt-6 w-[235px] text-center text-neutral-400 text-base font-normal font-['Poppins'] leading-snug">
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
