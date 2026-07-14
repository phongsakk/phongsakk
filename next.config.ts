import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.svglogos.dev",
        pathname: "/logos/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/th",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
