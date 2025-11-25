/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  // ‼ PWA, Critters, optimizeCss, optimizePackageImports tamamen kapatıldı.
  experimental: {
    optimizeCss: false,
    optimizePackageImports: [],
  },

  output: "standalone",
};

module.exports = nextConfig;
