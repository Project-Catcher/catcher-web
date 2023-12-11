import { BASE_TIMES, LOCATION_OBJECT } from "./const";

/**
 * @description loc1 배열을 반환
 */
export const getLoc1Arrays = () => {
  return Object.values(LOCATION_OBJECT).reduce<string[]>((prev, curr) => {
    if (!prev.includes(curr.loc1)) return [...prev, curr.loc1];
    return prev;
  }, []);
};

/**
 * @description loc1에 해당하는 loc2 배열을 반환
 */
export const getLoc2Arrays = (loc1: string) => {
  return Object.values(LOCATION_OBJECT).reduce<string[]>((prev, curr) => {
    if (curr.loc1 === loc1 && !prev.includes(curr.loc2))
      return [...prev, curr.loc2];
    return prev;
  }, []);
};

/**
 * @description loc1, loc2에 해당하는 locationCode를 반환
 */
export const getLocationCode = (loc1: string, loc2: string) => {
  if (loc1 === "" || loc2 === "") return "";
  const selectedLoc = Object.entries(LOCATION_OBJECT).find(
    ([_, value]) => value.loc1 === loc1 && value.loc2 === loc2,
  );
  return selectedLoc?.[0] ?? "";
};

/**
 * @description Date 데이터를 YYYYMMDD 형식으로 반환
 */
export const formatDate = (dateString?: string | number) => {
  const date = new Date(dateString ?? Date.now());
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
};

/**
 * @description 현재 시간에 맞는 base_date, base_time을 반환
 */
export const getCorrectBaseTime = () => {
  const today = new Date();
  const currentHour = today.getHours();
  const currentMinute = today.getMinutes();

  if (currentHour < 2 || (currentHour === 2 && currentMinute < 10))
    return {
      base_date: formatDate(today.setDate(today.getDate() - 1)),
      base_time: "2300",
    };

  for (let i = 1; i < BASE_TIMES.length; i++) {
    const baseTime = BASE_TIMES[i - 1];
    if (
      currentHour < i * 3 + 2 ||
      (currentHour === i * 3 + 2 && currentMinute < 10)
    ) {
      return {
        base_date: formatDate(),
        base_time: baseTime,
      };
    }
  }
};
