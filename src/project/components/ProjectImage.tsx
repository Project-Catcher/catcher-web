import { Img } from "@shared/components";
import { useSlide } from "@shared/hooks";
import { useEffect, useRef } from "react";

interface ProjectImageProps {
  imageSrc: string[];
}

const ProjectImage = ({ imageSrc }: ProjectImageProps) => {
  const { slide, handlePrev, handleNext } = useSlide(imageSrc);

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
        <button onClick={handlePrev}>이전</button>
        <div className="inline-block mx-4 my-4">{slide} / 3</div>
        <button onClick={handleNext}>다음</button>
      </div>
    </>
  );
};

export default ProjectImage;
