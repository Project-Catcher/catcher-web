import { InputHTMLAttributes } from "react";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  inputType: string;
  labelStyle?: string;
  inputStyle?: string;
}

const InputWithLabel = ({
  label,
  id,
  inputType,
  labelStyle,
  inputStyle,
  ...props
}: InputWithLabelProps) => {
  return (
    <div>
      <div>
        <label className={`text-xs font-medium ${labelStyle}`} htmlFor={id}>
          {label}
        </label>
      </div>
      <input
        id={id}
        className={`border border-[#BDBDBD] ${inputStyle}`}
        type={inputType}
        {...props}
      />
    </div>
  );
};

export default InputWithLabel;
