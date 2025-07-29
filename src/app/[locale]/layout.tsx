// 수정된 코드 (정상 동작)
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // ✅ Promise로 변경
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params; // ✅ await 사용
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
