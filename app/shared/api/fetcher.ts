const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) throw new Error("VITE_API_URL must be provided");

export async function fetcher(input: RequestInfo | URL, init?: RequestInit) {
    const res = await fetch(`${import.meta.env.DEV ? "" : API_URL}/api/v1/`.concat(input.toString()), init);

    return await res.json();
}
