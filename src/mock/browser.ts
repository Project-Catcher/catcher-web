import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import { scheduleHandlers } from "./handlers/findSchedule";

export const worker = setupWorker(...handlers, ...scheduleHandlers);
