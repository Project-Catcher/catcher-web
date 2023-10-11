import {
  Container,
  ContentContainer,
  Img,
  Title,
  WhiteBox,
} from "@shared/components";
import { useRef, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState<
    {
      title: string;
      src: string;
    }[]
  >([
    { title: "FrontEnd", src: "/images/feskills.jpg" },
    { title: "Deployment", src: "/images/deploymentskills.jpg" },
    { title: "Version Control", src: "/images/versioncontrolskills.jpg" },
    { title: "Communication", src: "/images/communicationskills.jpeg" },
  ]);

  const draggingItemIndex = useRef<number | null>(null);
  const draggingOverItemIndex = useRef<number | null>(null);

  const onDragStart = (index: number) => {
    draggingItemIndex.current = index;
  };

  const onDragEnter = (index: number) => {
    draggingOverItemIndex.current = index;
  };

  const onDragEnd = () => {
    const copyListItems = [...skills];

    const dragItemContent = copyListItems[draggingItemIndex.current!];

    copyListItems.splice(draggingItemIndex.current!, 1);
    copyListItems.splice(draggingOverItemIndex.current!, 0, dragItemContent);

    draggingItemIndex.current = null;
    draggingOverItemIndex.current = null;

    setSkills(copyListItems);
  };

  return (
    <Container backgroundOption="bg-yellow-400 mt-20">
      <ContentContainer>
        <div className="subTitleUnderline">
          <Title type="subTitle" value="Skills" />
        </div>
        <div className="whiteboxContainer">
          {skills.map(({ title, src }, index) => (
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
