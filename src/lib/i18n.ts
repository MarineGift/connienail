import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // locale 기본값 및 유효성 검사
  const supportedLocales = ['ko', 'en', 'ja', 'es'];
  const validLocale = locale && supportedLocales.includes(locale) ? locale : 'ko';

  return {
    locale: validLocale, // 누락된 locale 속성 추가
    messages: (await import(`../locales/${validLocale}.json`)).default
  };
});
