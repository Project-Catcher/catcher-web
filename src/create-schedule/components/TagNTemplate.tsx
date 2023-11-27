import { useEffect, useState } from "react";
import MenuContent from "./MenuContent";
import MenuContentContainer from "./MenuContentContainer";
import SideBarMenuBox from "./SideBarMenuBox";

interface TagNTemplateProps {
  current: number;
  currentTab: string;
  handleTab: (value: string) => void;
}

const TagNTemplate = ({
  current,
  currentTab,
  handleTab,
}: TagNTemplateProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (current === 3) {
      setIsOpen(true);
    }
  }, [current]);

  return (
    <>
      <SideBarMenuBox
        title="태그 및 일정 템플릿"
        isOpen={isOpen}
        isAccordion
        handleToggle={handleToggle}
      />
      {isOpen && (
        <MenuContentContainer>
          {["제목 및 썸네일", "태그 및 일정 템플릿"].map((title) => (
            <MenuContent
              key={title}
              title={title}
              boxTitle="태그 및 일정 템플릿"
              targetProgress={3}
              currentTab={currentTab}
              handleTab={handleTab}
            />
          ))}
        </MenuContentContainer>
      )}
    </>
  );
};

export default TagNTemplate;
