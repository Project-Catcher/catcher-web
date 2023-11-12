import { PlanSubTitle, PlanTitle } from "@shared/types";

export const TITLE: PlanTitle = {
  remains: "잠깐, 작성중이던 일정이 있어요",
  nthPlan: (nickname: string, number: number) =>
    `${nickname} 님의 ${number}번째 일정`,
  tag: "태그 및 일정 템플릿",
  fill: "일정 채우기",
  finish: "작성 마무리",
};

export const SUBTITLE: PlanSubTitle = {
  fighting: (nickname: string) => `${nickname}님만의 일정을 완성해보세요`,
  withyou: "일정이 성공할 수 있도록 캐쳐가 함께할게요.",
  fillyourplan: (nickname: string) => `${nickname} 님의 일정을 채워주세요!`,
};
