import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nitron - Your Business, Simplified',
  description: 'Manage Invoices, Automate Workflows, and Get Paid—All from Your Phone. The ultimate business management app for freelancers and small business owners.',
  keywords: 'business management, invoicing, automation, freelancer tools, small business, workflow automation',
  authors: [{ name: 'Nitron Team' }],
  creator: 'Nitron',
  publisher: 'Nitron',
  robots: 'index, follow',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Nitron - Your Business, Simplified',
    description: 'Manage Invoices, Automate Workflows, and Get Paid—All from Your Phone.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitron - Your Business, Simplified',
    description: 'Manage Invoices, Automate Workflows, and Get Paid—All from Your Phone.',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics measurementId="G-F323H8PS99" />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
} 