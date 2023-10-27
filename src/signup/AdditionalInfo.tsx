// 회원가입 - 닉네임, 이메일 등 추가 정보 입력 컴포넌트
import React from "react";

const AdditionalInfo = () => {
  return (
    <div>
      <div className="w-[844.67px] h-[988px] bg-white rounded-[40px] shadow flex flex-col p-8">
        <div className="text-black text-[55px] font-medium font-['Poppins']">
          Sign up
        </div>
        <div className="text-black text-xl font-normal font-['Poppins']">
          추가 정보를 입력해주세요
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
