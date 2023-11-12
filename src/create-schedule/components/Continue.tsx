import { useSetRecoilState } from "recoil";
import { currentProgress } from "@shared/recoil";
import BlockShowing from "./BlockShowing";

const Continue = () => {
  const setCurrentProgress = useSetRecoilState(currentProgress);

  return (
    <div className="w-fit px-[100px] py-[15px]">
      <button className="w-[207px] h-[44px] text-[14px] text-[#00D179] font-medium -tracking-[0.03em] border border-[#00D179] rounded-[5px] mr-[9px]">
        이어서 작성하기
      </button>
      <button
        className="w-[207px] h-[44px] text-[14px] text-[#666666] font-medium -tracking-[0.03em] border border-[#E0E0E0] rounded-[5px]"
        onClick={() => setCurrentProgress(2)}
      >
        새로 만들기
      </button>
      <div className="w-fit py-[22px] mx-auto">
        <BlockShowing />
      </div>
    </div>
  );
};

export default Continue;
