import {presetVerifier} from "~/server/core/preset-verifier";
import {presetReader} from "~/server/core/preset-reader";

export default defineEventHandler(async (event) => {
    const name = getRouterParam(event, 'preset')
    try {
        const filename = presetVerifier(name)
        return presetReader(filename);
    } catch (error) {
        console.error(error)
        setResponseStatus(event, 404);
    }
});
