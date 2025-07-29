import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
<<<<<<< HEAD
import './globals.css';  // 경로 수정됨
=======
import '../../globals.css'; // 상대 경로로 globals.css를 불러옴
>>>>>>> 2d8b3495d4ac1c966e5036f9bb4c7fcf1db7148e

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Connie's Nail - Premium Nail Salon",
  description: 'Professional nail care and AI-powered nail art design service',
};

<<<<<<< HEAD
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
=======
type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({ children, params }: Props) {
>>>>>>> 2d8b3495d4ac1c966e5036f9bb4c7fcf1db7148e
  return (
    <html lang={params.locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
