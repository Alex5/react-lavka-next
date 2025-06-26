import {APP_CONFIG} from "@/lavka.config";

export function fetcher(input: string | URL | globalThis.Request,init?: RequestInit) {
    return fetch(`${APP_CONFIG.API_URL}/api/v1/${input}`, init)
}