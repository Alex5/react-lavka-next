import {APP_CONFIG} from "@/lavka.config";
import {headers as nextHeaders} from "next/dist/server/request/headers";

export async function fetcher(input: string | URL | globalThis.Request,init?: RequestInit) {
    const headers = await nextHeaders();

    return fetch(`${APP_CONFIG.API_URL}/api/v1/${input}`, {...init, headers})
}