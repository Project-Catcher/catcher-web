import { ScheduleTitle } from "@create-schedule/components";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useModal } from "@shared/hook";
import { customItem } from "@shared/recoil";
import { CategoryItem } from "@shared/types";

const CustomScheduleSelector = () => {
  const { closeModal } = useModal();
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
    setCustomItems((prev) => {
      if (prev) {
        const newArray = [...prev];
        newArray.push(newItem);

        return newArray;
      }

      return [newItem];
    });
    closeModal();
  };

  return (
    <>
      <ScheduleTitle title="나만의 아이템 만들기" />
      <div className="text-[#333333] mb-[8px]">
        카테고리
        <span className="w-[11px] h-[22px] text-[#FF0000] text-xl font-light">
          *
        </span>
      </div>
      <div className="w-[362px] h-[57px] border border-[#ADADAD] rounded-[9px] px-[16px] mb-[13px] focus-within:border-[#4285F4]">
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
      <div className="w-[362px] h-[78px] border border-[#ADADAD] rounded-[9px] px-[16px] py-[10px] mb-[17px] focus-within:border-[#4285F4]">
        <textarea
          className="w-full resize-none outline-0"
          placeholder="집 근처 공원 산책"
        />
      </div>
      <div className="w-[362px] text-center">
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
    </>
  );
};

export default CustomScheduleSelector;
