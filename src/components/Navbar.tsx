'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/about' },
  { name: 'Expertises', href: '/expertises' },
  { name: 'La Méthode', href: '/methode' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Shop', href: '/shop' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-light hover:text-accent transition-colors">
              Ted
            </Link>

            {/* Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/expertises/branding" className="hover:text-accent transition-colors">
                Branding
              </Link>
              <Link href="/expertises/marketing" className="hover:text-accent transition-colors">
                Marketing
              </Link>
              <Link href="/expertises/web" className="hover:text-accent transition-colors">
                Web
              </Link>
              <Link href="/expertises/coaching" className="hover:text-accent transition-colors">
                Coaching
              </Link>
              <Link 
                href="/contact"
                className="px-4 py-2 bg-accent text-primary font-medium rounded-full hover:bg-accent-light transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Menu mobile */}
            <button className="md:hidden text-white hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 