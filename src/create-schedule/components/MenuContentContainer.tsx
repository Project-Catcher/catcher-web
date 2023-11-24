import { ReactNode } from "react";

interface MenuContentContainerProps {
  children?: ReactNode;
}

const MenuContentContainer = ({ children }: MenuContentContainerProps) => {
  return (
    <div className="w-full h-fit text-[12px] font-medium -tracking-[0.5px] bg-[#F5F7FA] px-[47px] py-[14px]">
      {children}
    </div>
  );
};

export default MenuContentContainer;
