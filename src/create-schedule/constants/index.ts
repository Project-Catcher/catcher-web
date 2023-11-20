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

export const SCHEDULE_TITLE = {
  planTitle: "일정 제목",
  mainImage: "대표 이미지",
  date: "일정 시작일 ~ 종료일",
  city: "장소 선택",
  tag: "카테고리 태그(#)",
  tagRecommend: "이런 태그는 어떤가요?",
  templateRecommend: (nickname: string) =>
    `${nickname} 님을 위한 추천 일정 템플릿이 있어요!`,
  categoryItems: "카테고리별 아이템",
};

export const SCHEDULE_SUBTITLE = {
  mainImage:
    "Chather 캐쳐 메인, 검색 결과, SNS 광고 등 여러 곳에서 노출할 대표 이미지를 등록해 주세요.",
  date: "준비기간 및 모집기간 등 전체 일정을 고려해 설정해 주세요.",
  city: "일정을 수행할 위치를 선택해주세요.",
};

export const PIXEL = {
  itemHeight: 21,
  cellHeight: 35,
  padding: 6,
  gap: 1,
};

export const TIME = {
  hour: 60,
};

export const CATEGORY_TAGS = [
  { imageSrc: "/images/samples/category_all.svg", title: "전체" },
  { imageSrc: "/images/samples/category_movie.svg", title: "영화" },
  { imageSrc: "/images/samples/category_festival.svg", title: "축제" },
  { imageSrc: "/images/samples/category_camping.svg", title: "캠핑" },
  { imageSrc: "/images/samples/category_tour.svg", title: "관광" },
  { imageSrc: "/images/samples/category_shopping.svg", title: "쇼핑" },
  { imageSrc: "/images/samples/category_food.svg", title: "음식점" },
  { imageSrc: "/images/samples/category_culture.svg", title: "문화생활" },
  { imageSrc: "/images/samples/category_hiking.svg", title: "등산" },
];
