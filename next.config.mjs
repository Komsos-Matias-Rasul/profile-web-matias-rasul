/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.parokikosambibaru.or.id",
        pathname: "/api/img/**",
      },
      {
        protocol: "https",
        hostname: "api.parokikosambibaru.or.id",
        pathname: "/api/ads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "web-admin-eta-gray.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/zaitun",
        destination: "/zaitun/2025/10",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
