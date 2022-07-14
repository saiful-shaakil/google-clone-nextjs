/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  Images: {
    domains: ["miro.medium.com"],
  },
};

module.exports = nextConfig;
