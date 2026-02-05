/** @type {import('next').NextConfig} */
const { redirects } = require('./lib/redirects.js');

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  trailingSlash: false,
  async redirects() {
    return redirects();
  }
};

module.exports = nextConfig;
