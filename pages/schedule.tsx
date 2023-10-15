import { TimeModal, TimeTable, TodoListContainer } from "@schedule/components";
import {
  Container,
  ContentContainer,
  ContentTitle,
  WhiteBox,
  WhiteBoxContainer,
} from "@shared/components";
import { useModal, useTodo } from "@shared/hooks";
import { AnswerType } from "@shared/types";
import { useCallback, useState } from "react";

const Schedule = () => {
  const [answers, setAnswers] = useState<AnswerType>({});
  const { todoArray, handleTodoArray } = useTodo();
  const { isOpen, handleModal } = useModal();

  const handleAnswer = (answer: AnswerType) => {
    setAnswers((prev) => ({ ...prev, ...answer }));
  };

  const handleTodo = useCallback((todo: AnswerType) => {
    handleAnswer({ ...todo });
  }, []);

  const handleTime = useCallback((time: AnswerType) => {
    handleAnswer({ ...time });
  }, []);

  return (
    <>
      <Container backgroundOption="bg-purple-300 mt-20">
        <ContentContainer>
          <ContentTitle value="Schedule(Daily)" />
          <WhiteBoxContainer>
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
            {isOpen && (
              <TimeModal
                answers={answers}
                todoArray={todoArray}
                handleTodoArray={handleTodoArray}
                handleModal={handleModal}
                handleTime={handleTime}
              />
            )}
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
          </WhiteBoxContainer>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Schedule;
