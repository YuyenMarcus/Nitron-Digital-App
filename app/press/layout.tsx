import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press - Nitron',
  description: 'Press releases, media kit, and press contact information for Nitron. Find the latest news and resources for journalists and media outlets.',
}

export default function PressLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
