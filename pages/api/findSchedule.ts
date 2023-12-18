import { CardType } from "@findSchedule/components/Card";
import axios from "axios";

interface scheduleListParams {
  theme: string;
  dateStart: string;
  dateEnd: string;
  expense?: number;
  location: string;
  personnel?: number;
  keywordOption?: number;
  keyword?: string;
}

export const findSchedule = async (params?: scheduleListParams) => {
  try {
    const res = await axios.get<CardType[]>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/schedule/list`,
      {
        params,
      },
    );

    if (res.status === 200) {
      console.log("res.data", res.data);
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error; // 오류를 호출자에게 전달
  }
};
