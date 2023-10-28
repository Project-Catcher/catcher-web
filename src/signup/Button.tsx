// 버튼 컴포넌트
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  buttonStyle: string;
  disabled?: boolean;
}

const Button = ({
  label,
  onClick,
  buttonStyle,
  disabled = false,
}: ButtonProps) => {
  return (
    <button className={`${buttonStyle}`} onClick={onClick} disabled={disabled}>
      <div className="text-white text-base font-semibold font-['Raleway'] leading-normal">
        {label}
      </div>
    </button>
  );
};

export default Button;
