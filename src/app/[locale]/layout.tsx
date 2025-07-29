import '../globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import type { LayoutProps } from 'next'

export const metadata: Metadata = {
  title: "Connie's Nail - Premium Nail Salon",
  description: 'Professional nail care and AI-powered nail art design service',
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<{ locale: string }>) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  )
}
