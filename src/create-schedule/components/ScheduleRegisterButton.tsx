import {
  checkDuplication,
  handleTimeFormat,
  sortByStartTime,
} from "@create-schedule/util";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useModal } from "@shared/hook";
import { appliedScheduleItem, selectedScheduleItem } from "@shared/recoil";
import { SelectedCategoryItem, Start2EndTime } from "@shared/types";
import ShowDuration from "./ShowDuration";

interface ScheduleRegisterButtonProps {
  time: Start2EndTime;
  selectedItem: SelectedCategoryItem | null;
}

const ScheduleRegisterButton = ({
  time,
  selectedItem,
}: ScheduleRegisterButtonProps) => {
  const { closeModal } = useModal();
  const setSelectedItem = useSetRecoilState(selectedScheduleItem);
  const [appliedItem, setAppliedItem] = useRecoilState(appliedScheduleItem);

  const handleDone = () => {
    const { startHour, startMin, endHour, endMin } = handleTimeFormat(time);
    // 시작 시간이 종료 시간보다 늦는 경우, 중복된 시간이 있는 경우 버튼 클릭 이벤트 x
    if (startHour * 60 + startMin >= endHour * 60 + endMin) return;
    if (
      checkDuplication(startHour, startMin, endHour, endMin, appliedItem).some(
        (boolean) => boolean === true,
      )
    )
      return;

    setAppliedItem((prev) => {
      if (prev && selectedItem) {
        const newArray = [...prev];
        newArray.push({
          ...selectedItem,
          startTime: { hour: startHour, minute: startMin },
          endTime: { hour: endHour, minute: endMin },
        });
        sortByStartTime(newArray);

        return newArray;
      } else if (!prev && selectedItem) {
        return [
          {
            ...selectedItem,
            startTime: { hour: startHour, minute: startMin },
            endTime: { hour: endHour, minute: endMin },
          },
        ];
      }

      return null;
    });
    setSelectedItem(null);
    closeModal();
  };

  return (
    <>
      <button
        className="w-[120px] h-[48px] text-[14px] text-[#B1B1B1] font-bold -tracking-[0.03em] bg-[#E9ECEF] rounded-[5px]"
        onClick={closeModal}
      >
        취소
      </button>
      <button
        className="w-[120px] h-[48px] text-white -tracking-[0.03em] bg-[#F864A1] rounded-[5px]"
        onClick={() => handleDone()}
      >
        <div className="text-[14px] font-bold">일정등록</div>
        <ShowDuration time={time} />
      </button>
    </>
  );
};

export default ScheduleRegisterButton;
