import {
  CategoryItem,
  CategoryTags,
  PlanSubTitle,
  PlanTitle,
} from "@shared/types";

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

export const CATEGORY_TAGS: { imageSrc: string; title: CategoryTags }[] = [
  { imageSrc: "/images/samples/category_all.svg", title: "전체" },
  { imageSrc: "/images/samples/category_movie.svg", title: "영화" },
  { imageSrc: "/images/samples/category_festival.svg", title: "축제" },
  { imageSrc: "/images/samples/category_camping.svg", title: "캠핑" },
  { imageSrc: "/images/samples/category_tour.svg", title: "관광" },
  { imageSrc: "/images/samples/category_shopping.svg", title: "쇼핑" },
  { imageSrc: "/images/samples/category_food.svg", title: "음식점" },
  { imageSrc: "/images/samples/category_culture.svg", title: "문화생활" },
  { imageSrc: "/images/samples/category_hiking.svg", title: "등산" },
  { imageSrc: "/images/samples/category_etc.svg", title: "기타" },
];

export const category: CategoryItem[] = [
  {
    category: "쇼핑",
    title: "용산 아이파크몰",
    city: "용산",
    tagBackground: "bg-[#A3FAF2]",
  },
  {
    category: "쇼핑",
    title: "용산 아이파크몰",
    city: "용산",
    tagBackground: "bg-[#FFE779]",
  },
  {
    category: "쇼핑",
    title: "용산 아이파크몰",
    city: "용산",
    tagBackground: "bg-[#FFC395]",
  },
  {
    category: "쇼핑",
    title: "용산 아이파크몰",
    city: "용산",
    tagBackground: "bg-[#CFE1FF]",
  },
  {
    category: "문화생활",
    title: "마블 영화 감상",
    city: "연남동",
    tagBackground: "bg-[#A3FAF2]",
  },
  {
    category: "문화생활",
    title: "도서관 가서 신간 읽기",
    city: "연남동",
    tagBackground: "bg-[#FFE779]",
  },
  {
    category: "문화생활",
    title: "국립미술관 가서 전시 관람",
    city: "연남동",
    tagBackground: "bg-[#FFC395]",
  },
  {
    category: "문화생활",
    title: "독서모임 참가하기",
    city: "연남동",
    tagBackground: "bg-[#CFE1FF]",
  },
  {
    category: "문화생활",
    title: "예술의 전당에서 뮤지컬 관람",
    city: "연남동",
    tagBackground: "bg-[#DDD1FF]",
  },
  {
    category: "문화생활",
    title: "오일파스텔 그림그리기",
    city: "연남동",
    tagBackground: "bg-[#FFDCDC]",
  },
];

export const templateContent = [
  {
    id: 1,
    imageSrc: "image",
    title: "베이커리 빵지순례",
    position: "서울시 연남동",
    requiredTime: "1일 이내",
  },
  {
    id: 2,
    imageSrc: "image",
    title: "카페에서 함께 공부해요",
    position: "서울시 연남동",
    requiredTime: "2~3일 일정",
  },
  {
    id: 3,
    imageSrc: "image",
    title: "베이커리 빵지순례",
    position: "가로수길",
    requiredTime: "1일 이내",
  },
  {
    id: 4,
    imageSrc: "image",
    title: "호캉스 일정",
    position: "남해",
    requiredTime: "2~3일 일정",
  },
];

export const itemColor = [
  "bg-[#A3FAF2]",
  "bg-[#FFE779]",
  "bg-[#FFC395]",
  "bg-[#CFE1FF]",
  "bg-[#DDD1FF]",
  "bg-[#FFDCDC]",
  "bg-[#9BF2CE]",
  "bg-[#FFB8B4]",
  "bg-[#95CCFF]",
  "bg-[#EEB785]",
  "bg-[#FFD1EA]",
  "bg-[#D8D8D8]",
  "bg-[#D8B9F8]",
  "bg-[#FF9292]",
  "bg-[#A1A1A1]",
];

export const TITLE_MAX_LENGTH = 40;
