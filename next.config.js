const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin({
  // 여기에 i18n 설정을 추가하세요
  locales: ['en', 'ko'],
  defaultLocale: 'ko',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 필요시 추가 옵션 지정 가능
};

module.exports = withNextIntl(nextConfig);
