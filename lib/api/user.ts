import {YandexUserInfo} from "@/shared/api/hooks/use-auth/use-auth";
import {fetcher} from "@/lib/api/fetcher";
import {headers} from "next/headers";

export async function getUser(): Promise<{ user: YandexUserInfo | null }> {
    const response = await fetcher(`me`, {
        credentials: "include",
        headers: await headers()
    })

    if (response.status === 401) return {user: null};

    return {user: await response.json()};
}

export async function logout() {
    await fetcher("logout", {
        method: "PATCH"
    })
}