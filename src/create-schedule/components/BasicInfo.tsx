import { useEffect, useState } from "react";
import MenuContent from "./MenuContent";
import MenuContentContainer from "./MenuContentContainer";
import SideBarMenuBox from "./SideBarMenuBox";

interface BasicInfoProps {
  current: number;
  currentTab: string;
  handleTab: (value: string) => void;
}

const BasicInfo = ({ current, currentTab, handleTab }: BasicInfoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (current === 2) {
      setIsOpen(true);
    }
  }, [current]);

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
          {[
            "일정 제목 입력",
            "대표 이미지 설정",
            "시작일 종료일 설정",
            "위치 선택",
          ].map((title) => (
            <MenuContent
              key={title}
              title={title}
              boxTitle="기본정보"
              targetProgress={2}
              currentTab={currentTab}
              handleTab={handleTab}
            />
          ))}
        </MenuContentContainer>
      )}
    </>
  );
};

export default BasicInfo;
