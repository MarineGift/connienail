import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ko', 'en', 'ja', 'es'],
  defaultLocale: 'ko',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(ko|en|ja|es)/:path*']
};
