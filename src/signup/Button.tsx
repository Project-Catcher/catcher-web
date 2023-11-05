// 제출, 완료에 사용되는 버튼 컴포넌트
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="w-[380px] h-[45.73px] px-[21.73px] py-[10.86px] bg-amber-500 rounded-lg"
      onClick={onClick}
    >
      <div className="text-white text-base font-semibold font-['Raleway'] leading-normal">
        {label}
      </div>
    </button>
  );
};

export default Button;
