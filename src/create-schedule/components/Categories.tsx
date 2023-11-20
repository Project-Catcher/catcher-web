import { CATEGORY_TAGS } from "@create-schedule/constants";
import { CategoryTags } from "@shared/types";
import CategoryTagBox from "./CategoryTagBox";
import ScheduleTitle from "./ScheduleTitle";

interface CategoriesProps {
  clickedCategory: CategoryTags;
  handleClickCategory: (value: CategoryTags) => void;
}

const Categories = ({
  clickedCategory,
  handleClickCategory,
}: CategoriesProps) => {
  return (
    <>
      <ScheduleTitle title="카테고리" />
      <div className="flex flex-wrap w-[414px] gap-[6px]">
        {CATEGORY_TAGS.map(({ imageSrc, title }) => (
          <CategoryTagBox
            key={imageSrc + title}
            imageSrc={imageSrc}
            title={title}
            clickedCategory={clickedCategory}
            handleClickCategory={handleClickCategory}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
