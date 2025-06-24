const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) throw new Error("NEXT_PUBLIC_API_URL must be provided");

export async function fetcher<Res>(input: RequestInfo | URL, init?: RequestInit) {
    const res = await fetch(`${API_URL}/api/v1/`.concat(input.toString()), init);

    return await res.json() as Promise<Res>;
}
