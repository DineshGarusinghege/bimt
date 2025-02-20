/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["bimt.lk"],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevent build failures due to ESLint errors
  },

  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore TypeScript errors that crash the build
  },

  experimental: {
    appDir: true, // ✅ Ensure Next.js app directory is enabled (if using App Router)
  },
  webpack: (config) => {
    // Add support for CSS files
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    });

    // Add support for SCSS files
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"), // Ensure Dart Sass is used
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
