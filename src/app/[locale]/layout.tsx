import { ReactNode } from 'react';
import '../../styles/globals.css';
import { LayoutProps } from 'next';

export default function LocaleLayout({
  children,
  params,
}: LayoutProps<{ locale: string }>): JSX.Element {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
