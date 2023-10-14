import { Img } from "@shared/components";
import { useEffect, useRef, useState } from "react";

interface ProjectImageProps {
  imageSrc: string[];
}

const ProjectImage = ({ imageSrc }: ProjectImageProps) => {
  const [slide, setSlide] = useState<number>(1);

  const previousSlide = () => {
    slide <= 1 ? setSlide(3) : setSlide((prev) => prev - 1);
  };

  const nextSlide = () => {
    slide >= 3 ? setSlide(1) : setSlide((prev) => prev + 1);
  };

  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current !== null)
      imageRef.current.style.transform = `translateX(-${slide - 1}00%)`;
  }, [slide]);

  return (
    <>
      <div
        ref={imageRef}
        className={`flex flex-row flex-nowrap transition-all ease-in-out`}
      >
        {imageSrc.map((src) => (
          <Img key={src} src={src} minWidth="min-w-full" />
        ))}
      </div>
      <div className="text-center">
        <button onClick={previousSlide}>이전</button>
        <div className="inline-block mx-4 my-4">{slide} / 3</div>
        <button onClick={nextSlide}>다음</button>
      </div>
    </>
  );
};

export default ProjectImage;
