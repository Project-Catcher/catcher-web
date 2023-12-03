/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  experimental: {
    esmExternals: false,
  },
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
