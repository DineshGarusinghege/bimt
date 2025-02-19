import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["bimt.lk"],
  },
  experimental: {
    turbo: {}, // ✅ Correct way to configure Turbopack
  },
};

export default nextConfig;
