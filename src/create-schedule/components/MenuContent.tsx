import { useSetRecoilState } from "recoil";
import { currentPageName, currentProgress } from "@shared/recoil";
import { CurrentPageType } from "@shared/types";

interface MenuContentProps {
  title: string;
  boxTitle: CurrentPageType;
  targetProgress: number;
  currentTab: string;
  handleTab: (value: string) => void;
}

const MenuContent = ({
  title,
  boxTitle,
  targetProgress,
  currentTab,
  handleTab,
}: MenuContentProps) => {
  const setCurrentPage = useSetRecoilState(currentPageName);
  const setCurrentProgress = useSetRecoilState(currentProgress);

  return (
    <div
      className={`${
        currentTab === title ? "text-[#F864A1]" : "text-[#333333]"
      } h-1/2 leading-[23px] py-[6px] cursor-pointer`}
      onClick={() => {
        handleTab(title);
        setCurrentPage(boxTitle);
        setCurrentProgress(targetProgress);
      }}
    >
      <a href={`#${title}`}>{title}</a>
    </div>
  );
};

export default MenuContent;
