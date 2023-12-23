import { category } from "@create-schedule/constants";
import { useState } from "react";
import { CategoryTags } from "@shared/types";
import Categories from "./Categories";
import CategoryItems from "./CategoryItems";
import MakeCustomItem from "./MakeCustomItem";

const DragnDropContainer = () => {
  const [clickedCategory, setClickedCategory] = useState<CategoryTags>("전체");
  // TODO: fetch category

  const handleClickCategory = (value: CategoryTags) => {
    setClickedCategory(value);
  };

  return (
    <>
      <div className="inline-block h-fit px-[50px]">
        <Categories
          clickedCategory={clickedCategory}
          handleClickCategory={handleClickCategory}
        />
        <CategoryItems category={category} clickedCategory={clickedCategory} />
        <MakeCustomItem />
      </div>
    </>
  );
};

export default DragnDropContainer;
