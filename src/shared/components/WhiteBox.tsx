import { HTMLAttributes, ReactNode } from "react";

interface WhiteBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  boxStyle: string;
}

const WhiteBox = ({ children, boxStyle, ...props }: WhiteBoxProps) => {
  return (
    <section className="flex items-center justify-center w-screen h-screen">
      <div className={`${boxStyle}`} {...props}>
        {children}
      </div>
    </section>
  );
};

export default WhiteBox;
