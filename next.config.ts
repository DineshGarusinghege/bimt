import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
  images: {
    domains: ["bimt.lk"], 
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"), // Use Dart Sass
            sassOptions: {
              fiber: false, // Prevents the legacy API warning
            },
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
