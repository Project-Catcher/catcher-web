import { ReactNode } from "react";

interface MyInfoBoxProps {
  boxStyle: string;
  children: ReactNode;
}

const MyInfoBox = ({ boxStyle, children }: MyInfoBoxProps) => {
  return (
    <div
      className={`${boxStyle} border rounded-[9px] bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.08)] pl-[27px] pr-[14px]`}
    >
      {children}
    </div>
  );
};

export default MyInfoBox;
