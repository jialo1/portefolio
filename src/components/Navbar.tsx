'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/about' },
  { name: 'Expertises', href: '/expertises' },
  { name: 'Stratégie', href: '/strategie' },
  { name: 'Projets', href: '/portfolio' },
  { name: 'La Tribu', href: '/tribu' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Theme logic from ThemeToggle
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={isDark ? "/iconlogo.png" : "/iconlogolight.png"}
              alt="Digital Tribe Logo"
              width={60}
              height={60}
              className="rounded-lg"
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow' 
                : 'text-white/90 dark:text-gray-300 hover:text-white dark:hover:text-accent-yellow'
            }`}>
              Accueil
            </Link>
            <Link href="/about" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow' 
                : 'text-white/90 dark:text-gray-300 hover:text-white dark:hover:text-accent-yellow'
            }`}>
              À propos
            </Link>
            <div className="relative group">
              <button className={`transition-colors flex items-center font-medium ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow' 
                  : 'text-white/90 dark:text-gray-300 hover:text-white dark:hover:text-accent-yellow'
              }`}>
                Expertises
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200/50 dark:border-gray-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/expertises/branding" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg transition-colors">
                  Branding
                </Link>
                <Link href="/expertises/marketing" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Marketing
                </Link>
                <Link href="/expertises/web" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Web
                </Link>
                <Link href="/expertises/coaching" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-b-lg transition-colors">
                  Coaching
                </Link>
              </div>
            </div>
            <Link href="/strategie" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow' 
                : 'text-white/90 dark:text-gray-300 hover:text-white dark:hover:text-accent-yellow'
            }`}>
              Stratégie
            </Link>
            <Link href="/portfolio" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow' 
                : 'text-white/90 dark:text-gray-300 hover:text-white dark:hover:text-accent-yellow'
            }`}>
              Projets
            </Link>
            <Link href="/tribu" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow' 
                : 'text-white/90 dark:text-gray-300 hover:text-white dark:hover:text-accent-yellow'
            }`}>
              La Tribu
            </Link>
            <Link href="/contact" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow' 
                : 'text-white/90 dark:text-gray-300 hover:text-white dark:hover:text-accent-yellow'
            }`}>
              Contact
            </Link>
          </div>

          {/* Bouton thème et CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <Link 
              href="/contact"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-md hover:shadow-lg"
            >
              Commencer
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow' 
                  : 'text-white/90 dark:text-gray-300 hover:text-white dark:hover:text-accent-yellow'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl mt-4 p-4 border border-gray-200/50 dark:border-gray-700/50">
            <div className="space-y-2">
              <Link href="/" className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow py-2 font-medium transition-colors">
                Accueil
              </Link>
              <Link href="/about" className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow py-2 font-medium transition-colors">
                À propos
              </Link>
              <div className="space-y-1">
                <div className="text-gray-700 dark:text-gray-300 font-semibold py-2">Expertises</div>
                <Link href="/expertises/branding" className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent-yellow py-1 pl-4 transition-colors">
                  Branding
                </Link>
                <Link href="/expertises/marketing" className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent-yellow py-1 pl-4 transition-colors">
                  Marketing
                </Link>
                <Link href="/expertises/web" className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent-yellow py-1 pl-4 transition-colors">
                  Web
                </Link>
                <Link href="/expertises/coaching" className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent-yellow py-1 pl-4 transition-colors">
                  Coaching
                </Link>
              </div>
              <Link href="/strategie" className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow py-2 font-medium transition-colors">
                Stratégie
              </Link>
              <Link href="/portfolio" className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow py-2 font-medium transition-colors">
                Projets
              </Link>
              <Link href="/tribu" className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow py-2 font-medium transition-colors">
                La Tribu
              </Link>
              <Link href="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-yellow py-2 font-medium transition-colors">
                Contact
              </Link>
              <Link 
                href="/contact"
                className="block bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark transition-colors text-center mt-4 font-medium shadow-md hover:shadow-lg"
              >
                Commencer
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 