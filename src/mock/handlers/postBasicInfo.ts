import { BasicInfoData } from "mock/data/basicInfo";
import { http } from "msw";
import { CREATE_SCHEDULE_PATH } from "@shared/constants";

const BASE_URL = "http://localhost:3000/api";

export const basicInfoHandlers = [
  http.post(`${BASE_URL}/${CREATE_SCHEDULE_PATH.temporary}`, ({ request }) => {
    if (request.body) return new Response(JSON.stringify(BasicInfoData));
  }),
];
