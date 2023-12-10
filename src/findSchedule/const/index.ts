export const themeList = [
  { title: "전체", img: "/assets/findSchedule/all.svg" },
  { title: "영화", img: "/assets/findSchedule/ticket.svg" },
  { title: "축제", img: "/assets/findSchedule/festival.svg" },
  { title: "캠핑", img: "/assets/findSchedule/camping.svg" },
  { title: "관광", img: "/assets/findSchedule/airplane.svg" },
  { title: "쇼핑", img: "/assets/findSchedule/shopping.svg" },
  { title: "음식점", img: "/assets/findSchedule/plate.svg" },
  { title: "문화생활", img: "/assets/findSchedule/palette.svg" },
  { title: "등산", img: "/assets/findSchedule/mountain.svg" },
];

export interface RadioRange {
  label: string;
  value: string;
}

export const priceRanges: RadioRange[] = [
  { label: "0 ~ 10,000", value: "1" },
  { label: "10,001 ~ 50,000", value: "2" },
  { label: "50,001 ~ 100,000", value: "3" },
  { label: "100,000 이상", value: "4" },
  { label: "미정", value: "5" },
];

export const personnelRanges: RadioRange[] = [
  { label: "나홀로", value: "1" },
  { label: "2 ~ 4명", value: "2" },
  { label: "5 ~ 10명", value: "3" },
  { label: "최대 30명", value: "4" },
  { label: "미정", value: "5" },
];

export const keywordRanges: RadioRange[] = [
  { label: "전체", value: "1" },
  { label: "제목", value: "2" },
  { label: "작성자", value: "3" },
  { label: "내용", value: "4" },
  { label: "제목+내용", value: "5" },
  { label: "태그", value: "6" },
];
