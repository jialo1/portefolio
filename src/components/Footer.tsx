'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

    // Optional: listen for theme changes from other components
    const handleThemeChange = () => {
      const newIsDark = document.documentElement.classList.contains('dark');
      setIsDark(newIsDark);
    };

    window.addEventListener('storage', handleThemeChange);
    // You might need a more robust way to listen for theme changes depending on your app's structure

    return () => {
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Branding & Stratégie", href: "/expertises/branding" },
        { name: "Marketing", href: "/expertises/marketing" },
        { name: "Sites Web", href: "/expertises/web" },
        { name: "Coaching", href: "/expertises/coaching" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Réserver un appel", href: "/contact" },
        { name: "LinkedIn", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "Twitter", href: "#" }
      ]
    },
    {
      title: "Légal",
      links: [
        { name: "Mentions légales", href: "/legal" },
        { name: "Politique de confidentialité", href: "/privacy" },
        { name: "CGV", href: "/terms" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src={isDark ? "/iconlogo.png" : "/iconlogolight.png"}
                alt="Tribe On Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
            </Link>
            <p className="text-gray-400">
              Votre partenaire pour une présence digitale exceptionnelle.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-accent-yellow transition-colors">À propos</Link></li>
              <li><Link href="/expertises" className="hover:text-accent-yellow transition-colors">Expertises</Link></li>
              <li><Link href="/portfolio" className="hover:text-accent-yellow transition-colors">Projets</Link></li>
              <li><Link href="/contact" className="hover:text-accent-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/expertises/branding" className="hover:text-accent-yellow transition-colors">Branding</Link></li>
              <li><Link href="/expertises/marketing" className="hover:text-accent-yellow transition-colors">Marketing Digital</Link></li>
              <li><Link href="/expertises/web" className="hover:text-accent-yellow transition-colors">Développement Web</Link></li>
              <li><Link href="/expertises/coaching" className="hover:text-accent-yellow transition-colors">Coaching</Link></li>
            </ul>
          </div>

          {/* Légal */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-accent-yellow transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/terms" className="hover:text-accent-yellow transition-colors">Conditions d'utilisation</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2024 Tribe On. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 