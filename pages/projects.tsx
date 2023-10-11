import {
  Container,
  ContentContainer,
  Img,
  Title,
  WhiteBox,
} from "@shared/components";
import { useEffect, useMemo, useRef, useState } from "react";

const Projects = () => {
  const imageSrc = useMemo(
    () => ["/images/home.png", "/images/community.png", "/images/mypage.png"],
    [],
  );

  const [slide, setSlide] = useState<number>(1);

  const imageRef = useRef<HTMLDivElement>(null);

  const previousSlide = () => {
    slide <= 1 ? setSlide(3) : setSlide((prev) => prev - 1);
  };

  const nextSlide = () => {
    slide >= 3 ? setSlide(1) : setSlide((prev) => prev + 1);
  };

  useEffect(() => {
    if (imageRef.current !== null)
      imageRef.current.style.transform = `translateX(-${slide - 1}00%)`;
  }, [slide]);

  return (
    <Container backgroundOption="bg-amber-900 mt-20">
      <ContentContainer>
        <div className="subTitleUnderline">
          <Title type="subTitle" value="Projects" extraClass="text-white" />
        </div>
        <div className="whiteboxContainer">
          <WhiteBox extraClass="!w-full flex">
            <div className="overflow-hidden w-1/3 my-4 sm:w-1/2 md:w-1/2">
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
            </div>
          </WhiteBox>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default Projects;
