import {fetcher} from "@/lib/api/fetcher";

export async  function GET() {
    const res = await fetcher("category");

    const json = await res.json();

    return new Response(JSON.stringify(json), {headers: {"content-type": "application/json"}});
}