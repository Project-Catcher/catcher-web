import { useState } from "react";
import MenuContent from "./MenuContent";
import MenuContentContainer from "./MenuContentContainer";
import SideBarMenuBox from "./SideBarMenuBox";

interface BasicInfoProps {}

const BasicInfo = ({}: BasicInfoProps) => {
  const boxTitle = "기본정보";
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
          <MenuContent title="카테고리 태그 입력" boxTitle={boxTitle} />
          <MenuContent title="시작일 종료일 설정" boxTitle={boxTitle} />
          <MenuContent title="위치 선택" boxTitle={boxTitle} />
        </MenuContentContainer>
      )}
    </>
  );
};

export default BasicInfo;
