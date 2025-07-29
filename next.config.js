const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  images: {
    unoptimized: true
  }
};

module.exports = withNextIntl(nextConfig);
