import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from './header'
import Footer from './footer'
import styles from './root.module.css'
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
  themeColor: 'deepskyblue',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

function Controller() {
  return (
    <div className={styles.controller}>
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <Header />
        <main style={{ maxWidth: 'var(--max-width)', margin: 'auto' }}>
          {children}
        </main>
        <Footer />
        <Controller />
        <SpeedInsights />
      </body>
    </html>
  )
}
