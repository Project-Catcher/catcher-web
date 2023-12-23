export const calculateNightsAndDays = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const timeDiff = endDate.getTime() - startDate.getTime(); // 밀리초 단위로 변환
  const nights = timeDiff / (1000 * 60 * 60 * 24); // 날짜 차이 계산
  const days = nights + 1;
  if (nights === 0) return "(당일)";
  return `(${nights}박 ${days}일)`;
};
