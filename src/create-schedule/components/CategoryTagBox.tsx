import Image from "next/image";
import { CategoryTags } from "@shared/types";

interface CategoryTagBoxProps {
  imageSrc: string;
  title: string;
  clickedCategory: CategoryTags;
  handleClickCategory: (value: CategoryTags) => void;
}

const CategoryTagBox = ({
  imageSrc,
  title,
  clickedCategory,
  handleClickCategory,
}: CategoryTagBoxProps) => {
  return (
    <div
      className="inline-block cursor-pointer"
      onClick={() => handleClickCategory(title as CategoryTags)}
    >
      <div
        className={`${
          clickedCategory === title
            ? "bg-[#F864A1] text-white "
            : "bg-[#F2F4F6] text-[#61676D] "
        }flex items-center w-fit h-[36px] rounded-[18px] px-[12px] gap-[8px]`}
      >
        <Image
          draggable={false}
          src={imageSrc}
          alt={imageSrc}
          width={18}
          height={18}
        />
        <span className="text-[12px] font-medium">{title}</span>
      </div>
    </div>
  );
};

export default CategoryTagBox;
