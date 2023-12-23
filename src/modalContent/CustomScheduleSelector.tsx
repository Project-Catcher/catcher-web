import { ScheduleTitle } from "@create-schedule/components";
import { itemColor } from "@create-schedule/constants";
import Image from "next/image";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useModal } from "@shared/hook";
import { customItem } from "@shared/recoil";
import { CategoryItem } from "@shared/types";

const CustomScheduleSelector = () => {
  const { closeModal } = useModal();
  const [isError, setIsError] = useState(false);
  const [newItem, setNewItem] = useState<CategoryItem>({
    category: "기타",
    title: "",
    city: "",
    tagBackground: "",
  });
  const setCustomItems = useSetRecoilState(customItem);

  const handleInput = (key: keyof CategoryItem, value: string) => {
    setNewItem((prev) => ({ ...prev, [key]: value }));
  };

  const makeNewItem = () => {
    if (newItem.category && newItem.tagBackground && newItem.title) {
      setCustomItems((prev) => {
        if (prev) {
          const newArray = [...prev];
          newArray.push(newItem);

          return newArray;
        }

        return [newItem];
      });
      closeModal();
      return;
    }
    setIsError(true);
  };

  return (
    <div className="w-[362px]">
      <ScheduleTitle title="나만의 아이템 만들기" />
      <div className="text-[#333333] mb-[8px]">
        카테고리
        <span className="w-[11px] h-[22px] text-[#FF0000] text-xl font-light">
          *
        </span>
      </div>
      <div className="w-full h-[57px] border border-[#ADADAD] rounded-[9px] px-[16px] mb-[13px] focus-within:border-[#4285F4]">
        <select
          defaultValue="기타"
          className="w-full h-full text-[#333333] outline-0"
          onChange={({ target: { value } }) => handleInput("category", value)}
        >
          <option>기타</option>
          <option>영화</option>
          <option>축제</option>
          <option>캠핑</option>
          <option>관광</option>
          <option>쇼핑</option>
          <option>음식점</option>
          <option>문화생활</option>
          <option>등산</option>
        </select>
      </div>
      <div className="text-[#333333] mb-[8px]">
        아이템 색
        <span className="w-[11px] h-[22px] text-[#FF0000] text-xl font-light">
          *
        </span>
      </div>
      <div className="flex flex-wrap w-full gap-[5px] mb-[12px]">
        {itemColor.map((color, index) => (
          <span
            key={`${color}-${index}`}
            className={`${
              newItem.tagBackground === color ? "brightness-90 " : ""
            }${color} w-[23px] h-[23px] rounded-[50%] text-[0px] cursor-pointer`}
            onClick={() => handleInput("tagBackground", color)}
          >
            color
            {newItem.tagBackground === color && (
              <div className="text-center pt-[4px] brightness-0">
                <Image
                  src="/images/samples/checked.svg"
                  alt="checked"
                  width={15}
                  height={15}
                />
              </div>
            )}
          </span>
        ))}
      </div>
      <div className="inline-block">
        <div className="text-[#333333] mb-[8px]">
          아이템명
          <span className="w-[11px] h-[22px] text-[#FF0000] text-xl font-light">
            *
          </span>
        </div>
        <input
          className="w-[180px] h-[57px] border border-[#ADADAD] px-[16px] rounded-[9px] mb-[13px] mr-[2px]"
          type="text"
          placeholder="산책하기"
          onChange={({ target: { value } }) => handleInput("title", value)}
        />
      </div>
      <div className="inline-block">
        <div className="text-[#333333] mb-[8px]">위치(선택)</div>
        <input
          className="w-[180px] h-[57px] border border-[#ADADAD] px-[16px] rounded-[9px] mb-[13px]"
          type="text"
          placeholder="위치"
          onChange={({ target: { value } }) => handleInput("city", value)}
        />
      </div>
      <div className="text-[#333333] mb-[8px]">세부내용(선택)</div>
      <div className="w-full h-[78px] border border-[#ADADAD] rounded-[9px] px-[16px] py-[10px] focus-within:border-[#4285F4]">
        <textarea
          className="w-full resize-none outline-0"
          placeholder="집 근처 공원 산책"
        />
      </div>

      {isError ? (
        <div className="w-full h-[18px] text-center text-[12px] text-[#FF2330] leading-[18px] my-[6px]">
          필수 입력 정보를 모두 입력해주세요.(카테고리, 아이템 색, 아이템명)
        </div>
      ) : (
        <div className="w-full h-[18px] my-[6px]"></div>
      )}

      <div className="w-full text-center">
        <button
          className="w-[120px] h-[48px] text-[14px] text-[#B1B1B1] font-bold -tracking-[0.03em] bg-[#E9ECEF] rounded-[5px] mr-[10px]"
          onClick={closeModal}
        >
          취소
        </button>
        <button
          className="w-[120px] h-[48px] text-[14px] text-white font-bold -tracking-[0.03em] bg-[#F864A1] rounded-[5px]"
          onClick={makeNewItem}
        >
          아이템 등록
        </button>
      </div>
    </div>
  );
};

export default CustomScheduleSelector;
