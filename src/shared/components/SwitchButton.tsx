import { useState } from "react";

interface SwitchButtonProps {
  size: string;
  buttonId: string;
}

const SwitchButton = ({ size, buttonId }: SwitchButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <label
        htmlFor={buttonId}
        className={`${size} ${
          isChecked
            ? "bg-[#F864A1] after:right-[4px] before:content-['ON'] before:text-[12px] before:left-[12px]"
            : "bg-[#D4D8E5] after:left-[4px] before:content-['OFF'] before:text-[12px] before:left-[29px]"
        } block relative text-white rounded-[16.24px] transition-all duration-[400ms] after:absolute after:w-[19px] after:h-[19px] after:rounded-[50%] after:top-[50%] after:-translate-y-1/2 after:bg-white after:transition-all after:duration-[400ms] before:absolute before:top-[50%] before:-translate-y-1/2 before:transition-all before:duration-[400ms]`}
      >
        <input
          className="hidden"
          id={buttonId}
          type="checkbox"
          onClick={handleChecked}
        />
      </label>
    </>
  );
};

export default SwitchButton;
