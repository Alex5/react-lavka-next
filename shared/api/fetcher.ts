import {APP_CONFIG} from "@/lavka.config";

export async function fetcher<Response>(input: RequestInfo | URL, init?: RequestInit) {
    const res = await fetch(`${APP_CONFIG.API_URL}/api/v1/`.concat(input.toString()), init);

    if (res.ok) {
        return await res.json() as Promise<Response>;
    } else {
        console.error("error response from fetcher: ", res);
    }
}
