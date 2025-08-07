/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bbymedia-web',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;