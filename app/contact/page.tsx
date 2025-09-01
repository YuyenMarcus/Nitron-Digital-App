import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Nitron',
  description: 'Get in touch with the Nitron team. We\'re here to help with any questions about our business management app.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ContactForm />
    </main>
  )
}
