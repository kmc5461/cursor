/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  output: "standalone",
};

module.exports = nextConfig;
