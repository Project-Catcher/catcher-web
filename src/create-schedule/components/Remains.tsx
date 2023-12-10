import { TemporarySchedule } from "@shared/types";
import RemainContent from "./RemainContent";

interface RemainsProps {
  temporary: TemporarySchedule[];
}

const Remains = ({ temporary }: RemainsProps) => {
  return (
    <div>
      <div className="text-[#333333] font-medium leading-[23px] mb-[15px]">
        작성중이던 일정이 있습니다
      </div>
      <RemainContent temporary={temporary} />
    </div>
  );
};

export default Remains;
