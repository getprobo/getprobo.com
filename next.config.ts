import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*/',
          destination: '/:path*',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
