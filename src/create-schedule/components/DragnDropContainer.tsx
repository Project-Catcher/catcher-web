import { DragEvent, useState } from "react";
import CategoryItems from "./CategoryItems";
import TimeTableContainer from "./TimeTableContainer";

export interface CategoryItem {
  category: string;
  title: string;
  city: string;
  tagBackground: string;
}

const DragnDropContainer = () => {
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

  const [selectedItem, setSelectedItem] = useState<CategoryItem | null>(null);

  const onDragStart = (index: number) => {
    setSelectedItem(category[index]);
    console.log("start");
  };

  const onDrop = (e: DragEvent<HTMLTableRowElement>, index: number) => {
    console.log("drop", index, selectedItem);
    e.preventDefault();
  };

  return (
    <>
      <TimeTableContainer onDrop={onDrop} />
      <div className="inline-block px-[50px]">
        <CategoryItems category={category} onDragStart={onDragStart} />
      </div>
    </>
  );
};

export default DragnDropContainer;
