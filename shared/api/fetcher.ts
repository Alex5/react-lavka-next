import {APP_CONFIG} from "@/lavka.config";

export async function fetcher<Data>(input: RequestInfo | URL, init?: RequestInit): Promise<Data> {
    const res = await fetch(`${APP_CONFIG.API_URL}/api/v1/`.concat(input.toString()), { ...init, credentials: 'include'});

    return await res.json();
}
