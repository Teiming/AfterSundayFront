import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from './header'
import Footer from './footer'
import './root.css'

export const metadata: Metadata = {
  title: 'After Sunday Project',
  manifest: '/manifest.json',
  icons: { apple: '/app-icon192.png' },
  other: {
    charSet: 'utf-8',
  },
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
