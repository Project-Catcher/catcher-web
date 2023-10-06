import {
  Container,
  ContentContainer,
  Img,
  Title,
  WhiteBox,
} from "@shared/components";
import { useMemo } from "react";

const Skills = () => {
  const skills = useMemo(
    () => [
      { title: "FrontEnd", src: "/images/feskills.jpg" },
      { title: "Deployment", src: "/images/deploymentskills.jpg" },
      { title: "Version Control", src: "/images/versioncontrolskills.jpg" },
      { title: "Communication", src: "/images/communicationskills.jpeg" },
    ],
    [],
  );

  return (
    <Container backgroundOption="bg-yellow-400 mt-20">
      <ContentContainer>
        <div className="subTitleUnderline">
          <Title type="subTitle" value="Skills" />
        </div>
        <div className="whiteboxContainer">
          {skills.map(({ title, src }) => (
            <WhiteBox key={title}>
              <div className="border-b-2 mb-6">
                <div className="skillsTitle">{title}</div>
              </div>
              <Img src={src} style={{ maxHeight: "70rem" }} />
            </WhiteBox>
          ))}
        </div>
      </ContentContainer>
    </Container>
  );
};

export default Skills;
