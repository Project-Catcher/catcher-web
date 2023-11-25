import { useSetRecoilState } from "recoil";
import { currentPageName, currentProgress } from "@shared/recoil";
import BlockShowing from "./BlockShowing";
import MakeScheduleButton from "./MakeScheduleButton";

const Continue = () => {
  const setCurrentPage = useSetRecoilState(currentPageName);
  const setCurrentProgress = useSetRecoilState(currentProgress);

  const handleCurrentPageElements = () => {
    setCurrentPage("기본정보");
    setCurrentProgress(2);
  };

  return (
    <div className="w-fit px-[100px] py-[15px]">
      <MakeScheduleButton
        value="이어서 작성하기"
        buttonStyle="text-[#00D179] border-[#00D179] mr-[9px]"
      />
      <MakeScheduleButton
        value="새로 만들기"
        buttonStyle="text-[#666666] border-[#E0E0E0]"
        onClick={handleCurrentPageElements}
      />
      <div className="w-fit py-[22px] mx-auto">
        <BlockShowing />
      </div>
    </div>
  );
};

export default Continue;
