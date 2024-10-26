import {presetVerifier} from "~/server/core/preset-verifier";
import {presetReader} from "~/server/core/preset-reader";

export default defineEventHandler(async (event) => {
    const protocol = event.node.req.headers['x-forwarded-proto'] || 'http';
    const host = event.node.req.headers['host'];

    const fullUrl = `${protocol}://${host}`;
    const name = getRouterParam(event, 'preset')
    try {
        const filename = presetVerifier(name)
        return presetReader(fullUrl, filename);
    } catch (error) {
        console.error(error)
        setResponseStatus(event, 404);
    }
});
