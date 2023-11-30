import { ScheduleCardSection } from "@shared/types";
import RemainContent from "./RemainContent";

interface RemainsProps {
  remains: ScheduleCardSection[];
}

const Remains = ({ remains }: RemainsProps) => {
  return (
    <div>
      <div className="text-[#333333] font-medium leading-[23px] mb-[15px]">
        작성중이던 일정이 있습니다
      </div>
      <RemainContent remains={remains} />
    </div>
  );
};

export default Remains;
