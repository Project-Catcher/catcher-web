import { uniqueId } from "lodash";
import { atom } from "recoil";
import {
  AppliedItem,
  CategoryItem,
  CurrentPageType,
  ScheduleAnswerType,
  SelectedCategoryItem,
} from "@shared/types";

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
    startedAt: null,
    endedAt: null,
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

export const selectedScheduleItem = atom<SelectedCategoryItem | null>({
  key: `selectedScheduleItem/${uniqueId()}`,
  default: null,
});

export const appliedScheduleItem = atom<AppliedItem[] | null>({
  key: `appliedScheduleItem${uniqueId()}`,
  default: null,
});

export const customItem = atom<CategoryItem[] | null>({
  key: `customScheduleItem${uniqueId()}`,
  default: null,
});
