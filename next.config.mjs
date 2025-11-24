/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr'
  }
}

export default nextConfig
