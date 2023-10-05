import { Img, Title } from "@shared/components";
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
    <div className="w-full h-auto bg-yellow-400 mt-20">
      <div className="max-w-[80%] h-fit mx-auto px-10 py-28">
        <div className="subTitleUnderline">
          <Title type="subTitle" value="Skills" />
        </div>
        <div className="skillsContainer">
          {skills.map(({ title, src }) => (
            <div key={title} className="skillsBox my-4">
              <div className="border-b-2 mb-6">
                <div className="skillsTitle">{title}</div>
              </div>
              <Img src={src} style={{ maxHeight: "70rem" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
