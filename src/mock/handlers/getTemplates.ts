import { templateContent } from "mock/data/template";
import { temporaryContent } from "mock/data/temporary";
import { http } from "msw";
import { CREATE_SCHEDULE_PATH } from "@shared/constants";

const BASE_URL = "http://localhost:3000/api";

export const templateHandlers = [
  http.get(`${BASE_URL}/${CREATE_SCHEDULE_PATH.temporary}`, () => {
    return new Response(JSON.stringify(temporaryContent));
  }),
  http.get(`${BASE_URL}/${CREATE_SCHEDULE_PATH.templates}`, () => {
    return new Response(JSON.stringify(templateContent));
  }),
];
