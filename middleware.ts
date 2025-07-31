import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ko'],
  defaultLocale: 'ko'
});

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)']
};