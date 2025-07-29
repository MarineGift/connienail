import '../globals.css'

export default async function LocaleLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  )
}
