import { atom } from "recoil";
import { ScheduleAnswerType } from "@shared/types";

export const currentScheduleProgress = atom<number>({
  key: "currentProgress",
  default: 1,
});

export const scheduleAnswers = atom<ScheduleAnswerType>({
  key: "scheduleAnswers",
  default: {
    title: "",
    imageSrc: "",
    startedAt: "",
    endedAt: "",
    city: "",
    tag: [],
  },
});
