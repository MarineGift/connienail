import { ReactNode } from 'react';
import '../../styles/globals.css';

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}): JSX.Element {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
