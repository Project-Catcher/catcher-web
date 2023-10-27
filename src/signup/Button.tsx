// 버튼 컴포넌트
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  buttonStyle: string;
  readOnly?: boolean;
}

const Button = ({ label, onClick, buttonStyle, readOnly }: ButtonProps) => {
  return (
    <button className={`${buttonStyle}`} onClick={onClick}>
      <div className="text-white text-base font-semibold font-['Raleway'] leading-normal">
        {label}
      </div>
    </button>
  );
};

export default Button;
