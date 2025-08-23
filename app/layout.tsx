import { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './root.css'

export const metadata: Metadata = {
  title: 'After Sunday Project',
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
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
