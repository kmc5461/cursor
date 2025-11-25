// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion"],
  },
  images: {
    unoptimized: true,
  },
  output: "standalone",
});
