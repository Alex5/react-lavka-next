if (!process.env.NEXT_PUBLIC_API_URL) throw new Error('no NEXT_PUBLIC_API_URL environment variable');

export const APP_CONFIG = {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
} as const