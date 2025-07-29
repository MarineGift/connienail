import '../../globals.css'

type LocaleLayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  )
}
