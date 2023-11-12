import { useSetRecoilState } from "recoil";
import { currentPageName } from "@shared/recoil";
import { CurrentPageType } from "@shared/types";

interface MenuContentProps {
  title: string;
  boxTitle: CurrentPageType;
  isClicked?: boolean;
}

const MenuContent = ({ title, boxTitle, isClicked }: MenuContentProps) => {
  const setCurrentPage = useSetRecoilState(currentPageName);

  return (
    <div
      className={`${
        isClicked ? "text-[#F864A1]" : "text-[#333333]"
      } h-1/2 leading-[23px] py-[6px] cursor-pointer`}
      onClick={() => setCurrentPage(boxTitle)}
    >
      {title}
    </div>
  );
};

export default MenuContent;
