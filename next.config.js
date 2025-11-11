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
  // Exclude project files from serverless function bundles to reduce function size
  // The files are served as static assets from /public and are accessible at runtime
  // This prevents bundling large image/video files into the serverless function
  experimental: {
    outputFileTracingExcludes: {
      '/api/projects/**': [
        './public/projects/**/*.png',
        './public/projects/**/*.jpg',
        './public/projects/**/*.jpeg',
        './public/projects/**/*.gif',
        './public/projects/**/*.webp',
        './public/projects/**/*.mp4',
        './public/projects/**/*.webm',
        './public/projects/**/*.mov',
        './public/projects/**/*.svg',
      ],
    },
  },
}

module.exports = nextConfig
