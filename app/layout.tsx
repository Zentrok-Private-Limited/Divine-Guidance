import { Analytics } from '@vercel/analytics/next'
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script";
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Astro Guidance | Private Psychic & Astrology Readings',
  description: 'Find clarity, connection, and direction through private psychic, astrology, healing, and love guidance.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111020',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        <Script
          src="//code.jivosite.com/widget/0YRhmJGQmF" 
          strategy="afterInteractive"
        />
        <Header/>
        {children}
        <Footer/>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
