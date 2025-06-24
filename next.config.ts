import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [new URL('https://avatars.mds.yandex.net/**')],
    },
};

export default nextConfig;
