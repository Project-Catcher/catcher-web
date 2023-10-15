import { ReactNode } from "react";

interface WhiteBoxContainerProps {
  children: ReactNode;
}

const WhiteBoxContainer = ({ children }: WhiteBoxContainerProps) => {
  return <div className="whiteboxContainer">{children}</div>;
};

export default WhiteBoxContainer;
