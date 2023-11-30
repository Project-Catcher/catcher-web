import { remainContent } from "mock/data/remains";
import { templateContent } from "mock/data/templates";
import { http } from "msw";

const BASE_URL = "http://localhost:3000/api";

export const templateHandlers = [
  http.get(`${BASE_URL}/remains`, ({ request }) => {
    const url = request.url;
    return new Response(JSON.stringify(remainContent));
  }),
  http.get(`${BASE_URL}/templates`, ({ request }) => {
    const url = request.url;
    return new Response(JSON.stringify(templateContent));
  }),
];
