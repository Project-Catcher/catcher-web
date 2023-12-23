import { ButtonHTMLAttributes } from "react";

interface MakeScheduleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  buttonStyle: string;
}

const MakeScheduleButton = ({
  value,
  buttonStyle,
  ...props
}: MakeScheduleButtonProps) => {
  return (
    <button
      {...props}
      className={`${buttonStyle} w-[207px] h-[44px] text-[14px] font-medium -tracking-[0.03em] border rounded-[5px]`}
    >
      {value}
    </button>
  );
};

export default MakeScheduleButton;
