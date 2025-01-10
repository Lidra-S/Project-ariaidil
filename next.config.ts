import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s68q9pfuml.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
