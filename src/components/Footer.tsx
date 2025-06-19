import Link from 'next/link';

export default function Footer() {
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
    <footer className="bg-primary dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-yellow via-accent-orange to-accent-red rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DT</span>
                </div>
                <span className="text-xl font-bold">Digital Tribe</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Créateur digital passionné, je transforme vos idées en expériences exceptionnelles. 
                Du branding au développement web, en passant par le marketing digital, 
                je vous accompagne dans votre réussite.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-yellow/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-yellow/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-yellow/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Liens rapides</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-accent-yellow transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-300 hover:text-accent-yellow transition-colors">
                    Projets
                  </Link>
                </li>
                <li>
                  <Link href="/strategie" className="text-gray-300 hover:text-accent-yellow transition-colors">
                    Stratégie
                  </Link>
                </li>
                <li>
                  <Link href="/tribu" className="text-gray-300 hover:text-accent-yellow transition-colors">
                    La Tribu
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-accent-yellow transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/expertises/branding" className="text-gray-300 hover:text-accent-yellow transition-colors">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link href="/expertises/marketing" className="text-gray-300 hover:text-accent-yellow transition-colors">
                    Marketing Digital
                  </Link>
                </li>
                <li>
                  <Link href="/expertises/web" className="text-gray-300 hover:text-accent-yellow transition-colors">
                    Développement Web
                  </Link>
                </li>
                <li>
                  <Link href="/expertises/coaching" className="text-gray-300 hover:text-accent-yellow transition-colors">
                    Coaching
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Ligne de séparation */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © 2024 Digital Tribe. Tous droits réservés.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-300 hover:text-accent-yellow text-sm transition-colors">
                  Politique de confidentialité
                </Link>
                <Link href="#" className="text-gray-300 hover:text-accent-yellow text-sm transition-colors">
                  Conditions d'utilisation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 