'use client';

import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useBookingModalStore } from '@/store/useBookingModalStore';
import BookingModal from '@/components/BookingModal';

const inter = Inter({ subsets: ['latin'] });

export default function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen, closeModal } = useBookingModalStore();

  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BookingModal isOpen={isOpen} onClose={closeModal} />
      </body>
    </html>
  );
} 