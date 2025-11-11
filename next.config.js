/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable ESLint during build to prevent deprecated options error
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during build (optional - remove if you want type checking)
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // Disable image optimization to avoid 401 errors on Vercel
    // Local images in /public folder will be served directly
    unoptimized: true,
    // Keep remote patterns for external images if needed
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
