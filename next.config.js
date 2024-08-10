/** @type {import('next').NextConfig} */
const nextBuildId = require('next-build-id');

const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

module.exports = nextConfig;
