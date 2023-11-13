import { SelectMainImage } from ".";

const SelectMainImageBox = () => {
  return (
    <div className="flex">
      <SelectMainImage />
      <div className="w-[398px] h-[126px] border border-[#E0E0E0] rounded-[5px] bg-[#E7F9EE] px-[16px] py-[14px]">
        <div className="text-[14px] text-[#00D179] font-bold -tracking-[0.01em] mb-[5px]">
          대표 이미지 등록 가이드
        </div>
        <div className="text-[12px] text-[#757575] font-medium -tracking-[0.01em] px-[8px]">
          <p>▷ 이미지 아이콘을 누르고 원하는 이미지를 선택해 주세요.</p>
          <p>▷ 사진을 선택하면 자동으로 이미지 사이즈가 조정됩니다.</p>
          <p>▷ 10MB 이하의 JPG, JPEG, PNG 파일</p>
          <p>▷ 해상도 1200x675 픽셀 이상</p>
        </div>
      </div>
    </div>
  );
};

export default SelectMainImageBox;
