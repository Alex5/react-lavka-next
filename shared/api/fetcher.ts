import {APP_CONFIG} from "@/lavka.config";

export async function fetcher<Response>(input: RequestInfo | URL, init?: RequestInit) {
    const res = await fetch(`${APP_CONFIG.API_URL}/api/v1/`.concat(input.toString()), {...init, credentials: 'include'});

   try {
       return await res.json() as Response;
   } catch (e) {
       console.error(e, {res})

       return Promise.reject(res)
   }
}
