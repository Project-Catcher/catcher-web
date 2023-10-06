import { ReactNode } from "react";

interface WhiteBoxProps {
  children: ReactNode;
  extraClass?: string;
}

const WhiteBox = ({ children, extraClass }: WhiteBoxProps) => {
  return <div className={`skillsBox my-4 ${extraClass}`}>{children}</div>;
};

export default WhiteBox;
