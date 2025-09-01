import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Center - Nitron',
  description: 'Get help with Nitron. Find answers to common questions, troubleshooting guides, and detailed documentation for our business management platform.',
}

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
