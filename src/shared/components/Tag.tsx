import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { scheduleAnswers } from "@shared/recoil";

interface TagProps {
  tag: string[];
  tagStyle?: string;
  hasRemoveIcon?: boolean;
  handleClick?: (index: number) => void;
}

const Tag = ({
  tag,
  tagStyle = "text-[#333333] bg-[#FFA4A475]",
  hasRemoveIcon,
  handleClick,
}: TagProps) => {
  const setAnswer = useSetRecoilState(scheduleAnswers);

  const handleRemove = (index: number) => {
    const newTag = [...tag];
    newTag.splice(index, 1);
    setAnswer((prev) => ({ ...prev, tag: newTag }));
  };

  return (
    <>
      {tag.map((_tag, index) => (
        <div
          className={`${tagStyle} ${
            handleClick ? "cursor-pointer" : ""
          } inline-block relative w-fit h-[36px] text-[14px] leading-[36px] rounded-[9px] px-[12px] mr-[8px] mb-[8px]`}
          key={_tag + index}
          onClick={() => {
            if (handleClick) {
              handleClick(index);
            }
          }}
        >
          <p>{_tag}</p>
          {hasRemoveIcon && (
            <div
              className="absolute w-[16px] h-[16px] -top-[10px] -right-[4px] cursor-pointer"
              onClick={() => handleRemove(index)}
            >
              <Image
                src="/assets/signup/x-icon.svg"
                alt="x"
                width={16}
                height={16}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Tag;
