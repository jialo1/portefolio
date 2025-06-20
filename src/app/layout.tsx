import type { Metadata } from 'next';
import LayoutProvider from '@/components/LayoutProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tribe On - Créateur Digital & Entrepreneur',
  description: 'Tribe On, créateur digital passionné spécialisé en branding, marketing digital, développement web et coaching. Transformez vos idées en expériences exceptionnelles.',
  keywords: 'tribe on, designer, branding, marketing digital, développement web, coaching, entrepreneur, créatif',
  authors: [{ name: 'Tribe On' }],
  openGraph: {
    title: 'Tribe On - Créateur Digital & Entrepreneur',
    description: 'Transformez vos idées en expériences exceptionnelles avec Tribe On',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tribe On - Créateur Digital & Entrepreneur',
    description: 'Votre partenaire pour une présence digitale exceptionnelle.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutProvider>
      {children}
    </LayoutProvider>
  );
} 
