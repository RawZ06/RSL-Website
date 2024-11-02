import { settingsReader } from "~/server/core/settings-reader";

export default defineEventHandler(async (event) => {
  const protocol = event.node.req.headers["x-forwarded-proto"] || "http";
  const host = event.node.req.headers["host"];

  const fullUrl = `${protocol}://${host}`;
  return settingsReader(fullUrl);
});
