import nextIntl from 'next-intl/plugin.js';

const withNextIntl = nextIntl();

export default withNextIntl({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en'
  }
});
