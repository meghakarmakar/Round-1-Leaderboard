import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['storage.googleapis.com', 'ui-avatars.com', 'picsum.photos'],
  },
  assetPrefix: '/dt-actualize',
};

export default nextConfig;
