import { AnswerType, TodoList } from "@shared/types";
import { Modal, Select } from "@shared/components";
import { useTimeSelect, useUpdatedArray } from "@shared/hooks";

interface TimeModalProps {
  answers: AnswerType;
  todoArray: TodoList[];
  handleTodoArray: (updatedTodoArray: TodoList[]) => void;
  handleModal: (value: boolean) => void;
  handleTime: (time: AnswerType) => void;
}

const TimeModal = ({
  answers,
  todoArray,
  handleTodoArray,
  handleModal,
  handleTime,
}: TimeModalProps) => {
  const { timeSelection } = useTimeSelect();
  const { handleMidData } = useUpdatedArray(answers, todoArray);

  const confirmTime = () => {
    if ((answers.start as number) < (answers.end as number)) {
      handleTodoArray(handleMidData);
      handleModal(false);
    } else {
      alert("시작 시간은 종료 시간과 같거나 종료 시간보다 뒤일 수 없습니다.");
    }
  };

  return (
    <Modal handleModal={handleModal}>
      {[
        { label: "start", value: answers.start },
        { label: "end", value: answers.end },
      ].map(({ label, value }) => (
        <Select
          key={label}
          label={label}
          value={value as number}
          data={timeSelection}
          onChange={(value) => handleTime({ [label]: value as number })}
        />
      ))}
      <button onClick={() => handleModal(false)}>취소</button>
      <button onClick={confirmTime}>확인</button>
    </Modal>
  );
};

export default TimeModal;
