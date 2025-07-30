import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata = {
  title: 'ConnieNail | 네일아트의 시작',
  description: '코니네일은 당신만의 맞춤형 네일을 디자인합니다',
  openGraph: {
    title: 'ConnieNail | 네일아트의 시작',
    description: '당신만의 네일 디자인을 경험하세요',
    url: 'https://www.marinebeauty.kr',
    siteName: 'ConnieNail',
    locale: 'ko_KR',
    type: 'website',
  }
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
