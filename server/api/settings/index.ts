import {settingsReader} from "~/server/core/settings-reader";

export default defineEventHandler(async () => {
    return settingsReader()
});
