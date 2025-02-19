import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ["bimt.lk"], 
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
