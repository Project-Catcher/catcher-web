import { AnswerType, TodoList } from "@shared/types";
import { DragEvent } from "react";

interface TimeTableProps {
  todoArray: TodoList[];
  handleModal: () => void;
  handleTime: (time: AnswerType) => void;
}

const TimeTable = ({ todoArray, handleModal, handleTime }: TimeTableProps) => {
  const onDrop = (e: DragEvent<HTMLTableElement>) => {
    e.preventDefault();

    const tableRect = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY - tableRect.top;
    const _index = Math.floor(mouseY / 40);

    handleTime({ start: _index });
    handleTime({ end: _index + 1 });
    handleModal();
  };

  return (
    <table className="w-full mb-4" onDrop={onDrop}>
      <tbody>
        <tr>
          <th>
            {todoArray.map(({ background, value }: TodoList, index) => (
              <div
                key={index}
                className="flex w-full h-[2.5rem] justify-center items-center gap-4"
                onDragOver={(e) => e.preventDefault()}
              >
                <div className="inline-block w-[100px] px-4">
                  {`${index} ~ ${index + 1}`}
                </div>
                <div
                  className={`inline-block w-[150px] h-[2.5rem] border border-black border-solid leading-10 ${background}`}
                >
                  {value}
                </div>
              </div>
            ))}
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default TimeTable;
