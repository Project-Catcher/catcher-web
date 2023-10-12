import { TodoList } from "@shared/types";
import { ChangeEvent, MutableRefObject } from "react";

interface TimeModalProps {
  modalRef: MutableRefObject<HTMLDivElement | null>;
  selectedTime: {
    start: number;
    end: number;
  };
  selectedTodoItem: TodoList | null;
  todoArray: TodoList[];
  handleModal: () => void;
  handleTodoArray: (updatedTodoArray: TodoList[]) => void;
  handleSelectedTime: (field: "start" | "end", newValue: number) => void;
}

const TimeModal = ({
  modalRef,
  selectedTime,
  selectedTodoItem,
  todoArray,
  handleModal,
  handleTodoArray,
  handleSelectedTime,
}: TimeModalProps) => {
  const timeSelection = Array.from({ length: 25 }, (_, index) => index);

  const handleStartToEndTime = (
    e: ChangeEvent<HTMLSelectElement>,
    field: "start" | "end",
  ) => {
    const newValue = parseInt(e.target.value, 10);

    handleSelectedTime(field, newValue);
  };

  const confirmStartToEndTime = () => {
    if (selectedTime.start < selectedTime.end && selectedTodoItem !== null) {
      const updatedTodoArray = todoArray.map((todo, index) => ({
        ...todo,
        ...(index >= selectedTime.start && index < selectedTime.end
          ? {
              background: selectedTodoItem.background,
              value: selectedTodoItem.value,
            }
          : {}),
      }));

      handleTodoArray(updatedTodoArray);
      handleModal();
    } else {
      alert("시작 시간은 종료 시간과 같거나 종료 시간보다 뒤일 수 없습니다.");
    }
  };

  return (
    <div className="w-full h-full fixed flex left-0 top-0 bg-[rgba(0,0,0,0.4)] justify-center items-center z-100">
      <div
        ref={modalRef}
        className="w-[500px] h-[500px] flex flex-row gap-4 bg-white rounded-md justify-center items-center"
      >
        <div>
          <div>start</div>
          <select
            onChange={(e) => handleStartToEndTime(e, "start")}
            value={selectedTime.start}
          >
            {timeSelection.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div>end</div>
          <select
            onChange={(e) => handleStartToEndTime(e, "end")}
            value={selectedTime.end}
          >
            {timeSelection.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleModal}>취소</button>
        <button onClick={confirmStartToEndTime}>확인</button>
      </div>
    </div>
  );
};

export default TimeModal;
