import {
  Container,
  ContentContainer,
  Img,
  Title,
  WhiteBox,
} from "@shared/components";
import { useMemo, useState } from "react";

const Projects = () => {
  const imageSrc = useMemo(
    () => ["/images/home.png", "/images/community.png", "/images/mypage.png"],
    [],
  );

  const [slide, setSlide] = useState<number>(1);
  const [style, setStyle] = useState({
    transform: `translate-x-[0%]`,
    transition: "transition-all ease-in-out",
  });

  console.log(slide, style.transform);

  const previousSlide = () => {
    if (slide <= 1) {
      setSlide(3);
      setStyle({
        transform: `translate-x-[-300%]`,
        transition: "transition-all ease-in-out",
      });
    } else {
      setSlide((prev) => prev - 1);
      setStyle({
        transform: `translate-x-[-${slide - 1}00%]`,
        transition: "transition-all ease-in-out",
      });
    }
  };

  const nextSlide = () => {
    if (slide >= 3) {
      setSlide(1);
      setStyle({
        transform: `translate-x-[-100%]`,
        transition: "transition-all ease-in-out",
      });
    } else {
      setSlide((prev) => prev + 1);
      setStyle({
        transform: `translate-x-[-${slide + 1}00%]`,
        transition: "transition-all ease-in-out",
      });
    }
  };

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
                className={`flex flex-row flex-nowrap ${style.transform} ${style.transition}`}
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
