import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // 지원하는 언어 목록과 기본값 설정
  const supportedLocales = ['ko', 'en', 'ja', 'es'];
  const validLocale = locale && supportedLocales.includes(locale) ? locale : 'ko';

  return {
    locale: validLocale, // 누락된 locale 속성 추가
    messages: (await import(`@/locales/${validLocale}.json`)).default
  };
});
