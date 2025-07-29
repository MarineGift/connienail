import { ReactNode } from 'react';
import '../../styles/globals.css';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params }: Props): JSX.Element {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
