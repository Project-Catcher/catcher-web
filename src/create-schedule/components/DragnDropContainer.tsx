import { useState } from "react";
import { CategoryItem, CategoryTags } from "@shared/types";
import Categories from "./Categories";
import CategoryItems from "./CategoryItems";
import MakeCustomItem from "./MakeCustomItem";

const DragnDropContainer = () => {
  const [clickedCategory, setClickedCategory] = useState<CategoryTags>("전체");
  // TODO: fetch category
  const category: CategoryItem[] = [
    {
      category: "쇼핑",
      title: "용산 아이파크몰",
      city: "용산",
      tagBackground: "bg-[#A3FAF2]",
      imageSrc: "/images/samples/category_shopping.svg",
    },
    {
      category: "쇼핑",
      title: "용산 아이파크몰",
      city: "용산",
      tagBackground: "bg-[#FFE779]",
      imageSrc: "/images/samples/category_shopping.svg",
    },
    {
      category: "쇼핑",
      title: "용산 아이파크몰",
      city: "용산",
      tagBackground: "bg-[#FFC395]",
      imageSrc: "/images/samples/category_shopping.svg",
    },
    {
      category: "쇼핑",
      title: "용산 아이파크몰",
      city: "용산",
      tagBackground: "bg-[#CFE1FF]",
      imageSrc: "/images/samples/category_shopping.svg",
    },
    {
      category: "문화생활",
      title: "마블 영화 감상",
      city: "연남동",
      tagBackground: "bg-[#A3FAF2]",
      imageSrc: "/images/samples/category_culture.svg",
    },
    {
      category: "문화생활",
      title: "도서관 가서 신간 읽기",
      city: "연남동",
      tagBackground: "bg-[#FFE779]",
      imageSrc: "/images/samples/category_culture.svg",
    },
    {
      category: "문화생활",
      title: "국립미술관 가서 전시 관람",
      city: "연남동",
      tagBackground: "bg-[#FFC395]",
      imageSrc: "/images/samples/category_culture.svg",
    },
    {
      category: "문화생활",
      title: "독서모임 참가하기",
      city: "연남동",
      tagBackground: "bg-[#CFE1FF]",
      imageSrc: "/images/samples/category_culture.svg",
    },
    {
      category: "문화생활",
      title: "예술의 전당에서 뮤지컬 관람",
      city: "연남동",
      tagBackground: "bg-[#DDD1FF]",
      imageSrc: "/images/samples/category_culture.svg",
    },
    {
      category: "문화생활",
      title: "오일파스텔 그림그리기",
      city: "연남동",
      tagBackground: "bg-[#FFDCDC]",
      imageSrc: "/images/samples/category_culture.svg",
    },
  ];

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
