import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { UTEC_LOGO_URL } from '@/lib/branding'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return 'http://localhost:3000'
}

const ogTitle = 'UTEC | Managed IT, Security & Audio Visual'
const ogDescription =
  'Technology that just works — so your business can too. Managed IT, security, audio visual, and office technology in Ann Arbor & Southeast Michigan.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: 'UTEC | Managed IT, Security & Audio Visual | Ann Arbor & Southeast Michigan',
  description:
    'UTEC delivers managed IT services (including security), professional audio visual, and office technology for businesses in Ann Arbor, Troy, and Southeast Michigan. Local team of 60 experts.',
  keywords:
    'managed IT services, IT security, ransomware protection, audio visual, conference rooms, Microsoft Teams Rooms, digital signage, IT support, Ann Arbor, Troy, Detroit, Southeast Michigan, copiers, printers, office technology',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    type: 'website',
    siteName: 'UTEC',
    locale: 'en_US',
    images: [
      {
        url: UTEC_LOGO_URL,
        alt: 'UTEC logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ogTitle,
    description: ogDescription,
    images: [UTEC_LOGO_URL],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
