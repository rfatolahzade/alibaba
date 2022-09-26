/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'flagcdn.com']
  },
  async rewrites () {
    return [
      {
        source: '/:path*',
        destination: 'https://restcountries.com/:path*'
      }
    ]
  }
}

module.exports = nextConfig
