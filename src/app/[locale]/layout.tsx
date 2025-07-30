import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ko' }];
}

interface LayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  let messages;
  try {
    messages = await getMessages({ locale: params.locale });
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
