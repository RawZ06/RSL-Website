import { PRESETS } from "~/server/core/preset-list";

export default defineEventHandler(async () => {
  return Object.keys(PRESETS);
});
