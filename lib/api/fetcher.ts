import { APP_CONFIG } from "@/lavka.config";
import { cookies } from "next/headers";

export async function fetcher(input: string | URL | Request, init?: RequestInit) {
    const cookieStore = await cookies();

    const sessionCookie = cookieStore.get("hono_mock_session")?.value;

    return fetch(`${APP_CONFIG.API_URL}/api/v1/${input}`, {
        ...init,
        headers: {
            ...init?.headers,
            "Content-Type": "application/json",
            ...(sessionCookie ? { cookie: `hono_mock_session=${sessionCookie}` } : {}),
        },
    });
}
