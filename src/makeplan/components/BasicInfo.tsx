import { useState } from "react";
import MenuContent from "./MenuContent";
import MenuContentContainer from "./MenuContentContainer";
import SideBarMenuBox from "./SideBarMenuBox";

const BasicInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <SideBarMenuBox
        title="기본정보"
        isOpen={isOpen}
        isAccordion
        handleToggle={handleToggle}
      />
      {isOpen && (
        <MenuContentContainer>
          <MenuContent title="제목 및 썸네일" />
          <MenuContent title="일정 날짜 선택" />
          <MenuContent title="날짜 및 위치 입력" />
        </MenuContentContainer>
      )}
    </>
  );
};

export default BasicInfo;
