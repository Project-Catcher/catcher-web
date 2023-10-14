import { TodoList } from "@shared/types";
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
          >
            {value}
          </div>
        ))}
      </div>
      <div>
        <button className="float-right">할 일 추가</button>
      </div>
    </>
  );
};

export default TodoListContainer;
