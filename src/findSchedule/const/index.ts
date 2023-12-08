export const themeList = [
  { title: "전체", img: "/assets/findSchedule/all.svg" },
  { title: "영화", img: "/assets/findSchedule/ticket.svg" },
  { title: "축제", img: "/assets/findSchedule/party.svg" },
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
  { label: "0 ~ 10,000", value: "0-10000" },
  { label: "10,001 ~ 50,000", value: "10001-50000" },
  { label: "50,001 ~ 100,000", value: "50001-100000" },
  { label: "100,000 이상", value: "100000+" },
  { label: "미정", value: "undefined" },
];

export const PersonnelRanges: RadioRange[] = [
  { label: "나홀로", value: "나홀로" },
  { label: "2 ~ 4명", value: "2 ~ 4명" },
  { label: "5 ~ 10명", value: "5 ~ 10명" },
  { label: "최대 30명", value: "최대 30명" },
  { label: "미정", value: "undefined" },
];
