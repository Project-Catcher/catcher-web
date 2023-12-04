import { BASIC_INFO_TAG } from "@create-schedule/constants";
import { useEffect, useState } from "react";
import MenuContent from "./MenuContent";
import MenuContentContainer from "./MenuContentContainer";
import SideBarMenuBox from "./SideBarMenuBox";

interface BasicInfoProps {
  currentProgress: number;
  currentTab: string;
  handleTab: (value: string) => void;
}

const BasicInfo = ({
  currentProgress,
  currentTab,
  handleTab,
}: BasicInfoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (currentProgress === 2) {
      setIsOpen(true);
    }
  }, [currentProgress]);

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
          {BASIC_INFO_TAG.map((title) => (
            <MenuContent
              key={title}
              title={title}
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
