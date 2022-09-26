/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'flagcdn.com'],
  },
  webpack: function (config) {
    if (config.optimization.splitChunks) {
      config.optimization.splitChunks.cacheGroups.shared = {
        name: 'app-other',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
      }
    }
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    })
    return config
  },
}

module.exports = nextConfig
