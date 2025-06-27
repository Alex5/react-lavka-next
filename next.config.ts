import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
