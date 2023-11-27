import { useEffect, useState } from "react";
import MenuContent from "./MenuContent";
import MenuContentContainer from "./MenuContentContainer";
import SideBarMenuBox from "./SideBarMenuBox";

interface FinishWritingProps {
  current: number;
  currentTab: string;
  handleTab: (value: string) => void;
}

const FinishWriting = ({
  current,
  currentTab,
  handleTab,
}: FinishWritingProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (current === 5) {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      <SideBarMenuBox
        title="작성 마무리"
        isOpen={isOpen}
        isAccordion
        handleToggle={handleToggle}
      />
      {isOpen && (
        <MenuContentContainer>
          {["공개범위 설정", "일정 소개"].map((title) => (
            <MenuContent
              key={title}
              title={title}
              boxTitle="작성 마무리"
              targetProgress={5}
              currentTab={currentTab}
              handleTab={handleTab}
            />
          ))}
        </MenuContentContainer>
      )}
    </>
  );
};

export default FinishWriting;
