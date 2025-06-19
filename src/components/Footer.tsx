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
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Logo et Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <Link href="/" className="text-2xl font-light text-white hover:text-gray-200 transition-colors">
                Ted
              </Link>
              <p className="text-gray-400">
                Développeur créatif & entrepreneur, je donne vie aux idées qui sortent des sentiers battus.
              </p>
            </div>

            {/* Sections de liens */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-medium mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-center text-gray-500">
              © {currentYear} Ted. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 