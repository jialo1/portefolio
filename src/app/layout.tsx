import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Digital Tribe - Créateur Digital & Entrepreneur',
  description: 'Digital Tribe, créateur digital passionné spécialisé en branding, marketing digital, développement web et coaching. Transformez vos idées en expériences exceptionnelles.',
  keywords: 'digital tribe, designer, branding, marketing digital, développement web, coaching, entrepreneur, créatif',
  authors: [{ name: 'Digital Tribe' }],
  openGraph: {
    title: 'Digital Tribe - Créateur Digital & Entrepreneur',
    description: 'Transformez vos idées en expériences exceptionnelles avec Digital Tribe',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Tribe - Créateur Digital & Entrepreneur',
    description: 'Transformez vos idées en expériences exceptionnelles',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 
