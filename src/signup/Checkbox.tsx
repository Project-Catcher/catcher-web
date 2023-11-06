// 약관 동의에 사용되는 체크박스 컴포넌트
import React from "react";

interface CheckboxProps {
  label: string;
  essential?: boolean;
  checked: boolean;
  onChange: () => void;
  labelStyle?: string;
}

const Checkbox = ({
  label,
  essential,
  checked,
  onChange,
  labelStyle = "text-sm",
}: CheckboxProps) => {
  return (
    <div className="mb-4 w-[200px]">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="w-5 h-5 form-checkbox accent-amber-500"
          checked={checked}
          onChange={onChange}
        />
        <div
          className={`ml-2 text-justify text-zinc-800 font-medium font-['Roboto Flex'] leading-[21px] ${labelStyle}`}
        >
          {label} {essential && (essential ? "(필수)" : "(선택)")}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
