import { useState } from "react";
import MenuContent from "./MenuContent";
import MenuContentContainer from "./MenuContentContainer";
import SideBarMenuBox from "./SideBarMenuBox";

const FinishWriting = () => {
  const boxTitle = "작성 마무리";
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
          <MenuContent title="공개범위 설정" boxTitle={boxTitle} />
          <MenuContent title="일정 소개" boxTitle={boxTitle} />
        </MenuContentContainer>
      )}
    </>
  );
};

export default FinishWriting;
