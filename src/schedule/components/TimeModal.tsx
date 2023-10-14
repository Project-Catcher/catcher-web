import { AnswerType, TodoList } from "@shared/types";
import { Modal, Select } from "@shared/components";
import { useTimeSelect } from "@shared/hooks";

interface TimeModalProps {
  answers: AnswerType;
  todoArray: TodoList[];
  handleModal: () => void;
  handleTodoArray: (updatedTodoArray: TodoList[]) => void;
  handleTime: (time: AnswerType) => void;
}

const TimeModal = ({
  answers,
  todoArray,
  handleModal,
  handleTodoArray,
  handleTime,
}: TimeModalProps) => {
  const { timeSelection } = useTimeSelect();

  const confirmStart2EndTime = () => {
    if ((answers.start as number) < (answers.end as number)) {
      const updatedTodoArray = todoArray.map((todo, index) => ({
        ...todo,
        ...(index >= (answers.start as number) &&
        index < (answers.end as number)
          ? {
              background: answers.background,
              value: answers.value,
            }
          : {}),
      }));

      handleTodoArray(updatedTodoArray as TodoList[]);
      handleModal();
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
      <button onClick={handleModal}>취소</button>
      <button onClick={confirmStart2EndTime}>확인</button>
    </Modal>
  );
};

export default TimeModal;
