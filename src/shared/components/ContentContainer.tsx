import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
  layout?: string;
}

const ContentContainer = ({
  children,
  layout = "px-10 py-28",
}: ContentContainerProps) => {
  return (
    <div className={`max-w-[80%] h-fit mx-auto ${layout}`}>{children}</div>
  );
};

export default ContentContainer;
