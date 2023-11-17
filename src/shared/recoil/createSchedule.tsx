import { CategoryItem } from "@create-schedule/components/DragnDropContainer";
import { uniqueId } from "lodash";
import { atom } from "recoil";
import { CurrentPageType, ScheduleAnswerType } from "@shared/types";

export const currentPageName = atom<CurrentPageType>({
  key: `currentSchedulePage/${uniqueId()}`,
  default: "작성 중인 일정",
});

export const currentProgress = atom<number>({
  key: `currentProgress/${uniqueId()}`,
  default: 1,
});

export const scheduleAnswers = atom<ScheduleAnswerType>({
  key: `scheduleAnswers/${uniqueId()}`,
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

export const selectedScheduleItem = atom<CategoryItem | null>({
  key: `selectedScheduleItem/${uniqueId()}`,
  default: {
    category: "",
    title: "",
    tagBackground: "",
    city: "",
    startTime: "",
    endTime: "",
  },
});

export const appliedScheduleItem = atom<CategoryItem[] | null>({
  key: `appliedScheduleItem${uniqueId()}`,
  default: null,
});
