import { SCHEDULE_TITLE } from "@create-schedule/constants";
import CategoryFrame from "./CategoryFrame";
import { CategoryItem } from "./DragnDropContainer";
import ScheduleTitle from "./ScheduleTitle";

interface CategoryItemsProps {
  category: CategoryItem[];
  onDragStart: (index: number) => void;
}

const CategoryItems = ({ category, onDragStart }: CategoryItemsProps) => {
  return (
    <div className="mt-[36px] mb-[18px]">
      <ScheduleTitle title={SCHEDULE_TITLE.categoryItems} />
      <div className="w-[414px] border border-[#ADADAD] rounded-[5px] mb-[6px] focus-within:border focus-within:border-[#4285F4]">
        <input
          className="w-full h-[40px] rounded-[5px] pl-[21px] outline-0"
          type="text"
          placeholder="카테고리별 아이템 검색"
        />
      </div>
      <div className="w-[414px] h-fit bg-[#E7F9EE] rounded-[5px] px-[82px] py-[8px]">
        <CategoryFrame category={category} onDragStart={onDragStart} />
      </div>
    </div>
  );
};

export default CategoryItems;