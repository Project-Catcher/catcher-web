// 약관 동의에 사용되는 체크박스 컴포넌트

import React from "react";

interface CheckboxProps {
  label: string;
  essential?: boolean;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, essential, checked, onChange }: CheckboxProps) => {
  return (
    <div className="inline mb-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="w-5 h-5 form-checkbox accent-amber-500"
          checked={checked}
          onChange={onChange}
        />
        <span className="ml-2 text-justify text-zinc-800 text-sm font-medium font-['Roboto Flex'] leading-[21px]">
          {label} {essential ? "(필수)" : "(선택)"}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
