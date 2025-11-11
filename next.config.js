/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Exclude large project files from serverless function bundles
  experimental: {
    outputFileTracingExcludes: {
      '/api/projects/**': ['./public/projects/**'],
    },
  },
}

module.exports = nextConfig
