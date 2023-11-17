import { http } from "msw";

// Backend API Server URL
const baseUrl = "http://localhost:3000";

export const handlers = [
  http.get(`${baseUrl}/api/test`, async ({ request, cookies, params }) => {
    return new Response("test");
  }),
];
