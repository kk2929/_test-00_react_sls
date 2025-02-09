import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const res = {
    message: `Hello ${event.body.name}!, fghfghfhgt`,
    event,
  };
  return formatJSONResponse(res);
};

// export const main = middyfy(handler, schema);
export const main = middyfy(handler);
