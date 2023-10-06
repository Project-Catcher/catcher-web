import { HTMLAttributes } from "react";

interface ImgProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  minWidth?: string;
}

const Img = ({ src, minWidth, ...props }: ImgProps) => {
  return (
    <picture className={minWidth}>
      <source srcSet={src} type="image/webp" />
      <img className="mx-auto" src={src} alt={src} {...props} />
    </picture>
  );
};

export default Img;
