import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import { myScheduleHandlers } from "./handlers/mySchedule";

export const worker = setupWorker(...handlers, ...myScheduleHandlers);
