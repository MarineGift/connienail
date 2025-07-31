import type { LayoutProps } from '../../types';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ko' }];
}

export default async function LocaleLayout(props: LayoutProps<{ locale: string }>) {
  const { children, params } = props;
  const { locale } = params;

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
