/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Only allow images from trusted domains
  images: {
    domains: ["bimt.lk"],
  },

  eslint: {
    ignoreDuringBuilds: false, // ❌ Enable ESLint (Don't ignore errors)
  },

  typescript: {
    ignoreBuildErrors: false, // ❌ Enable TypeScript checking (Fix errors instead)
  },

  experimental: {
    appDir: false, // ✅ Set to false if using `pages/` router
  },

  webpack: (config:any) => {
    // ✅ Remove manual CSS/SCSS handling (Next.js handles this automatically)
    return config;
  },
};

module.exports = nextConfig;
