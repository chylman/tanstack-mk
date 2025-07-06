import createClient, {type Middleware} from "openapi-fetch";
import type {paths} from "./schema.ts";

export const client = createClient<paths>({ baseUrl: "https://musicfun.it-incubator.app/api/1.0/" });


const myMiddleware: Middleware = {
    async onRequest({ request }) {
        request.headers.set("API-KEY", import.meta.env.VITE_API_KEY);

        const accessToken = localStorage.getItem('musicfun-access-token' )
        if (accessToken) {

            request.headers.set("Authorization", `Bearer ${accessToken}`);
        }

        return request;
    }
};

client.use(myMiddleware);
