/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

const config = withPWA({
  experimental: {
    serverActions: {
      allowedOrigins: ['*']
    }
  },
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr'
  }
});

module.exports = config;
