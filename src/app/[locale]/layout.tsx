import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../styles/globals.css';  // 수정된 상대 경로

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Connie's Nail - Premium Nail Salon",
  description: 'Professional nail care and AI-powered nail art design service',
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
