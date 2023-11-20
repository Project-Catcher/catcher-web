import { useRecoilValue } from "recoil";
import { useModal } from "@shared/hook";
import { customItem } from "@shared/recoil";
import CategoryFrame from "./CategoryFrame";

const CustomItems = () => {
  const { openModal } = useModal();
  const customItems = useRecoilValue(customItem);

  const makeNewItem = () => {
    openModal({
      contentId: "customScheduleSelector",
      isHeaderCloseBtn: true,
    });
  };

  return (
    <>
      {customItems && <CategoryFrame category={customItems} hasPointer />}
      <button
        className="w-[281px] h-[33px] text-[#505960] border border-dashed border-[#D9D9D9] rounded-[8px]"
        onClick={makeNewItem}
      >
        +
      </button>
    </>
  );
};

export default CustomItems;
