import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { scheduleHandlers } from "./handlers/findSchedule";

export const server = setupServer(...handlers, ...scheduleHandlers);
