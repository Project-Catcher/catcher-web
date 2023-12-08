import axios from "axios";
import { CREATE_SCHEDULE_PATH } from "@shared/constants";
import { ScheduleAnswerType } from "@shared/types";

export const postBasicInfo = async (answer: ScheduleAnswerType) => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${CREATE_SCHEDULE_PATH.temporary}`,
    {
      title: answer.title,
      thumbnail: answer.thumbnail,
      location: answer.location,
      startAt: answer.startAt,
      endAt: answer.endAt,
    },
    { headers: { "Content-Type": "application/json" } },
  );
};
