/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.parokikosambibaru.or.id',
        port: '',
        pathname: '/api/img/**',
      },
      {
        protocol: 'https',
        hostname: 'api.parokikosambibaru.or.id',
        port: '',
        pathname: '/api/ads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'web-admin-eta-gray.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/zaitun",
        destination: "/zaitun/2025/10",
        permanent: false
      }
    ]
  }
};

export default nextConfig;
