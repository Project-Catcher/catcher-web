import { atom } from "recoil";
import { CurrentPageType, ScheduleAnswerType } from "@shared/types";

export const currentPageName = atom<CurrentPageType>({
  key: "currentSchedulePage",
  default: "작성 중인 일정",
});

export const currentProgress = atom<number>({
  key: "currentScheduleProgress",
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
    items: [
      {
        tag: "",
        title: "",
        background: "",
        city: "",
      },
    ],
  },
});
