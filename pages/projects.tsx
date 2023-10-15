import { ProjectImage } from "@project/components";
import {
  Container,
  ContentContainer,
  ContentTitle,
  WhiteBox,
} from "@shared/components";
import { useMemo } from "react";

const Projects = () => {
  const imageSrc = useMemo(
    () => ["/images/home.png", "/images/community.png", "/images/mypage.png"],
    [],
  );

  return (
    <Container backgroundOption="bg-amber-900 mt-20">
      <ContentContainer>
        <ContentTitle value="Projects" extraClass="text-white" />
        <div className="whiteboxContainer">
          <WhiteBox extraClass="!w-full flex">
            <div className="overflow-hidden w-1/3 my-4 sm:w-1/2 md:w-1/2">
              <ProjectImage imageSrc={imageSrc} />
            </div>
          </WhiteBox>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default Projects;
