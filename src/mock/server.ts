import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { templateHandlers } from "./handlers/getTemplates";

export const server = setupServer(...handlers, ...templateHandlers);
