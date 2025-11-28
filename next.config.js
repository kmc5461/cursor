/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false,           // critters hatasını çözer
    optimizePackageImports: ["framer-motion"],
  },
  output: "standalone",
};

module.exports = nextConfig;
