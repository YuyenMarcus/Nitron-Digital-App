import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Nitron',
  description: 'Join the Nitron team and help us simplify business management for entrepreneurs worldwide. Explore our culture, benefits, and open positions.',
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
