import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import { myScheduleHandlers } from "./handlers/mySchedule";
import { basicInfoHandlers } from "./handlers/postBasicInfo";

export const worker = setupWorker(
  ...handlers,
  ...myScheduleHandlers,
  ...basicInfoHandlers,
);
