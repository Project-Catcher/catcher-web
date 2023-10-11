import { HTMLAttributes, ReactNode, forwardRef } from "react";

interface WhiteBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  extraClass?: string;
}

const WhiteBox = forwardRef<HTMLDivElement, WhiteBoxProps>(
  ({ children, extraClass, ...props }, ref) => {
    return (
      <div className={`skillsBox my-4 ${extraClass}`} {...props} ref={ref}>
        {children}
      </div>
    );
  },
);

export default WhiteBox;
