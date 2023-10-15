import { AnswerType, TodoList } from "@shared/types";
import { useState } from "react";

interface TodoListProps {
  onDragStart: (_todoList: TodoList[], index: number) => void;
}

const TodoListContainer = ({ onDragStart }: TodoListProps) => {
  const [todoList, setTodoList] = useState<TodoList[]>([
    { background: "bg-yellow-400", value: "공부" },
    { background: "bg-green-400", value: "학교" },
    { background: "bg-gray-400", value: "잠" },
  ]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [answers, setAnswers] = useState<AnswerType>({});

  const handleAnswer = (answer: AnswerType) => {
    setAnswers((prev) => ({ ...prev, ...answer }));
  };

  const addTodo = (item: AnswerType) => {
    if (item.background && item.value) {
      setTodoList(
        (prev) =>
          [
            ...prev,
            { background: item.background, value: item.value },
          ] as TodoList[],
      );
      setIsOpen(false);
      setAnswers({});
    } else {
      alert("모든 값을 입력해 주세요.");
    }
  };

  return (
    <>
      <div className="flex flex-row flex-wrap gap-2">
        {todoList.map(({ background, value }: TodoList, index: number) => (
          <div
            key={value}
            className={`inline-block w-[50px] h-[50px] my-4 text-center leading-[50px] ${background}`}
            onDragStart={() => onDragStart(todoList, index)}
            onDragOver={(e) => e.preventDefault()}
            draggable
            style={{ backgroundColor: background }} // 어떻게하징
          >
            {value}
          </div>
        ))}
      </div>
      <div className="text-right">
        <button onClick={() => setIsOpen(true)}>할 일 추가</button>
      </div>
      {isOpen && (
        <div>
          <input
            className="w-full h-[2.5rem] border border-2 border-gray-300 rounded-md pl-2 my-4"
            type="text"
            placeholder="할 일"
            onChange={({ target: { value } }) => handleAnswer({ value: value })}
          />
          <input
            className="w-full h-[2.5rem] border border-2 border-gray-300 rounded-md pl-2 mb-4"
            type="text"
            placeholder="배경색"
            onChange={({ target: { value } }) =>
              handleAnswer({ background: value })
            }
          />
          <div className="text-right">
            <button className="mr-4" onClick={() => setIsOpen(false)}>
              취소
            </button>
            <button onClick={() => addTodo(answers)}>완료</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoListContainer;
