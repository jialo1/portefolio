'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-8">
              Marketing Digital
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Développe ta présence en ligne et attire ton audience cible
              avec une stratégie marketing efficace et mesurable.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-light mb-8">Notre approche marketing</h2>
              
              <p className="text-gray-600 mb-8">
                Nous développons des stratégies marketing qui convertissent, 
                fidélisent et créent une véritable connexion avec votre audience. 
                Notre approche est basée sur les données, l'innovation et une 
                compréhension approfondie de votre marché.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                <div className="bg-primary/5 p-8 rounded-lg hover:bg-primary/10 transition-colors">
                  <h3 className="text-2xl font-light mb-4 text-primary">Nos services</h3>
                  <ul className="space-y-3 text-primary/80">
                    <li>• Stratégie marketing digitale</li>
                    <li>• Gestion des réseaux sociaux</li>
                    <li>• Marketing de contenu</li>
                    <li>• Email marketing</li>
                    <li>• SEO & SEA</li>
                    <li>• Analytics & Reporting</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-8 rounded-lg hover:bg-primary/10 transition-colors">
                  <h3 className="text-2xl font-light mb-4 text-primary">Nos objectifs</h3>
                  <ul className="space-y-3 text-primary/80">
                    <li>• Augmentation de la visibilité</li>
                    <li>• Génération de leads qualifiés</li>
                    <li>• Engagement communautaire</li>
                    <li>• Conversion et fidélisation</li>
                    <li>• ROI mesurable</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg my-16">
                <h3 className="text-2xl font-light mb-6 text-primary">Notre méthodologie</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary">1. Analyse</h4>
                    <p className="text-primary/80">Étude de marché, audit digital et analyse concurrentielle</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">2. Stratégie</h4>
                    <p className="text-primary/80">Définition des objectifs, KPIs et plan d'action</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">3. Exécution</h4>
                    <p className="text-primary/80">Mise en œuvre, optimisation et suivi des performances</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg transition-colors"
                >
                  Boostez votre présence digitale →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 