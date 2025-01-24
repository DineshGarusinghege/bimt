import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
  images: {
    domains: ["bimt.lk"], // Add the hostname of the external image source
  },
};

export default nextConfig;
