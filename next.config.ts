import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // อนุญาตทุกโดเมน
      },
    ],
  },
};

export default nextConfig;
