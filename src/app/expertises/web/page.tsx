'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function WebPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-8">
              Sites Web
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Offre à ta marque une vitrine digitale stratégique, intuitive,
              esthétique, agréable et prête à convertir.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-light mb-8">Notre approche web</h2>
              
              <p className="text-gray-600 mb-8">
                Nous créons des sites web qui ne sont pas seulement beaux, 
                mais aussi performants et stratégiquement conçus pour atteindre 
                vos objectifs commerciaux. Chaque site est développé sur mesure 
                avec une attention particulière à l'expérience utilisateur.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                <div className="bg-primary/5 p-8 rounded-lg hover:bg-primary/10 transition-colors">
                  <h3 className="text-2xl font-light mb-4 text-primary">Types de projets</h3>
                  <ul className="space-y-3 text-primary/80">
                    <li>• Sites vitrines premium</li>
                    <li>• E-commerce</li>
                    <li>• Applications web</li>
                    <li>• Plateformes sur mesure</li>
                    <li>• Landing pages</li>
                    <li>• Intranets & extranets</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-8 rounded-lg hover:bg-primary/10 transition-colors">
                  <h3 className="text-2xl font-light mb-4 text-primary">Caractéristiques</h3>
                  <ul className="space-y-3 text-primary/80">
                    <li>• Design responsive</li>
                    <li>• Performance optimisée</li>
                    <li>• SEO-friendly</li>
                    <li>• Sécurité renforcée</li>
                    <li>• Interface intuitive</li>
                    <li>• Analytics intégrés</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg my-16">
                <h3 className="text-2xl font-light mb-6 text-primary">Notre processus de création</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-light text-accent">01</span>
                    <div>
                      <h4 className="font-semibold text-primary">Discovery & Planning</h4>
                      <p className="text-primary/80">Analyse des besoins, objectifs et public cible</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-light text-accent">02</span>
                    <div>
                      <h4 className="font-semibold text-primary">UX Design</h4>
                      <p className="text-primary/80">Wireframes, prototypes et parcours utilisateur</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-light text-accent">03</span>
                    <div>
                      <h4 className="font-semibold text-primary">UI Design</h4>
                      <p className="text-primary/80">Design visuel, identité et interactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-light text-accent">04</span>
                    <div>
                      <h4 className="font-semibold text-primary">Développement</h4>
                      <p className="text-primary/80">Intégration, développement et tests</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-light text-accent">05</span>
                    <div>
                      <h4 className="font-semibold text-primary">Lancement & Support</h4>
                      <p className="text-primary/80">Mise en ligne, formation et maintenance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg transition-colors"
                >
                  Créons votre présence web →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 