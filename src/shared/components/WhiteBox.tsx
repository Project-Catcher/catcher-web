import { HTMLAttributes, ReactNode } from "react";

interface WhiteBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  boxWidth: string;
  boxHeight: string;
  radius?: string;
  paddingX?: string;
  paddingY?: string;
  shadow?: string;
}

const WhiteBox = ({
  children,
  boxWidth,
  boxHeight,
  paddingX,
  paddingY,
  shadow,
  radius = "rounded-[40px]",
  ...props
}: WhiteBoxProps) => {
  return (
    <section className="flex w-screen h-screen items-center justify-center">
      <div
        className={`${boxWidth} ${boxHeight} ${radius} ${paddingX} ${paddingY} ${shadow}`}
        {...props}
      >
        {children}
      </div>
    </section>
  );
};

export default WhiteBox;
