/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.westside.com',
        pathname: '/cdn/shop/files/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  }

export default nextConfig;
