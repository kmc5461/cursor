/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion"],
  },
  output: "standalone",
};

module.exports = nextConfig;
