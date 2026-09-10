import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/hero/:path*",
        destination: "/images/hero/:path*",
      },
    ];
  },
};

export default nextConfig;
