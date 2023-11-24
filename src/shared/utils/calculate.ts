export const calculateNightsAndDays = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const timeDiff = endDate.getTime() - startDate.getTime(); // 밀리초 단위로 변환
  const nights = timeDiff / (1000 * 60 * 60 * 24); // 날짜 차이 계산
  const days = nights + 1;
  if (nights === 0) return "(당일)";
  return `(${nights}박 ${days}일)`;
};

// TODO: 이전 브랜치에서 사용한 함수 가져옴, 추후 삭제할 것
export const stringToDate = (inputDate: string) => {
  const dateObject = new Date(inputDate);

  const formattedDate = `${String(dateObject.getFullYear()).slice(-2)}.${String(
    dateObject.getMonth() + 1,
  ).padStart(2, "0")}.${String(dateObject.getDate()).padStart(2, "0")}`;

  return formattedDate;
};
