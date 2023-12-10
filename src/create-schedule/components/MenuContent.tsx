import { useSetRecoilState } from "recoil";
import { currentScheduleProgress } from "@shared/recoil";

interface MenuContentProps {
  title: string;
  targetProgress: number;
  currentTab: string;
  handleTab: (value: string) => void;
}

const MenuContent = ({
  title,
  targetProgress,
  currentTab,
  handleTab,
}: MenuContentProps) => {
  const setCurrentProgress = useSetRecoilState(currentScheduleProgress);

  return (
    <div
      className={`${
        currentTab === title ? "text-[#F864A1]" : "text-[#333333]"
      } h-1/2 leading-[23px] py-[6px] cursor-pointer`}
      onClick={() => {
        handleTab(title);
        setCurrentProgress(targetProgress);
      }}
    >
      <a href={`#${title}`}>{title}</a>
    </div>
  );
};

export default MenuContent;
