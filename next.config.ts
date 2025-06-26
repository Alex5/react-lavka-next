import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    logging: {
        fetches: {
            fullUrl: true,
            hmrRefreshes: true,
        },
    },
    output: "standalone",
    images: {
        remotePatterns: [
            new URL('https://avatars.mds.yandex.net/**'),
            new URL('https://yastatic.net/**'),
            new URL('https://avatars.yandex.net/**')
        ],
    },
};

export default nextConfig;
