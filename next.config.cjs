const nextIntl = require('next-intl/plugin')();

module.exports = nextIntl({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en'
  }
});
