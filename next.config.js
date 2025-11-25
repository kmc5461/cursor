/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion"],
  },
  images: {
    unoptimized: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
