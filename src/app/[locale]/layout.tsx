import { ReactNode } from 'react';
import '../../styles/globals.css';

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
