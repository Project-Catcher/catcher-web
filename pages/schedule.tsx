import { TimeModal, TimeTable, TodoListContainer } from "@schedule/components";
import {
  Container,
  ContentContainer,
  Title,
  WhiteBox,
} from "@shared/components";
import { useTodo } from "@shared/hooks";
import { AnswerType, TodoList } from "@shared/types";
import { useCallback, useState } from "react";

const Schedule = () => {
  const [answers, setAnswers] = useState<AnswerType>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { todoArray, setTodoArray } = useTodo();

  const handleAnswer = (answer: AnswerType) => {
    setAnswers((prev) => ({ ...prev, ...answer }));
  };

  const handleTodo = useCallback((todo: AnswerType) => {
    handleAnswer({ ...todo });
  }, []);

  const handleTime = useCallback((time: AnswerType) => {
    handleAnswer({ ...time });
  }, []);

  const handleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const handleTodoArray = useCallback((updatedTodoArray: TodoList[]) => {
    setTodoArray(updatedTodoArray);
  }, []);

  return (
    <>
      {isModalOpen && (
        <TimeModal
          answers={answers}
          todoArray={todoArray}
          handleModal={handleModal}
          handleTodoArray={handleTodoArray}
          handleTime={handleTime}
        />
      )}
      <Container backgroundOption="bg-purple-300 mt-20">
        <ContentContainer>
          <div className="subTitleUnderline">
            <Title type="subTitle" value="Schedule(Daily)" />
          </div>
          <div className="whiteboxContainer">
            <WhiteBox extraClass="hover:translate-y-0">
              <div className="text-center text-2xl font-bold mb-8">
                Time Table
              </div>
              <TimeTable
                todoArray={todoArray}
                handleModal={handleModal}
                handleTime={handleTime}
              />
            </WhiteBox>
            <WhiteBox extraClass="hover:translate-y-0">
              <div className="text-center text-2xl font-bold mb-4">Todo</div>
              <TodoListContainer
                onDragStart={(_todoList, index) =>
                  handleTodo({
                    background: _todoList[index].background,
                    value: _todoList[index].value,
                  })
                }
              />
            </WhiteBox>
          </div>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Schedule;
