import {YandexUserInfo} from "@/shared/api/hooks/use-auth/use-auth";
import {fetcher} from "@/lib/api/fetcher";
import {headers as nextHeaders} from "next/headers"

export async function getUser(): Promise<{ user: YandexUserInfo | null }> {
    const headers = await nextHeaders();

    const response = await fetcher(`me`, {
        headers,
        credentials: 'include'
    })

    console.log({response})

    if (response.status === 401) return {user: null};

    return {user: await response.json()};
}