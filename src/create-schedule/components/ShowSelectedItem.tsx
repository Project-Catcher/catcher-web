import { useRecoilValue } from "recoil";
import { selectedScheduleItem } from "@shared/recoil";
import CategoryFrame from "./CategoryFrame";

const ShowSelectedItem = () => {
  const selectedItem = useRecoilValue(selectedScheduleItem);

  return (
    <div className="flex items-center my-[23px]">
      <div className="min-w-[80px] text-[#333333]">선택 아이템</div>
      <div>{selectedItem && <CategoryFrame category={[selectedItem]} />}</div>
    </div>
  );
};

export default ShowSelectedItem;
