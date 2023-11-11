import { useState } from "react";
import MenuContent from "./MenuContent";
import MenuContentContainer from "./MenuContentContainer";
import SideBarMenuBox from "./SideBarMenuBox";

const StartMakePlan = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <SideBarMenuBox
        title="일정 만들기 시작!"
        isOpen={isOpen}
        isAccordion
        handleToggle={handleToggle}
      />
      {isOpen && (
        <MenuContentContainer>
          <MenuContent title="카테고리 태그 입력" />
          <MenuContent title="템플릿 선택" />
        </MenuContentContainer>
      )}
    </>
  );
};

export default StartMakePlan;
