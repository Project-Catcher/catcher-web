import { useState } from "react";

export const useTimeSelect = () => {
  const timeSelection = Array.from({ length: 25 }, (_, index) => index);

  return { timeSelection };
};

export const useTodo = () => {
  const [todoArray, setTodoArray] = useState(
    Array(24).fill({ background: "bg-white", value: "" }),
  );

  return { todoArray, setTodoArray };
};
