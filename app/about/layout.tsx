import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Nitron',
  description: 'Learn about Nitron\'s mission to simplify business management for freelancers and small business owners. Meet our team and discover our story.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
