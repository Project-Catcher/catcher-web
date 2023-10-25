import { useState } from "react";

interface IdInputProps {
  handleId: (id: string) => void;
}

const IdInput = ({ handleId }: IdInputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocusBlur = (value: boolean) => {
    setIsFocus(value);
  };

  return (
    <div className="flex w-full h-[57px] items-center justify-evenly rounded-[9px] border border-solid border-[#ADADAD] pl-[25px] pr-[19px] focus-within:border-[#4285F4] mb-[12px]">
      <label
        className={`w-[21px] h-[21px] inline-block border-box relative overflow-hidden text-[0px] leading-[0px] bg-idLabel bg-no-repeat ${
          isFocus ? "" : "invert-[0.5]"
        }`}
      ></label>
      <input
        className="w-full h-full pl-[25px] outline-0"
        type="text"
        placeholder="아이디"
        onChange={({ target: { value } }) => handleId(value)}
        onFocus={() => handleFocusBlur(true)}
        onBlur={() => handleFocusBlur(false)}
      />
    </div>
  );
};

export default IdInput;
