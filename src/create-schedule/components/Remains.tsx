import Continue from "./Continue";
import RemainContent from "./RemainContent";

const Remains = () => {
  return (
    <div>
      <div className="text-[#333333] font-medium leading-[23px] mb-[15px]">
        작성중이던 일정이 있습니다
      </div>
      <div className="flex flex-nowrap gap-[24px] w-full">
        <RemainContent />
      </div>
      <Continue />
    </div>
  );
};

export default Remains;
