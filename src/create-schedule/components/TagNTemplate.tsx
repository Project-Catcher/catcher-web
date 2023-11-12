import { useState } from "react";
import MenuContent from "./MenuContent";
import MenuContentContainer from "./MenuContentContainer";
import SideBarMenuBox from "./SideBarMenuBox";

const TagNTemplate = () => {
  const boxTitle = "태그 및 일정 템플릿";
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <SideBarMenuBox
        title={boxTitle}
        isOpen={isOpen}
        isAccordion
        handleToggle={handleToggle}
      />
      {isOpen && (
        <MenuContentContainer>
          <MenuContent title="제목 및 썸네일" boxTitle={boxTitle} />
          <MenuContent title="템플릿 선택" boxTitle={boxTitle} />
        </MenuContentContainer>
      )}
    </>
  );
};

export default TagNTemplate;
