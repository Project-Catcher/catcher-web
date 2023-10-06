import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  backgroundOption?: string;
}

const Container = ({ children, backgroundOption }: ContainerProps) => {
  return <div className={`w-full h-auto ${backgroundOption}`}>{children}</div>;
};

export default Container;
