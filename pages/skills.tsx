import {
  Container,
  ContentContainer,
  ContentTitle,
  Img,
  WhiteBox,
} from "@shared/components";
import { useDragnDropItem } from "@shared/hooks";
import { useMemo } from "react";

const Skills = () => {
  const initialSkills = useMemo(
    () => [
      { title: "FrontEnd", src: "/images/feskills.jpg" },
      { title: "Deployment", src: "/images/deploymentskills.jpg" },
      { title: "Version Control", src: "/images/versioncontrolskills.jpg" },
      { title: "Communication", src: "/images/communicationskills.jpeg" },
    ],
    [],
  );

  const {
    skills: updatedSkills,
    onDragStart,
    onDragEnter,
    onDragEnd,
  } = useDragnDropItem(initialSkills);

  return (
    <Container backgroundOption="bg-yellow-400 mt-20">
      <ContentContainer>
        <ContentTitle value="Skills" />
        <div className="whiteboxContainer">
          {updatedSkills.map(({ title, src }, index) => (
            <WhiteBox
              key={title}
              onDragStart={() => onDragStart(index)}
              onDragEnter={() => onDragEnter(index)}
              onDragEnd={onDragEnd}
              onDragOver={(e) => e.preventDefault()}
              draggable
            >
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
