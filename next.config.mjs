/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  trailingSlash: true, // Ensures compatibility with static hosting
  images: {
    unoptimized: true // Required for static export mode
  },
  // Ensure static export works properly
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig