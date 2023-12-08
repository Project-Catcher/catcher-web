import { useState } from "react";

const BlockShowing = () => {
  const [isBlockChecked, setIsBlockChecked] = useState(false);

  const handleChecked = () => {
    setIsBlockChecked((prev) => !prev);
  };

  return (
    <label
      htmlFor="block"
      className={`${
        isBlockChecked ? "text-[#F864A1]" : "text-[#8D8D8D]"
      } flex items-center w-fit gap-[4px] text-[14px] -tracking-[0.03em]`}
    >
      <input
        className={`${
          isBlockChecked ? "border-[#F864A1] " : "border-[#8D8D8D] "
        } appearance-none w-[14px] h-[14px] border rounded-[2px] checked:bg-checked checked:bg-no-repeat checked:bg-center`}
        id="block"
        type="checkbox"
        onClick={handleChecked}
      />
      <p>7일간 보지 않기</p>
    </label>
  );
};

export default BlockShowing;
