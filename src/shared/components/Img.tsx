import { HTMLAttributes } from "react";

interface ImgProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
}

const Img = ({ src, ...props }: ImgProps) => {
  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <img src={src} alt={src} {...props} />
    </picture>
  );
};

export default Img;
