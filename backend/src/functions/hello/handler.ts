import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { container } from "./container";
import { Hello } from "./usecase";

import schema from "./schema";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const c = container.get<Hello>(Hello);
  const res = c.invoke(event.body.name, event);
  return formatJSONResponse(res);
};

export const main = middyfy(handler);
