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
}

module.exports = nextConfig
