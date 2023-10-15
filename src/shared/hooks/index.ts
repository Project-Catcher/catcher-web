import { AnswerType, TodoList } from "@shared/types";
import { useRef, useState } from "react";

export const useTimeSelect = () => {
  const timeSelection = Array.from({ length: 25 }, (_, index) => index);

  return { timeSelection };
};

export const useTodo = () => {
  const [todoArray, setTodoArray] = useState(
    Array(24).fill({ background: "bg-white", value: "" }),
  );

  const handleTodoArray = (updatedTodoArray: TodoList[]) => {
    setTodoArray(updatedTodoArray);
  };

  return { todoArray, handleTodoArray };
};

export const useUpdatedArray = (answers: AnswerType, initialArray: any[]) => {
  const handleMidData = initialArray.map((initialValue, index) => {
    if (index >= (answers.start as number) && index < (answers.end as number)) {
      return {
        ...initialValue,
        ...answers,
      };
    }
    return { ...initialValue };
  });

  return { handleMidData };
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = (value: boolean) => {
    setIsOpen(value);
  };

  return { isOpen, handleModal };
};

export const useDragnDropItem = (
  initialSkills: { title: string; src: string }[],
) => {
  const [skills, setSkills] = useState<
    {
      title: string;
      src: string;
    }[]
  >(initialSkills);

  const draggingItemIndex = useRef<number | null>(null);
  const draggingOverItemIndex = useRef<number | null>(null);

  const onDragStart = (index: number) => {
    draggingItemIndex.current = index;
  };

  const onDragEnter = (index: number) => {
    draggingOverItemIndex.current = index;
  };

  const onDragEnd = () => {
    const copyListItems = [...skills];

    const dragItemContent = copyListItems[draggingItemIndex.current!];

    copyListItems.splice(draggingItemIndex.current!, 1);
    copyListItems.splice(draggingOverItemIndex.current!, 0, dragItemContent);

    draggingItemIndex.current = null;
    draggingOverItemIndex.current = null;

    setSkills(copyListItems);
  };

  return { skills, onDragStart, onDragEnter, onDragEnd };
};

export const useSlide = (imageSrc: string[]) => {
  const [slide, setSlide] = useState<number>(1);

  const handlePrev = () => {
    slide <= 1 ? setSlide(imageSrc.length) : setSlide((prev) => prev - 1);
  };

  const handleNext = () => {
    slide >= imageSrc.length ? setSlide(1) : setSlide((prev) => prev + 1);
  };

  return { slide, handlePrev, handleNext };
};
