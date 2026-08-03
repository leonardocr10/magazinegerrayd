import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: ".next-static",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
