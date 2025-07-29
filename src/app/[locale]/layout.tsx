import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

// Inter 폰트 초기화
const inter = Inter({ subsets: ['latin'] });

// Next.js 15 호환 타입 정의
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const metadata: Metadata = {
  title: "Connie's Nail - Premium Nail Salon",
  description: 'Professional nail care and AI-powered nail art design service',
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  // params를 await로 처리
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
