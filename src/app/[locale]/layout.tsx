interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: LayoutProps) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
