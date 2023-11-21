import { SCHEDULE_TITLE } from "@create-schedule/constants";
import { CategoryItem, CategoryTags } from "@shared/types";
import CategoryFrame from "./CategoryFrame";
import ScheduleTitle from "./ScheduleTitle";

interface CategoryItemsProps {
  category: CategoryItem[];
  clickedCategory: CategoryTags;
}

const CategoryItems = ({ category, clickedCategory }: CategoryItemsProps) => {
  return (
    <div className="my-[36px]">
      <ScheduleTitle title={SCHEDULE_TITLE.categoryItems} />
      <div className="w-[414px] border border-[#ADADAD] rounded-[5px] mb-[6px] focus-within:border focus-within:border-[#4285F4]">
        <input
          className="w-full h-[40px] rounded-[5px] pl-[21px] outline-0"
          type="text"
          placeholder="카테고리별 아이템 검색"
        />
      </div>
      <div className="w-[414px] h-[181px] bg-[#E7F9EE] rounded-[5px] px-[78px] py-[8px] overflow-FAQ">
        <CategoryFrame
          clickedCategory={clickedCategory}
          category={category}
          hasPointer
        />
      </div>
    </div>
  );
};

export default CategoryItems;
