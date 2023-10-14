export interface TodoList {
  background: string;
  value: string;
}

export type TimeType = "start" | "end";

export interface Start2End {
  start: number;
  end: number;
}

export interface AnswerType {
  [key: string]: number | string | TodoList;
}
