import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import { scheduleHandlers } from "./handlers/findSchedule";
import { myScheduleHandlers } from "./handlers/mySchedule";

export const worker = setupWorker(
  ...handlers,
  ...scheduleHandlers,
  ...myScheduleHandlers,
);
