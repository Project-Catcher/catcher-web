import {
  Container,
  ContentContainer,
  Title,
  WhiteBox,
} from "@shared/components";
import {
  ChangeEvent,
  DragEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface TodoList {
  background: string;
  value: string;
}

const Schedule = () => {
  const [todoArray, setTodoArray] = useState<TodoList[]>([
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
    { background: "bg-white", value: "" },
  ]);
  const [selectedTodoItem, setSelectedTodoItem] = useState<TodoList | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<{
    start: number;
    end: number;
  }>({ start: 0, end: 0 });

  const todoList: TodoList[] = useMemo(
    () => [
      { background: "bg-yellow-400", value: "공부" },
      { background: "bg-green-400", value: "학교" },
      { background: "bg-gray-400", value: "잠" },
    ],
    [],
  );

  const modalRef = useRef<HTMLDivElement | null>(null);

  const timeSelection = Array.from({ length: 24 }, (_, index) => index);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleStartToEndTime = (
    e: ChangeEvent<HTMLSelectElement>,
    field: "start" | "end",
  ) => {
    const newValue = parseInt(e.target.value, 10);

    const updatedSelectedTime = { ...selectedTime };

    if (field === "start") {
      updatedSelectedTime.start = newValue;
    } else if (field === "end") {
      updatedSelectedTime.end = newValue;
    }

    setSelectedTime(updatedSelectedTime);
  };

  const confirmStartToEndTime = () => {
    if (selectedTime.start <= selectedTime.end && selectedTodoItem !== null) {
      const updatedTodoArray = [...todoArray];

      for (let i = selectedTime.start; i < selectedTime.end; i++) {
        updatedTodoArray[i] = {
          background: selectedTodoItem.background,
          value: selectedTodoItem.value,
        };
      }

      setTodoArray(updatedTodoArray);
      handleModal();
    }
  };

  const onDragStart = (index: number) => {
    setSelectedTodoItem(todoList[index]);
  };

  const onDrop = (e: DragEvent<HTMLTableElement>) => {
    e.preventDefault();

    const tableRect = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY - tableRect.top;
    const _index = Math.floor(mouseY / 48);
    setSelectedTime((prev) => ({
      ...prev,
      start: _index,
    }));
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
