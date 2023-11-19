import { CategoryItem } from "@shared/types";
import CategoryItems from "./CategoryItems";
import TimeTableContainer from "./TimeTableContainer";

const DragnDropContainer = () => {
  // TODO: fetch category
  const category: CategoryItem[] = [
    {
      category: "문화생활",
      title: "마블 영화 감상",
      city: "연남동",
      tagBackground: "bg-[#A3FAF2]",
    },
    {
      category: "문화생활",
      title: "도서관 가서 신간 읽기",
      city: "연남동",
      tagBackground: "bg-[#FFE779]",
    },
    {
      category: "문화생활",
      title: "국립미술관 가서 전시 관람",
      city: "연남동",
      tagBackground: "bg-[#FFC395]",
    },
    {
      category: "문화생활",
      title: "독서모임 참가하기",
      city: "연남동",
      tagBackground: "bg-[#CFE1FF]",
    },
    {
      category: "문화생활",
      title: "예술의 전당에서 뮤지컬 관람",
      city: "연남동",
      tagBackground: "bg-[#DDD1FF]",
    },
    {
      category: "문화생활",
      title: "오일파스텔 그림그리기",
      city: "연남동",
      tagBackground: "bg-[#FFDCDC]",
    },
  ];

  return (
    <>
      <div className="inline-block px-[50px]">
        <CategoryItems category={category} />
      </div>
    </>
  );
};

export default DragnDropContainer;
