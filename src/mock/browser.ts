import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import { templateHandlers } from "./handlers/getTemplates";

export const worker = setupWorker(...handlers, ...templateHandlers);
