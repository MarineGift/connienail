import '../../globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Connie's Nail - Premium Nail Salon",
  description: 'Professional nail care and AI-powered nail art design service',
}

type LocaleLayoutProps = {
  children: ReactNode
  params: {
    locale: string
  }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  )
}
