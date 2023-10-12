import { TimeModal } from "@schedule/components";
import {
  Container,
  ContentContainer,
  Title,
  WhiteBox,
} from "@shared/components";
import { TodoList } from "@shared/types";
import {
  DragEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const Schedule = () => {
  const [todoArray, setTodoArray] = useState<TodoList[]>(
    Array(24).fill({ background: "bg-white", value: "" }),
  );
  const [selectedTodoItem, setSelectedTodoItem] = useState<TodoList | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<{
    start: number;
    end: number;
  }>({ start: 0, end: 0 });

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const handleTodoArray = useCallback((updatedTodoArray: TodoList[]) => {
    setTodoArray(updatedTodoArray);
  }, []);

  const handleSelectedTime = useCallback(
    (field: "start" | "end", newValue: number) => {
      setSelectedTime((prev) => ({
        ...prev,
        [field]: newValue,
      }));
    },
    [],
  );

  const todoList: TodoList[] = useMemo(
    () => [
      { background: "bg-yellow-400", value: "공부" },
      { background: "bg-green-400", value: "학교" },
      { background: "bg-gray-400", value: "잠" },
    ],
    [],
  );

  const onDragStart = (index: number) => {
    setSelectedTodoItem(todoList[index]);
  };

  const onDrop = (e: DragEvent<HTMLTableElement>) => {
    e.preventDefault();

    const tableRect = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY - tableRect.top;
    const _index = Math.floor(mouseY / 48);

    setSelectedTime({ start: _index, end: _index + 1 });
    handleModal();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {isModalOpen && (
        <TimeModal
          modalRef={modalRef}
          selectedTime={selectedTime}
          selectedTodoItem={selectedTodoItem}
          todoArray={todoArray}
          handleModal={handleModal}
          handleTodoArray={handleTodoArray}
          handleSelectedTime={handleSelectedTime}
        />
      )}
      <Container backgroundOption="bg-purple-300 mt-20">
        <ContentContainer>
          <div className="subTitleUnderline">
            <Title type="subTitle" value="Schedule(Daily)" />
          </div>
          <div className="whiteboxContainer">
            <WhiteBox extraClass="hover:translate-y-0">
              <div className="text-center text-2xl font-bold">Time Table</div>
              <table className="w-4/5" onDrop={onDrop}>
                <tbody>
                  <tr>
                    <th>
                      {todoArray.map(
                        ({ background, value }: TodoList, index) => (
                          <div
                            key={index}
                            className="my-2"
                            onDragOver={(e) => e.preventDefault()}
                          >
                            <div className="inline-block px-4">
                              {`${index} ~ ${index + 1}`}
                            </div>
                            <div
                              className={`inline-block w-[100px] min-h-[2rem] border border-black border-solid ${background}`}
                            >
                              {value}
                            </div>
                          </div>
                        ),
                      )}
                    </th>
                  </tr>
                </tbody>
              </table>
            </WhiteBox>
            <WhiteBox extraClass="hover:translate-y-0">
              <div className="text-center text-2xl font-bold">Todo</div>
              <div className="flex flex-row gap-2">
                {todoList.map(
                  ({ background, value }: TodoList, index: number) => (
                    <div
                      key={value}
                      className={`inline-block w-[50px] h-[50px] text-center ${background}`}
                      onDragStart={() => onDragStart(index)}
                      onDragOver={(e) => e.preventDefault()}
                      draggable
                    >
                      {value}
                    </div>
                  ),
                )}
              </div>
            </WhiteBox>
          </div>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Schedule;
