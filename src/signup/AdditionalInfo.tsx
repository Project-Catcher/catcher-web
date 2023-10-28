// 회원가입 - 닉네임, 이메일 등 추가 정보 입력 컴포넌트
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { signupPageState } from "@shared/recoil/signup";
import Button from "./Button";
import Input from "./Input";

interface FormData {
  [nickname: string]: { essential: boolean; value: string };
  phonePrefix: { essential: boolean; value: string };
  phoneSuffix: { essential: boolean; value: string };
  email: { essential: boolean; value: string };
}

const AdditionalInfo = () => {
  const setCurrentPage = useSetRecoilState(signupPageState);

  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nickname: { essential: true, value: "" },
    phonePrefix: { essential: true, value: "010" },
    phoneSuffix: { essential: true, value: "" },
    // TODO: SNS email 불러오기
    email: { essential: false, value: "" },
  });

  // 필수 데이터 입력 확인
  const isDataComplete = Object.keys(formData).every((key) => {
    return !formData[key].essential || formData[key].value !== "";
  });

  useEffect(() => {
    if (isDataComplete) {
      setIsSubmit(true);
    } else setIsSubmit(false);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: {
        ...prevFormData[name],
        value: value,
      },
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: {
        ...prevFormData[id],
        value: value,
      },
    }));
  };

  const handleFormSubmit = () => {
    if (isDataComplete) {
      // TODO: 제출시 phonePrefix + phoneSuffix
      console.log("추가 정보", formData);
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
          추가 정보를 입력해주세요
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[451px] mt-4">
            <Input
              label="닉네임"
              fieldName="nickname"
              essential={formData.nickname.essential}
              placeholder="띄어쓰기 없이 영문과 숫자 6~15자"
              shape="semi-round"
              inputStyle="w-full h-full outline-0"
              divStyle="h-[57px] px-[30px] mb-[12px]"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-[451px]">
            <div className={`text-xs font-medium text-[#2C2C2E] mb-[5px] `}>
              휴대전화 번호
              <span className="w-[11px] h-[22px] text-red-600 text-xl font-light">
                *
              </span>
            </div>
            <div className="flex items-end h-[55px] mb-[12px]">
              <select
                id="phonePrefix"
                value={formData.phonePrefix.value}
                onChange={handleSelectChange}
                className="rounded-[9px] border border-solid border-[#ADADAD] p-2 h-full w-[83px]"
              >
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
              <Input
                fieldName="phoneSuffix"
                placeholder="숫자만 입력해주세요"
                shape="semi-round"
                inputStyle="w-full h-full outline-0"
                divStyle="ml-2 h-[57px] px-[30px]"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-[451px]">
            <Input
              label="이메일"
              fieldName="email"
              placeholder="이메일을 입력해주세요"
              shape="semi-round"
              inputStyle="w-full h-full outline-0"
              divStyle="h-[57px] px-[30px] mb-[12px]"
              onChange={handleInputChange}
            />
          </div>

          <Button
            label="회원가입"
            onClick={handleFormSubmit}
            buttonStyle={`w-[451px] h-[54px] rounded-[10px] shadow mt-3 ${
              isSubmit ? "bg-pink-400" : "bg-zinc-400"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
