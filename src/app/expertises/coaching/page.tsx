'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-8">
              Coaching
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Un espace collectif pour avancer sur ta marque, débloquer tes 
              idées et repartir avec des insights utiles.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-light mb-8">Notre approche du coaching</h2>
              
              <p className="text-gray-600 mb-8">
                Nous proposons un accompagnement personnalisé pour vous aider 
                à développer votre marque et votre présence digitale. Notre 
                approche combine expertise technique, vision stratégique et 
                méthodologies éprouvées.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                <div className="bg-primary/5 p-8 rounded-lg hover:bg-primary/10 transition-colors">
                  <h3 className="text-2xl font-light mb-4 text-primary">Formats disponibles</h3>
                  <ul className="space-y-3 text-primary/80">
                    <li>• Sessions individuelles</li>
                    <li>• Ateliers collectifs</li>
                    <li>• Programmes sur mesure</li>
                    <li>• Workshops d'équipe</li>
                    <li>• Mentorat long terme</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-8 rounded-lg hover:bg-primary/10 transition-colors">
                  <h3 className="text-2xl font-light mb-4 text-primary">Thématiques</h3>
                  <ul className="space-y-3 text-primary/80">
                    <li>• Stratégie de marque</li>
                    <li>• Marketing digital</li>
                    <li>• Communication</li>
                    <li>• Développement commercial</li>
                    <li>• Innovation & créativité</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg my-16">
                <h3 className="text-2xl font-light mb-6 text-primary">Les bénéfices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Vision claire</h4>
                    <p className="text-primary/80 mb-6">
                      Définissez une direction stratégique claire pour votre marque 
                      et vos objectifs commerciaux.
                    </p>
                    
                    <h4 className="font-semibold mb-3 text-primary">Méthodologie</h4>
                    <p className="text-primary/80 mb-6">
                      Acquérez des outils et méthodes pratiques pour développer 
                      votre activité de manière autonome.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Expertise</h4>
                    <p className="text-primary/80 mb-6">
                      Bénéficiez de notre expertise et de retours d'expérience 
                      concrets sur votre secteur.
                    </p>
                    
                    <h4 className="font-semibold mb-3 text-primary">Résultats</h4>
                    <p className="text-primary/80">
                      Obtenez des résultats mesurables et un plan d'action 
                      clair pour atteindre vos objectifs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg transition-colors"
                >
                  Réservez votre session →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 